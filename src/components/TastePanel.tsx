import { tastes } from '../data/profile'
import { PixelIcon, type PixelIconName } from './PixelIcon'
import { Reveal } from './Reveal'
import styles from './TastePanel.module.css'

export function TastePanel() {
  return (
    <Reveal>
      <aside className={styles.panel} aria-label="개발자 취향">
        <span className={styles.label}>B-SIDE / KEEPING THE RHYTHM</span>
        <ul>
          {tastes.map((taste) => (
            <li key={taste.label}>
              <PixelIcon name={taste.icon as PixelIconName} />
              <strong>{taste.label}</strong>
              <span>{taste.value}</span>
            </li>
          ))}
        </ul>
      </aside>
    </Reveal>
  )
}
