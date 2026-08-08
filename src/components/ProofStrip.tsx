import { PixelIcon, type PixelIconName } from './PixelIcon'
import styles from './ProofStrip.module.css'

const proofs: { icon: PixelIconName; value: string; label: string }[] = [
  { icon: 'android', value: '설계부터 운영까지', label: '앱 구조, 외부 SDK 연동, 스토어 심사와 출시 후 장애 대응' },
  { icon: 'save', value: '대화 품질 76.96 → 82.28', label: '학습 데이터를 다듬어 다시 학습한 모델을 기존 모델과 같은 질문으로 비교' },
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
