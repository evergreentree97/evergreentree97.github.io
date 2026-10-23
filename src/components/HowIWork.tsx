import { SectionTitle } from './SectionTitle'
import { Icon } from './Icon'
import { OptimizedImage } from './OptimizedImage'
import styles from './HowIWork.module.css'

const qaStages: { title: string; copy: string; bullets?: string[] }[] = [
  { title: '티켓과 재현 조건 확인', copy: 'Notion MCP로 기대 동작과 실제 동작, 요구사항과 관련 코드 확인' },
  { title: 'worktree로 작업 환경 분리', copy: '기존 변경을 보존하고 티켓별 worktree에서 작업 환경 분리' },
  { title: '원인 분석과 코드 수정', copy: '영향받는 상태와 API, 관련 기능을 확인해 수정 범위 결정' },
  {
    title: '테스트와 기기 검증',
    copy: '수정한 기능의 영향 범위에 맞춰 코드 검사, 자동 테스트와 기기 검증 구성',
    bullets: [
      'UI는 Lint와 Compose Stability, 결제 및 구독 화면의 스크린샷 테스트로 검사. 결제와 채팅 로직은 단위 테스트로 검증',
      '기기 테스트 결과를 스크린샷과 영상으로 기록',
    ],
  },
  {
    title: 'PR 리뷰와 배포 후 확인',
    copy: 'Agent가 코드 수정만으로 티켓을 임의 종료하는 것을 방지하기 위해, 실제 배포 성공과 수정 코드 반영 여부를 교차 검증한 뒤에만 상태를 전환하도록 검증 가드레일 구축',
    bullets: [
      'PostToolUse Hook에서 배포 기록과 merged PR, 배포 커밋을 대조하고 티켓 담당자와 현재 상태를 재확인하도록 구성',
    ],
  },
]

export function HowIWork() {
  return (
    <section className={styles.section} id="how-i-work" aria-labelledby="how-i-work-title">
      <SectionTitle id="how-i-work-title" title="AI 활용과 개발 자동화" />

      <article className={styles.qaCase} aria-labelledby="qa-harness-title">
        <div className={styles.qaIntroduction}>
          <h3 id="qa-harness-title">Agent 기반 QA 워크플로우</h3>
          <div className={styles.caseIntroduction}>
            <ul className={styles.bullets}>
              <li>버그 재현, 원인 파악과 코드 수정을 Agent가 처리하도록 파이프라인 구축</li>
              <li>티켓별 작업을 병렬로 진행하고, QA 대응을 Agent의 수정안과 검증 결과를 리뷰하는 방식으로 전환</li>
            </ul>
          </div>
        </div>
        <figure className={styles.evidenceFigure}>
          <a href="/images/tooling/qa-worktree-demo.jpg" target="_blank" rel="noreferrer" aria-label="QA 작업 관리 화면 원본 열기">
            <OptimizedImage src="/images/tooling/qa-worktree-demo.jpg" alt="QA 작업 관리 도구의 티켓별 branch, worktree와 리뷰 상태" width="1280" height="720" loading="lazy" decoding="async" />
          </a>
        </figure>
        <details className={styles.workflow}>
          <summary>
            <span>QA 처리 절차</span>
            <Icon name="expand" />
          </summary>
          <ol aria-label="QA 티켓 처리 Skill의 작업 순서">
            {qaStages.map((stage) => (
              <li key={stage.title}>
                <h4>{stage.title}</h4>
                <p>{stage.copy}</p>
                {stage.bullets && <ul className={styles.bullets}>{stage.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </li>
            ))}
          </ol>
        </details>
      </article>

      <div className={styles.practices}>
        <article className={styles.practice} aria-labelledby="ai-design-title">
          <h3 id="ai-design-title">기획 문서와 디자인 토큰</h3>
          <div className={styles.practiceBody}>
            <p>기획과 디자인 변경이 구현에 일관되게 반영되도록 GitHub SSOT와 Figma MCP를 연결하는 개발 흐름을 제안하고 팀에 적용</p>
            <ul className={styles.bullets}>
              <li>Agent가 최신 변경 사항을 Context로 참조하도록 개발 지침 정의. Figma MCP와 팀 Design SSOT의 토큰, 공용 컴포넌트를 참조해 Android 화면 구현</li>
              <li>GitHub Actions를 구축해 디자인 토큰 JSON을 Kotlin 코드로 변환하고 PR을 생성하는 워크플로우 자동화</li>
            </ul>
          </div>
        </article>

        <article className={styles.practice} aria-labelledby="ai-review-title">
          <h3 id="ai-review-title">역할별 AI 리뷰</h3>
          <div className={styles.practiceBody}>
            <ul className={styles.bullets}>
              <li><strong>요구사항 정리:</strong> 화면 구성, 상태별 동작과 비즈니스 규칙 문서화. 코드 리뷰와 UI 리뷰 에이전트가 같은 문서를 참조하도록 구성</li>
              <li><strong>코드 리뷰:</strong> 요구사항 문서와 코드를 비교해 아키텍처와 비즈니스 로직 리뷰</li>
              <li><strong>UI 리뷰:</strong> 지정한 Figma 노드의 디자인과 구현 화면 비교</li>
            </ul>
          </div>
        </article>
      </div>

      <article className={styles.inspector} aria-labelledby="inspector-title">
        <div className={styles.inspectorIntroduction}>
          <div>
            <h3 id="inspector-title">Android 네트워크 디버깅 도구</h3>
          </div>
          <div>
            <p>Android Studio에서 SSE 트래픽을 확인하기 어려워 별도 디버깅 도구 개발</p>
            <ul className={styles.bullets}>
              <li>SSE 이벤트와 응답 메시지, 앱 로그를 PC 브라우저에서 확인하며 채팅 디버깅</li>
              <li>Vuddy와 AI 캐릭터 앱 개발에 사용. 앱 소스 변경 없이 로컬 debug 빌드에만 적용</li>
            </ul>
          </div>
        </div>
        <figure className={styles.evidenceFigure}>
          <a href="/images/tooling/ricky-inspector-sse-demo.jpg" target="_blank" rel="noreferrer" aria-label="Android 네트워크 디버깅 도구의 SSE 이벤트 화면 원본 열기">
            <OptimizedImage src="/images/tooling/ricky-inspector-sse-demo.jpg" alt="Android 네트워크 디버깅 도구의 SSE 요청 목록, 수신 이벤트와 응답 메시지" width="1440" height="900" loading="lazy" decoding="async" />
          </a>
        </figure>
      </article>
    </section>
  )
}
