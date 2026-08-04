import { questSteps, workingMethod } from '../data/workingMethod'
import { PixelIcon } from './PixelIcon'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './HowIWork.module.css'

export function HowIWork() {
  return (
    <section className={styles.section} id="how-i-work" aria-labelledby="how-i-work-title">
      <Reveal stagger>
        <SectionTitle id="how-i-work-title" index="04" eyebrow="PROCESS" title="AI와 일하는 방식" />
        <div className={styles.overview}>
          <div className={styles.overviewCopy}>
            <span className={styles.overviewLabel}>WORKING PRINCIPLE</span>
            <p>요구사항과 완료 조건을 먼저 정의하고, AI를 구현과 검증에 활용합니다. 생성된 코드는 diff 리뷰와 빌드, 실기기 테스트를 통과한 경우에만 반영합니다.</p>
            <span className={styles.introDetail}>
              Repository 구조와 코드 규칙, 변경 범위, 완료 조건을 먼저 제공한 뒤 구현을 요청합니다.
            </span>
          </div>
          <div className={styles.repositorySkill}>
            <PixelIcon name="code" />
            <span>
              <small>REPOSITORY SKILL</small>
              반복 작업은 Repository Skill로 문서화해 같은 검증 절차를 재사용합니다.
            </span>
          </div>
        </div>

        <div className={styles.quest} role="group" aria-label="QA 수정 절차">
          <div className={styles.questHeading}>
            <span className={styles.questLabel}>QUEST LOG</span>
            <span className={styles.questCount}>01 — 05</span>
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

        <div className={styles.detailGrid}>
          <div className={styles.methodPanel} role="group" aria-label="작업 기준">
            <div className={styles.panelHeading}>
              <span>OPERATING PRINCIPLES</span>
              <strong>작업 기준</strong>
            </div>
            <ol className={styles.method}>
              {workingMethod.map((item, index) => (
                <li key={item.label}>
                  <div className={styles.marker} aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
                  <div>
                    <small>{item.label}</small>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.cases} role="group" aria-label="결과 확인 방법">
            <div className={styles.panelHeading}>
              <span>VERIFICATION</span>
              <strong>결과 확인</strong>
            </div>
            <ul>
              <li>
                <small aria-hidden="true">01</small>
                <div>
                  <strong>실기기 테스트</strong>
                  <p>adb를 사용해 실제 기기에서 재현 절차와 동작 결과를 확인합니다.</p>
                </div>
              </li>
              <li>
                <small aria-hidden="true">02</small>
                <div>
                  <strong>스크린샷과 영상</strong>
                  <p>검증 화면을 스크린샷과 영상으로 기록하여 PR과 티켓에 첨부합니다.</p>
                </div>
              </li>
              <li>
                <small aria-hidden="true">03</small>
                <div>
                  <strong>버전 비교</strong>
                  <p>수정본과 기존 버전을 동일 기기와 조건에서 비교합니다.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
