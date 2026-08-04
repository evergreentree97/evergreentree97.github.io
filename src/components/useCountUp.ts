import { useEffect, useRef } from 'react'

export function useCountUp(target: number, durationMs = 900) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = ref.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!element || reduceMotion || !('IntersectionObserver' in window)) {
      if (element) element.textContent = target.toFixed(2)
      return undefined
    }

    let frame = 0
    const updateValue = (value: number) => {
      element.textContent = value.toFixed(2)
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / durationMs, 1)
          const easedProgress = 1 - Math.pow(1 - progress, 3)
          updateValue(Math.round(target * easedProgress * 100) / 100)
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target, durationMs])

  return ref
}
