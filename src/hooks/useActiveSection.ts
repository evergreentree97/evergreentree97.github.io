import { useEffect, useState } from 'react'
import { navigation } from '../data/profile'

export function useActiveSection() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const targets = navigation.flatMap((item) => {
      const element = document.querySelector(item.href)
      return element ? [{ href: item.href, element }] : []
    })
    let frame = 0
    let layoutDirty = true
    let positions: { href: string; top: number }[] = []
    let pageHeight = 0
    let viewportHeight = 0
    let previous = ''

    const updateActiveSection = () => {
      frame = 0
      const scrollY = window.scrollY
      if (layoutDirty) {
        positions = targets.map(({ href, element }) => ({ href, top: element.getBoundingClientRect().top + scrollY }))
        pageHeight = document.documentElement.scrollHeight
        viewportHeight = window.innerHeight
        layoutDirty = false
      }
      let current = ''
      if (scrollY + viewportHeight >= pageHeight - 2) current = navigation[navigation.length - 1].href
      else {
        const readingPosition = scrollY + viewportHeight * 0.35
        for (const target of positions) {
          if (target.top <= readingPosition) current = target.href
        }
      }
      if (current !== previous) {
        previous = current
        setActive(current)
      }
    }
    const scheduleUpdate = () => {
      if (!('ResizeObserver' in window)) layoutDirty = true
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection)
    }
    const invalidateLayout = () => {
      layoutDirty = true
      scheduleUpdate()
    }
    const layoutObserver = 'ResizeObserver' in window ? new ResizeObserver(invalidateLayout) : null
    const main = document.querySelector('main')
    if (main) layoutObserver?.observe(main)
    for (const { element } of targets) layoutObserver?.observe(element)
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', invalidateLayout)
    updateActiveSection()
    return () => {
      layoutObserver?.disconnect()
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', invalidateLayout)
    }
  }, [])

  return active
}
