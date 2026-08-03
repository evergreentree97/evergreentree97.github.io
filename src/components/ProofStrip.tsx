import type { RefObject } from 'react'
import { PixelIcon } from './PixelIcon'
import { useCountUp } from './useCountUp'
import styles from './ProofStrip.module.css'

export function ProofStrip() {
  const { value, ref } = useCountUp(82.28)

  return (
    <aside className={styles.strip} aria-label="주요 경험 요약">
      <div>
        <PixelIcon name="android" />
        <p>
          <strong>설계부터 운영까지</strong>
          <span>앱 구조, 외부 SDK 연동, 스토어 심사와 출시 후 장애 대응</span>
        </p>
      </div>
      <div>
        <PixelIcon name="flag" />
        <p>
          <strong>AI 개발 프로세스</strong>
          <span>SSOT, 완료 조건, 코드 리뷰와 기존 기능 확인</span>
        </p>
      </div>
      <div>
        <PixelIcon name="save" />
        <p>
          <strong ref={ref as RefObject<HTMLElement>}>대화 품질 76.96 → {value.toFixed(2)}</strong>
          <span>동일 입력 40건에서 학습 전후 모델을 같은 조건으로 비교</span>
        </p>
      </div>
    </aside>
  )
}
