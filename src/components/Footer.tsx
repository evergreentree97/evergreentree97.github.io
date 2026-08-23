import { PixelIcon } from './PixelIcon'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.meta}>
        <p>© 2026 최상록</p>
        <a href="#top" aria-label="페이지 맨 위로 이동">
          <span>맨 위로</span>
          <PixelIcon name="device" />
        </a>
      </div>
    </footer>
  )
}
