import { questSteps, workingMethod } from '../data/workingMethod'
import { PixelIcon } from './PixelIcon'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './HowIWork.module.css'

export function HowIWork() {
  return (
    <section className={styles.section} id="how-i-work" aria-labelledby="how-i-work-title">
      <Reveal stagger>
        <SectionTitle id="how-i-work-title" index="03" eyebrow="PROCESS" title="AI와 일하는 방식" />
        <div className={styles.intro}>
          <p>AI 산출물은 코드와 실제 동작을 기준으로 검증합니다.</p>
          <span>
            <PixelIcon name="code" /> 검증 절차를 저장소 스킬로 관리합니다
          </span>
        </div>
        <p className={styles.introDetail}>
          작업에 필요한 맥락과 명령을 단계별로 분리하여 제공합니다.
        </p>

        <div className={styles.quest} role="group" aria-label="QA 수정 절차">
          <div className={styles.questHeading}>
            <span className={styles.questLabel}>QUEST LOG</span>
          </div>
          <ol className={styles.questSteps}>
            {questSteps.map((quest) => (
              <li key={quest.step}>
                <span className={styles.questCheck} aria-hidden="true" />
                <small>{quest.step}</small>
                <strong>{quest.title}</strong>
                <p>{quest.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <ol className={styles.method}>
          {workingMethod.map((item, index) => (
            <li key={item.label}>
              <div className={styles.marker} aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
              <small>{item.label}</small>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>

        <div className={styles.cases} role="group" aria-label="결과 확인 방법">
          <span className={styles.casesLabel}>VERIFICATION</span>
          <ul>
            <li>
              <strong>실기기 테스트</strong>
              <p>adb를 사용해 실제 기기에서 재현 절차와 동작 결과를 확인합니다.</p>
            </li>
            <li>
              <strong>스크린샷과 영상</strong>
              <p>검증 화면을 스크린샷과 영상으로 기록하여 PR과 티켓에 첨부합니다.</p>
            </li>
            <li>
              <strong>버전 비교</strong>
              <p>수정본과 기존 버전을 동일 기기와 조건에서 비교합니다.</p>
            </li>
          </ul>
        </div>

        <p className={styles.outro}>
          동일한 원칙을 서버 API 반영, PR 생성과 커밋 분리에도 적용합니다.
          생산성은 측정된 결과만 제시합니다.
        </p>
      </Reveal>
    </section>
  )
}
