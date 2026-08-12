import { PixelIcon } from './PixelIcon'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Ricky Choi</p>
      <a href="#top" aria-label="페이지 맨 위로 이동">
        <PixelIcon name="device" />
      </a>
    </footer>
  )
}
