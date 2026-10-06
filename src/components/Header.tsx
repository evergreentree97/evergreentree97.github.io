import { useRef, useState } from 'react'
import { navigation, profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { PixelIcon } from './PixelIcon'
import styles from './Header.module.css'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const activeSection = useActiveSection()
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  return (
    <header data-site-header className={styles.header} onKeyDown={(event) => {
      if (event.key === 'Escape') { setIsOpen(false); menuButtonRef.current?.focus() }
    }}>
      <div className={styles.inner}>
        <a className={styles.logo} href="#top" aria-label="홈으로 이동">
          <span>ricky choi<span className={styles.logoMark}>.</span></span>
        </a>

        <button
          data-menu-toggle
          ref={menuButtonRef}
          className={styles.menuButton}
          type="button"
          aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <PixelIcon name={isOpen ? 'close' : 'menu'} />
        </button>

        <nav
          data-nav-panel
          id="site-navigation"
          className={`${styles.navigation} ${isOpen ? styles.open : ''}`}
          aria-label="주요 메뉴"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.href === activeSection ? styles.activeLink : undefined}
              aria-current={item.href === activeSection ? 'location' : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className={styles.github}
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub 새 창으로 열기"
          >
            <span>GitHub</span>
            <PixelIcon name="github" />
          </a>
        </nav>
      </div>
    </header>
  )
}
