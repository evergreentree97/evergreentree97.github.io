import { useEffect, useRef } from 'react'

export function useEntrance({ animate = false, stagger = false }: { animate?: boolean; stagger?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const root = ref.current
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!animate || !root || !('IntersectionObserver' in window) || motion.matches) return
    const candidates = stagger ? Array.from(root.querySelectorAll<HTMLElement>('[data-reveal-item]')) : [root]
    const items = candidates.flatMap(item => getComputedStyle(item).display === 'contents'
      ? Array.from(item.children).filter((child): child is HTMLElement => child instanceof HTMLElement)
      : [item])
    const animations = new Set<Animation>()
    const cancel = () => { if (motion.matches) animations.forEach(animation => animation.cancel()) }
    motion.addEventListener('change', cancel)
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        if (!motion.matches) {
          const index = items.indexOf(entry.target as HTMLElement)
          const animation = entry.target.animate(
            [{ opacity: .85, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }],
            { duration: 300, delay: stagger ? Math.min(index, 2) * 50 : 0, easing: 'cubic-bezier(.16,1,.3,1)' },
          )
          animations.add(animation)
          void animation.finished.catch(() => {}).finally(() => animations.delete(animation))
        }
        observer.unobserve(entry.target)
      }
    }, { threshold: .08 })
    items.forEach(item => observer.observe(item))
    return () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); motion.removeEventListener('change', cancel) }
  }, [animate, stagger])
  return ref
}
