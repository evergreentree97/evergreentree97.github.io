import { PixelIcon, type PixelIconName } from './PixelIcon'
import styles from './ProofStrip.module.css'

const proofs: { icon: PixelIconName; value: string; label: string }[] = [
  { icon: 'android', value: '3 Android products', label: '기능 개발부터 출시 후 운영까지' },
  { icon: 'flag', value: '0 to 1 and operations', label: '초기 구조 설계와 출시 후 대응' },
  { icon: 'save', value: 'LLM evaluation and serving', label: '학습 데이터, 자동 평가와 모델 서빙' },
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
