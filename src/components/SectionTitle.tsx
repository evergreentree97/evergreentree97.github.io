import type { ReactNode } from 'react'
import styles from './SectionTitle.module.css'

type SectionTitleProps = {
  id: string
  eyebrow: string
  title: string
  action?: ReactNode
}

export function SectionTitle({ id, eyebrow, title, action }: SectionTitleProps) {
  return (
    <div className={styles.headingRow}>
      <div>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h2 id={id}>{title}</h2>
      </div>
      {action ? <div className={styles.action}>{action}</div> : null}
    </div>
  )
}
