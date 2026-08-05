import { PixelIcon } from './PixelIcon'
import { Reveal } from './Reveal'
import { useCountUp } from './useCountUp'
import styles from './ProofStrip.module.css'

export function ProofStrip() {
  const countRef = useCountUp(82.28)

  return (
    <Reveal stagger>
      <aside className={styles.strip} aria-label="주요 경험 요약">
        <div>
          <PixelIcon name="android" />
          <p>
            <strong>설계부터 운영까지</strong>
            <span>앱 구조, 외부 SDK 연동, 스토어 심사와 출시 후 장애 대응</span>
          </p>
        </div>
        <div>
          <PixelIcon name="save" />
          <p>
            <strong>대화 품질 76.96 → <span ref={countRef}>0.00</span></strong>
            <span>학습 데이터를 다듬어 다시 학습한 모델을 기존 모델과 같은 질문으로 비교</span>
          </p>
        </div>
      </aside>
    </Reveal>
  )
}
