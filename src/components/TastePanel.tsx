import { tastes } from '../data/profile'
import styles from './TastePanel.module.css'

export function TastePanel() {
  return (
    <aside className={styles.panel} aria-label="개발자 취향">
      <span className={styles.label}>취향</span>
      <ul>
        {tastes.map((taste) => (
          <li key={taste.label}>
            <strong>{taste.label}</strong>
            <span>{taste.value}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
