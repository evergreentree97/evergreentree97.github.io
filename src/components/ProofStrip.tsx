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
          <strong>Android 제품 3개</strong>
          <span>Momentica 기능 개발, Vuddy 초기 구축, 신규 앱의 결제와 광고</span>
        </p>
      </div>
      <div>
        <PixelIcon name="flag" />
        <p>
          <strong>AI 도구 활용</strong>
          <span>서버 API 연동과 QA 준비</span>
        </p>
      </div>
      <div>
        <PixelIcon name="save" />
        <p>
          <strong ref={ref as RefObject<HTMLElement>}>76.96 → {value.toFixed(2)}</strong>
          <span>동일 입력 40건을 자체 LLM 채점 도구로 비교</span>
        </p>
      </div>
    </aside>
  )
}
