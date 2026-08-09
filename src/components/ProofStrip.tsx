import { PixelIcon } from './PixelIcon'
import { Reveal } from './Reveal'
import styles from './ProofStrip.module.css'

export function ProofStrip() {
  return (
    <Reveal stagger>
      <aside className={styles.strip} aria-label="주요 경험 요약">
        <div>
          <PixelIcon name="android" />
          <p>
            <strong>출시 전에 제한사항 확인</strong>
            <span>대규모 그룹 푸시와 채널별 금칙어 설정이 요구사항을 충족하는지 먼저 검증</span>
          </p>
        </div>
        <div>
          <PixelIcon name="save" />
          <p>
            <strong>AI 변경도 개발자가 검증</strong>
            <span>설계와 예외 처리, 기존 기능 동작을 확인한 뒤 반영</span>
          </p>
        </div>
      </aside>
    </Reveal>
  )
}
