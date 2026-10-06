import { type ReactNode } from 'react'
import { useEntrance } from '../hooks/useEntrance'
import styles from './Reveal.module.css'

export function Reveal({ children, className = '', stagger = false, animate = false }: { children: ReactNode; className?: string; stagger?: boolean; animate?: boolean }) {
  const ref = useEntrance({ animate, stagger })
  return <div ref={ref} className={`${styles.reveal} ${className}`}>{children}</div>
}
