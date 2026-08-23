import { useEffect, useRef, useState } from 'react'
import { navigation, profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { PixelIcon } from './PixelIcon'
import styles from './Header.module.css'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const activeSection = useActiveSection()
  const headerRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return undefined

    let animationFrame = 0
    const updateHeader = () => {
      animationFrame = 0
      header.dataset.scrolled = String(window.scrollY > 72)
    }
    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateHeader)
    }

    updateHeader()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', requestUpdate)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return undefined

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', closeWithEscape)
    return () => window.removeEventListener('keydown', closeWithEscape)
  }, [isOpen])

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.logo} href="#top" aria-label="Ricky.dev 홈으로 이동">
          <PixelIcon name="device" className={styles.logoIcon} />
          <span>Ricky.dev</span>
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
          <PixelIcon name={isOpen ? 'close' : 'menu'} />
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
              aria-current={item.href === activeSection ? 'true' : undefined}
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
