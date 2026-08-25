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

    if (!element) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      element.dataset.visible = 'true'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        element.dataset.visible = 'true'
        observer.disconnect()
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.04 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${styles.reveal} ${stagger ? styles.stagger : ''} ${className}`}>
      {children}
    </div>
  )
}
