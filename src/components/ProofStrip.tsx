import { PixelIcon, type PixelIconName } from './PixelIcon'
import styles from './ProofStrip.module.css'

const proofs: { icon: PixelIconName; value: string; label: string }[] = [
  { icon: 'android', value: '3 Android products', label: '기능 개발, 출시와 운영' },
  { icon: 'flag', value: '0 to 1 and operations', label: '초기 구조부터 출시 후 대응' },
  { icon: 'save', value: 'LLM evaluation and serving', label: '데이터, 평가 하네스와 vLLM' },
]

export function ProofStrip() {
  return (
    <aside className={styles.strip} aria-label="주요 경험 요약">
      {proofs.map((proof) => (
        <div key={proof.value}>
          <PixelIcon name={proof.icon} />
          <p>
            <strong>{proof.value}</strong>
            <span>{proof.label}</span>
          </p>
        </div>
      ))}
    </aside>
  )
}
