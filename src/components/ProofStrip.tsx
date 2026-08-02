import { PixelIcon, type PixelIconName } from './PixelIcon'
import styles from './ProofStrip.module.css'

const proofs: { icon: PixelIconName; value: string; label: string }[] = [
  { icon: 'android', value: 'Android 제품 3개', label: 'Momentica 기능, Vuddy 초기 구축, 신규 앱 결제와 광고' },
  { icon: 'flag', value: '개발 업무에 AI 활용', label: '서버 API 반영과 QA 준비, 결과는 직접 검증' },
  { icon: 'save', value: '76.96 → 82.28', label: '동일 입력 40건을 자체 LLM 채점 도구로 비교' },
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
