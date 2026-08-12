import type { ReactNode } from 'react'
import styles from './SectionTitle.module.css'

type SectionTitleProps = {
  id: string
  title: string
  action?: ReactNode
}

export function SectionTitle({ id, title, action }: SectionTitleProps) {
  return (
    <div className={styles.headingRow}>
      <div>
        <h2 id={id}>{title}</h2>
      </div>
      {action ? <div className={styles.action}>{action}</div> : null}
    </div>
  )
}
