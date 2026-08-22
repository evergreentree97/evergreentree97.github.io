import { PixelIcon } from './PixelIcon'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.statement}>AI에 맡긴 일도, 제품의 결과는 직접 확인합니다.</p>
      <div className={styles.meta}>
        <p>Ricky.dev · © 2026 Ricky Choi</p>
        <a href="#top" aria-label="페이지 맨 위로 이동">
          <span>맨 위로</span>
          <PixelIcon name="device" />
        </a>
      </div>
    </footer>
  )
}
