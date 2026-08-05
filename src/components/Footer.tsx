import { PixelIcon } from './PixelIcon'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Ricky Choi. Built with Preact, TypeScript and a few pixels.</p>
      <a href="#top" aria-label="페이지 맨 위로 이동">
        <PixelIcon name="device" />
      </a>
    </footer>
  )
}
