import { PixelIcon } from './PixelIcon'
import styles from './PixelDivider.module.css'

export function PixelDivider() {
  return (
    <div className={styles.divider} aria-hidden="true">
      <span />
      <PixelIcon name="save" />
      <span />
    </div>
  )
}
