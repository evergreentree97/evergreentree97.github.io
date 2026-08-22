import { SectionTitle } from './SectionTitle'
import styles from './HowIWork.module.css'

const workflow = [
  {
    label: 'INPUT',
    title: '서버 명세 또는 QA 티켓',
    copy: '문제의 맥락, 기존 구현과 바꾸면 안 되는 동작을 함께 제공합니다.',
  },
  {
    label: 'DELEGATE',
    title: '반복 작업을 AI에 맡김',
    copy: 'API 모델 연결, 상태 분류와 재현 절차처럼 범위가 분명한 작업을 맡깁니다.',
  },
  {
    label: 'REVIEW',
    title: '구조와 변경 범위를 직접 확인',
    copy: 'Compose 안정성, 상태 구조, API 계약과 결제 및 미디어처럼 중요한 경계를 코드에서 확인합니다.',
  },
  {
    label: 'VERIFY',
    title: '빌드하거나 실제 기기에서 비교',
    copy: '테스트와 스크린샷, 모듈 빌드를 거치고 필요한 경우 같은 기기에서 변경 전후를 확인합니다.',
  },
] as const

const examples = [
  ['API INTEGRATION', '서버 API를 Android 코드로 연결', 'API 계약과 오류 처리 검토'],
  ['STATE REVIEW', '화면 상태 구조를 정리', '테스트와 Compose 빌드'],
  ['QA DELIVERY', 'QA 티켓을 수정하고 기기에서 비교', '기존 앱과 테스트 앱 동시 확인'],
] as const

export function HowIWork() {
  return (
    <section className={styles.section} id="how-i-work" aria-labelledby="how-i-work-title">
      <SectionTitle id="how-i-work-title" title="AI 활용과 검증" />
      <div className={styles.introRow}>
        <p>
          AI가 코드를 작성할 수는 있지만, 변경 범위와 실제 동작은 개발자가 확인합니다.
        </p>
        <p>
          작업 결과의 중요도에 따라 검증 단계를 나누고, 결제와 미디어 같은 핵심 모듈은 테스트 코드까지 확인합니다.
        </p>
      </div>

      <ol className={styles.workflow}>
        {workflow.map((step, index) => (
          <li key={step.label}>
            <div className={styles.stepMeta}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step.label}</strong>
            </div>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </li>
        ))}
      </ol>

      <div className={styles.examples} aria-label="AI 활용 작업 예시">
        {examples.map(([label, title, verification]) => (
          <article key={label}>
            <span>{label}</span>
            <h3>{title}</h3>
            <p>{verification}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
