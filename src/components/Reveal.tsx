import { type ReactNode } from 'react'
import styles from './Reveal.module.css'
export function Reveal({ children, className = '', stagger = false }: { children: ReactNode; className?: string; stagger?: boolean }) {
 return <div className={`${styles.reveal} ${stagger ? styles.stagger : ''} ${className}`}>{children}</div>
}
