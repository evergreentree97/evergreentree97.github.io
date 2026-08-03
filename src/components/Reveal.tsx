import { useEffect, useRef, useState, type ReactNode } from 'react'
import styles from './Reveal.module.css'

type RevealProps = {
  children: ReactNode
  className?: string
  stagger?: boolean
}

export function Reveal({ children, className = '', stagger = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${stagger ? styles.stagger : ''} ${isVisible ? styles.visible : ''} ${className}`}
      data-visible={isVisible || undefined}
    >
      {children}
    </div>
  )
}
