import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import vm from 'node:vm'
import ts from 'typescript'

function load(file, globals, dependencies = {}) {
  const code = ts.transpileModule(readFileSync(new URL(`../src/${file}`, import.meta.url), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText
  const module = { exports: {} }
  vm.runInNewContext(code, { module, exports: module.exports, require: (name) => dependencies[name], ...globals })
  return module.exports
}

function scheduler() {
  let id = 0
  const frames = new Map()
  const window = Object.assign(new EventTarget(), {
    requestAnimationFrame(callback) { frames.set(++id, callback); return id },
    cancelAnimationFrame(frame) { frames.delete(frame) },
  })
  const step = () => {
    const batch = [...frames.values()]
    frames.clear()
    batch.forEach((callback) => callback())
  }
  const settle = () => {
    for (let count = 0; frames.size && count < 200; count++) step()
    assert.equal(frames.size, 0, 'Animation must stop after settling')
  }
  return { window, frames, step, settle }
}

function motionFixture() {
  const timing = scheduler()
  const preference = Object.assign(new EventTarget(), { matches: true })
  timing.window.matchMedia = () => preference
  let reads = 0
  const stage = Object.assign(new EventTarget(), {
    getBoundingClientRect() { reads++; return { left: 100, top: 200, width: 400, height: 500 } },
  })
  const style = { transform: '', removeProperty() { this.transform = '' } }
  const { attachHeroMotion } = load('lib/heroMotion.ts', { window: timing.window })
  const cleanup = attachHeroMotion(stage, { style })
  const move = (x, y, pointerType = 'mouse') => {
    stage.dispatchEvent(Object.assign(new Event('pointermove'), { clientX: x, clientY: y, pointerType }))
  }
  return { ...timing, stage, style, preference, cleanup, move, reads: () => reads }
}

test('pointer events share one layout read per frame and keep the original tilt', () => {
  const fixture = motionFixture()
  for (let i = 0; i < 300; i++) fixture.move(500, 200)
  assert.equal(fixture.frames.size, 1)
  assert.equal(fixture.reads(), 0)
  fixture.step()
  assert.equal(fixture.reads(), 1)
  fixture.settle()
  const [x, y] = fixture.style.transform.match(/-?[\d.]+/g).map(Number)
  assert(Math.abs(x - 4) < 0.015)
  assert(Math.abs(y - 6) < 0.015)
  assert.equal(fixture.reads(), 1)
  fixture.cleanup()
})

test('pointer leave cancels pending coordinates and returns to the original position', () => {
  const fixture = motionFixture()
  fixture.move(500, 200)
  fixture.step()
  fixture.move(100, 700)
  fixture.stage.dispatchEvent(new Event('pointerleave'))
  fixture.settle()
  assert.equal(fixture.reads(), 1)
  const angles = fixture.style.transform.match(/-?[\d.]+/g).map(Number)
  assert(angles.every((angle) => Math.abs(angle) < 0.015))
  fixture.cleanup()
})

test('touch, disabled motion and cleanup do not leave active frame work', () => {
  const fixture = motionFixture()
  fixture.move(500, 200, 'touch')
  assert.equal(fixture.frames.size, 0)
  fixture.move(500, 200)
  fixture.preference.matches = false
  fixture.preference.dispatchEvent(new Event('change'))
  assert.equal(fixture.frames.size, 0)
  assert.equal(fixture.style.transform, '')
  fixture.move(500, 200)
  assert.equal(fixture.frames.size, 0)
  fixture.preference.matches = true
  fixture.move(500, 200)
  fixture.cleanup()
  fixture.move(500, 200)
  assert.equal(fixture.frames.size, 0)
})

function navigationFixture(withObserver = true) {
  const timing = scheduler()
  Object.assign(timing.window, { scrollY: 0, innerHeight: 1000 })
  const offsets = [800, 1800, 4000, 6000, 7500]
  const navigation = offsets.map((_, i) => ({ href: `#section-${i}` }))
  const document = {
    documentElement: { scrollHeight: 9000 },
    querySelector(href) {
      if (href === 'main') return {}
      const index = navigation.findIndex((item) => item.href === href)
      return { getBoundingClientRect() { reads++; return { top: offsets[index] - timing.window.scrollY } } }
    },
  }
  let reads = 0
  let resizeCallback
  let cleanup
  const states = []
  const ResizeObserver = class {
    constructor(callback) { resizeCallback = callback }
    observe() {}
    disconnect() { resizeCallback = undefined }
  }
  if (withObserver) timing.window.ResizeObserver = ResizeObserver
  const { useActiveSection } = load('hooks/useActiveSection.ts', { window: timing.window, document, ResizeObserver }, {
    react: { useState: () => ['', (value) => states.push(value)], useEffect: (effect) => { cleanup = effect() } },
    '../data/profile': { navigation },
  })
  useActiveSection()
  const scroll = (position) => {
    timing.window.scrollY = position
    timing.window.dispatchEvent(new Event('scroll'))
    timing.step()
  }
  return { ...timing, offsets, navigation, states, document, scroll, reads: () => reads, resize: () => resizeCallback(), cleanup: () => cleanup() }
}

test('navigation preserves the 35% reading position and bottom-of-page behavior', () => {
  const fixture = navigationFixture()
  fixture.scroll(450)
  assert.equal(fixture.states.at(-1), '#section-0')
  fixture.scroll(1450)
  assert.equal(fixture.states.at(-1), '#section-1')
  fixture.scroll(7998)
  assert.equal(fixture.states.at(-1), '#section-4')
  assert.equal(fixture.reads(), 5, 'Scrolling must reuse measured section positions')
  const updates = fixture.states.length
  fixture.scroll(7999)
  assert.equal(fixture.states.length, updates)
  fixture.cleanup()
})

test('layout changes from disclosure or resize invalidate navigation positions', () => {
  const fixture = navigationFixture()
  fixture.scroll(1450)
  fixture.offsets[1] = 2300
  fixture.document.documentElement.scrollHeight = 9500
  fixture.resize()
  fixture.step()
  assert.equal(fixture.states.at(-1), '#section-0')
  assert.equal(fixture.reads(), 10)
  fixture.window.innerHeight = 800
  fixture.window.dispatchEvent(new Event('resize'))
  fixture.step()
  assert.equal(fixture.reads(), 15)
  fixture.cleanup()
  fixture.window.dispatchEvent(new Event('scroll'))
  assert.equal(fixture.frames.size, 0)
})

test('browsers without ResizeObserver retain correct per-scroll layout measurements', () => {
  const fixture = navigationFixture(false)
  fixture.scroll(1450)
  assert.equal(fixture.states.at(-1), '#section-1')
  fixture.offsets[1] = 2300
  fixture.scroll(1451)
  assert.equal(fixture.states.at(-1), '#section-0')
  assert.equal(fixture.reads(), 15)
  fixture.cleanup()
})
