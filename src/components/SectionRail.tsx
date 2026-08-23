import { navigation } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import styles from './SectionRail.module.css'

export function SectionRail() {
  const active = useActiveSection()

  return (
    <nav
      className={`${styles.rail} ${active === '' ? styles.hidden : ''}`}
      aria-label="현재 섹션"
      aria-hidden={active === ''}
    >
      {navigation.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={item.href === active ? styles.active : undefined}
          tabIndex={active === '' ? -1 : undefined}
        >
          <span className={styles.tick} aria-hidden="true" />
          <span className={styles.label}>{item.label}</span>
        </a>
      ))}
    </nav>
  )
}
