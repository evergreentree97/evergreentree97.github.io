export function attachHeroMotion(stage: HTMLElement, plane: HTMLElement) {
  const motion = window.matchMedia('(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine) and (min-width: 901px)')
  let frame = 0
  let currentX = 0
  let currentY = 0
  let targetX = 0
  let targetY = 0
  let pendingPoint: { x: number; y: number } | null = null

  const render = () => {
    if (pendingPoint) {
      const bounds = stage.getBoundingClientRect()
      if (bounds.width && bounds.height) {
        targetX = ((pendingPoint.x - bounds.left) / bounds.width - 0.5) * 12
        targetY = -((pendingPoint.y - bounds.top) / bounds.height - 0.5) * 8
      }
      pendingPoint = null
    }
    currentX += (targetX - currentX) * 0.09
    currentY += (targetY - currentY) * 0.09
    plane.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`
    if (Math.abs(targetX - currentX) + Math.abs(targetY - currentY) > 0.015) frame = window.requestAnimationFrame(render)
    else frame = 0
  }

  const schedule = () => {
    if (!frame) frame = window.requestAnimationFrame(render)
  }
  const move = (event: PointerEvent) => {
    if (!motion.matches || event.pointerType !== 'mouse') return
    pendingPoint = { x: event.clientX, y: event.clientY }
    schedule()
  }
  const reset = () => {
    pendingPoint = null
    targetX = targetY = 0
    schedule()
  }
  const stop = () => {
    window.cancelAnimationFrame(frame)
    frame = 0
    pendingPoint = null
    currentX = currentY = targetX = targetY = 0
    plane.style.removeProperty('transform')
  }

  stage.addEventListener('pointermove', move)
  stage.addEventListener('pointerleave', reset)
  motion.addEventListener('change', stop)
  return () => {
    stop()
    stage.removeEventListener('pointermove', move)
    stage.removeEventListener('pointerleave', reset)
    motion.removeEventListener('change', stop)
  }
}
