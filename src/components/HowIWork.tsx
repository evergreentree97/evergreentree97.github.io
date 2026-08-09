import { PixelIcon, type PixelIconName } from './PixelIcon'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './HowIWork.module.css'

type WorkStep = {
  key: string
  title: string
  description: string
}

type VerificationCase = {
  title: string
  description: string
  icon: PixelIconName
}

const workSteps: WorkStep[] = [
  {
    key: 'Reference',
    title: '기준 문서',
    description: '저장소 구조, 코드 규칙과 완료 조건 확인',
  },
  {
    key: 'Diagnose',
    title: '영향 분석',
    description: '재현 조건, 관련 기능과 API 스펙 확인',
  },
  {
    key: 'Delegate',
    title: '작업 위임',
    description: 'AI에 코드 탐색, 반복 수정과 초안 작성 요청',
  },
  {
    key: 'Review',
    title: '설계 검토',
    description: '개발자가 변경 범위, 설계와 예외 처리 검토',
  },
  {
    key: 'Verify',
    title: '동작 검증',
    description: '관련 테스트, 기존 기능과 실행 결과 확인',
  },
]

const verificationCases: VerificationCase[] = [
  {
    title: '별도 테스트 빌드',
    description: '기존 앱과 함께 설치되는 별도 이름의 테스트 빌드로 같은 기기에서 변경 전후 동작을 비교',
    icon: 'device',
  },
  {
    title: '실기기와 화면 기록',
    description: '관련 시나리오를 실제 기기에서 실행하고 스크린샷과 실행 결과를 이전 동작과 대조한 뒤 반영',
    icon: 'save',
  },
]

export function HowIWork() {
  return (
    <section className={styles.section} id="how-i-work" aria-labelledby="how-i-work-title">
      <Reveal stagger>
        <SectionTitle id="how-i-work-title" index="04" eyebrow="PROCESS" title="AI 활용과 검증" />
        <p className={styles.intro}>
          저장소 구조, 코드 규칙과 완료 조건을 기준 문서로 관리합니다.
          Claude Code와 Codex는 이 문서를 확인한 뒤 탐색과 반복 수정을 맡고,
          변경 범위와 설계 판단, 예외 처리는 개발자가 검토합니다.
        </p>

        <article className={styles.quest} aria-labelledby="work-process-title">
          <header className={styles.questHeader}>
            <div className={styles.questIdentity}>
              <PixelIcon name="flag" />
              <div>
                <small>AI ASSISTED DEVELOPMENT</small>
                <h3 id="work-process-title">기준 문서에서 실기기 검증까지</h3>
              </div>
            </div>
            <div className={styles.questInput}>
              <span>INPUT</span>
              <strong>재현 조건과 완료 기준</strong>
            </div>
          </header>

          <ol className={styles.flow} aria-label="AI를 활용한 개발 순서">
            {workSteps.map((step) => (
              <li key={step.key}>
                <small>{step.key}</small>
                <strong>{step.title}</strong>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>

          <div className={styles.questOutput}>
            <span>OUTPUT</span>
            <strong>리뷰와 테스트를 마친 변경</strong>
          </div>
        </article>

        <div className={styles.related}>
          <h3>코드 밖에서 확인하는 방법</h3>
          <div className={styles.relatedList}>
            {verificationCases.map((item) => (
              <article key={item.title}>
                <PixelIcon name={item.icon} />
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
