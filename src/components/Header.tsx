import { useLayoutEffect, useRef, useState } from 'react'
import { navigation } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { Icon } from './Icon'
import styles from './Header.module.css'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const activeSection = useActiveSection()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (!isOpen) return undefined

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setIsOpen(false)
    }
    window.addEventListener('pointerdown', closeOutside)
    window.addEventListener('keydown', closeWithEscape)
    return () => {
      window.removeEventListener('keydown', closeWithEscape)
      window.removeEventListener('pointerdown', closeOutside)
    }
  }, [isOpen])

  return (
    <header ref={headerRef} className={styles.header} onBlur={(event) => {
      if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) setIsOpen(false)
    }}>
      <div className={styles.inner}>
        <a className={styles.logo} href="#top" aria-label="홈으로 이동">
          <span>최상록</span>
        </a>

        <button
          ref={menuButtonRef}
          className={styles.menuButton}
          type="button"
          aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <Icon name={isOpen ? 'close' : 'menu'} />
        </button>

        <nav
          id="site-navigation"
          className={`${styles.navigation} ${isOpen ? styles.open : ''}`}
          aria-label="주요 메뉴"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.href === activeSection ? styles.activeLink : undefined}
              aria-current={item.href === activeSection ? 'page' : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
