import { SectionTitle } from './SectionTitle'
import styles from './HowIWork.module.css'

const workflow = [
  {
    title: '서버 명세와 QA 티켓 확인',
    copy: '문제의 배경과 기존 구현에서 유지할 동작을 먼저 정리합니다.',
  },
  {
    title: '반복 작업을 AI에 맡김',
    copy: 'API 모델 연결과 재현 절차처럼 범위가 분명한 작업을 맡깁니다.',
  },
  {
    title: '코드와 핵심 모듈 직접 확인',
    copy: 'Compose 상태 구조와 API 계약을 확인하고 결제, 미디어 모듈은 코드에서 직접 검토합니다.',
  },
  {
    title: '빌드와 화면 결과 비교',
    copy: '테스트와 스크린샷, 모듈 빌드로 변경 전후 동작을 확인합니다.',
  },
] as const

const examples = [
  ['서버 API를 Android 코드로 연결', 'API 계약과 오류 처리 검토'],
  ['QA 티켓 재현부터 원인 진단과 수정까지 처리', '기존 앱과 테스트 앱의 동작 비교'],
  ['번역시트 동기화와 결제 테스트 빌드, Firebase 배포 자동화', '실행 중 확인한 실패 조건을 다음 검사에 반영'],
] as const

export function HowIWork() {
  return (
    <section className={styles.section} id="how-i-work" aria-labelledby="how-i-work-title">
      <SectionTitle id="how-i-work-title" title="AI 활용과 검증" />
      <div className={styles.introRow}>
        <p>
          Claude Code와 Codex에 반복 작업을 맡기고 앱 구조와 코드 규칙은 Markdown 문서로 관리합니다. 반복 절차는 Agent Skill로 만들어 재사용합니다.
        </p>
      </div>

      <ol className={styles.workflow}>
        {workflow.map((step, index) => (
          <li key={step.title}>
            <div className={styles.stepMeta}>
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </li>
        ))}
      </ol>

      <div className={styles.examples} aria-label="AI 활용 작업 예시">
        {examples.map(([title, verification]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{verification}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
