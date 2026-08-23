import { useEffect, useState } from 'react'
import { navigation } from '../data/profile'
import styles from './SectionRail.module.css'

export function SectionRail() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const targets = navigation
      .map((item) => document.querySelector(item.href))
      .filter((element): element is Element => element !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={styles.rail} aria-label="현재 섹션">
      {navigation.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={item.href === active ? styles.active : undefined}
        >
          <span className={styles.tick} aria-hidden="true" />
          <span className={styles.label}>{item.label}</span>
        </a>
      ))}
    </nav>
  )
}
