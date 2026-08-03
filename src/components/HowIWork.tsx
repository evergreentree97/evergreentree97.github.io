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
          <p>AI가 만든 산출물이 제 의도와 맞는지 구조적으로 검증합니다.</p>
          <span>
            <PixelIcon name="code" /> 절차를 스킬로 만들어 저장소에 둡니다
          </span>
        </div>
        <p className={styles.introDetail}>
          필요한 정보를 한 번에 다 주지 않습니다. 절차를 나누고,
          단계마다 그때 필요한 컨텍스트와 명령만 쓰게 합니다.
          대표 사례가 QA 티켓 처리 스킬입니다.
        </p>

        <div className={styles.quest} role="group" aria-label="QA 티켓 처리 절차">
          <div className={styles.questHeading}>
            <span className={styles.questLabel}>QUEST LOG</span>
            <h3>QA 티켓 처리</h3>
            <p>티켓 URL 하나를 주면 이 순서로 움직입니다.</p>
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

        <div className={styles.cases} role="group" aria-label="산출물 검증 방식">
          <span className={styles.casesLabel}>VERIFY / 코드 밖에서 확인합니다</span>
          <ul>
            <li>
              <strong>기기에서 직접 조작</strong>
              <p>코드 리뷰로 끝내지 않습니다. adb 명령으로 실제 기기에서 시나리오를 재현해 동작을 확인합니다.</p>
            </li>
            <li>
              <strong>화면을 증거로 남김</strong>
              <p>스크린샷과 영상 녹화를 스킬로 자동화해, 확인한 동작을 PR과 QA 티켓에 그대로 첨부합니다.</p>
            </li>
            <li>
              <strong>기존 앱과 나란히 비교</strong>
              <p>수정본을 별도 이름의 테스트 빌드로 설치해, 기존 버전과 같은 기기에서 나란히 비교합니다.</p>
            </li>
          </ul>
        </div>

        <p className={styles.outro}>
          서버 API 반영, PR 생성과 커밋 분리도 같은 방식으로 절차를 만들어 씁니다.
          얼마나 빨라졌는지는 측정한 것만 말합니다.
        </p>
      </Reveal>
    </section>
  )
}
