import { useEffect, useRef, type ReactNode } from 'react'
import styles from './Reveal.module.css'

type RevealProps = {
  children: ReactNode
  className?: string
  stagger?: boolean
}

export function Reveal({ children, className = '', stagger = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      element.dataset.visible = 'true'
      return undefined
    }

    revealObserver.observe(element)
    return () => revealObserver.unobserve(element)
  }, [])

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${stagger ? styles.stagger : ''} ${className}`}
    >
      {children}
    </div>
  )
}

const revealObserver = typeof window === 'undefined' || !('IntersectionObserver' in window)
  ? ({ observe() {}, unobserve() {} } as Pick<IntersectionObserver, 'observe' | 'unobserve'>)
  : new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const element = entry.target as HTMLElement
          element.dataset.visible = 'true'
          observer.unobserve(element)
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.06 },
    )
