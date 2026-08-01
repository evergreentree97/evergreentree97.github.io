import { PixelIcon, type PixelIconName } from './PixelIcon'
import styles from './ProofStrip.module.css'

const proofs: { icon: PixelIconName; value: string; label: string }[] = [
  { icon: 'android', value: '3 Android products', label: '신규 개발부터 출시 후 운영까지' },
  { icon: 'flag', value: 'new Android app launch', label: '초기 구조 설계부터 출시 후 대응' },
  { icon: 'save', value: '+1.25 answer score', label: '같은 질문 40개로 두 모델 비교' },
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
