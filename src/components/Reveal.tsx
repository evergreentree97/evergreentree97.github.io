import { type ReactNode, useEffect, useRef } from 'react'
import styles from './Reveal.module.css'

export function Reveal({ children, className = '', stagger = false, animate = false }: { children: ReactNode; className?: string; stagger?: boolean; animate?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const root = ref.current
    if (!animate || !root || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const items = stagger ? root.querySelectorAll<HTMLElement>('[data-reveal-item]') : [root]
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const index = Array.from(items).indexOf(entry.target as HTMLElement)
        const animation = entry.target.animate([{ opacity: .85, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 300, delay: stagger ? Math.min(index, 2) * 50 : 0, easing: 'cubic-bezier(.16,1,.3,1)' })
        const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
        const cancel = () => { if (motion.matches) animation.cancel() }
        motion.addEventListener('change', cancel, { once: true })
        void animation.finished.catch(() => {}).finally(() => motion.removeEventListener('change', cancel))
        observer.unobserve(entry.target)
      }
    }, { threshold: .08 })
    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [animate, stagger])
  return <div ref={ref} className={`${styles.reveal} ${className}`}>{children}</div>
}
