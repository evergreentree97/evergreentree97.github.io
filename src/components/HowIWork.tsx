import { SectionTitle } from './SectionTitle'
import { Icon } from './Icon'
import styles from './HowIWork.module.css'

const qaStages: { title: string; copy: string; bullets?: string[] }[] = [
  { title: '티켓과 재현 조건 확인', copy: 'Notion MCP로 기대 동작과 실제 동작을 파악하고, 요구사항과 관련 코드를 확인합니다.' },
  { title: 'worktree로 작업 환경 분리', copy: '기존 변경을 보존하고 티켓마다 별도의 worktree에서 작업합니다.' },
  { title: '원인 분석과 코드 수정', copy: '영향받는 상태와 API, 관련 기능을 확인해 수정 범위를 정합니다.' },
  {
    title: '테스트와 기기 검증',
    copy: '변경 내용에 따라 Compose 안정성 검사, 모듈 테스트와 실제 기기 테스트를 진행합니다.',
    bullets: [
      '결제 화면에는 스크린샷 테스트를 적용하고, 결제와 미디어의 핵심 로직은 테스트 코드로 검증했습니다.',
      '기기 테스트 결과는 스크린샷과 영상으로 기록합니다.',
    ],
  },
  {
    title: 'PR 리뷰와 배포 후 확인',
    copy: '코드 변경 사항과 검증 결과를 리뷰합니다.',
    bullets: [
      '배포 성공 기록과 PR 머지 여부를 확인하고, 배포 커밋에 수정 코드가 포함됐는지 검사하도록 PostToolUse Hook을 구성했습니다.',
      '개인 작업 목록의 티켓만 대상으로 담당자와 현재 상태를 다시 확인합니다.',
      '배포가 실패하거나 수정 코드의 배포 여부를 확인할 수 없으면 티켓 상태를 변경하지 않습니다.',
    ],
  },
]

export function HowIWork() {
  return (
    <section className={styles.section} id="how-i-work" aria-labelledby="how-i-work-title">
      <SectionTitle id="how-i-work-title" title="AI 활용과 개발 자동화" />

      <article className={styles.qaCase} aria-labelledby="qa-harness-title">
        <h3 id="qa-harness-title">QA 티켓 처리 하네스</h3>
        <div className={styles.caseIntroduction}>
          <p>Android QA에 사용하는 <strong>Agent Skill을 만들었습니다.</strong></p>
          <ul className={styles.bullets}>
            <li>Notion MCP로 QA 티켓을 확인하고, 이슈별 worktree에서 작업을 병렬로 진행했습니다.</li>
            <li>Skill에 작업 절차를 정리하고, 단계별로 필요한 문서와 명령을 불러오도록 했습니다.</li>
            <li>코드 변경 사항과 검증 결과는 직접 리뷰했습니다.</li>
          </ul>
        </div>
        <figure className={styles.evidenceFigure}>
          <a href="/images/tooling/qa-worktree-demo.jpg" target="_blank" rel="noreferrer" aria-label="QA 작업 관리 화면 원본 열기">
            <img src="/images/tooling/qa-worktree-demo.jpg" alt="QA 작업 관리 도구의 티켓별 branch, worktree와 리뷰 상태" width="1280" height="720" loading="lazy" decoding="async" />
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
            <p>기획과 디자인 문서를 GitHub에서 관리하도록 제안하고, 팀에 적용했습니다.</p>
            <ul className={styles.bullets}>
              <li><strong>Figma MCP와 팀 Design SSOT의 토큰, 공용 컴포넌트</strong>를 참조해 Android 화면을 구현했습니다.</li>
              <li>Vuddy에서는 디자인 토큰 JSON으로 <strong>Kotlin 코드를 생성하고 PR을 만드는 작업</strong>을 자동화했습니다.</li>
              <li>브랜드 색상 개편 때 시맨틱 토큰 매핑을 수정해 해당 토큰을 쓰는 화면에 새 색상을 적용했습니다.</li>
            </ul>
          </div>
        </article>

        <article className={styles.practice} aria-labelledby="ai-review-title">
          <h3 id="ai-review-title">Multi-agent 리뷰</h3>
          <div className={styles.practiceBody}>
            <dl className={styles.reviewRoles}>
              <div><dt>요구사항 정리</dt><dd>화면 구성과 상태별 동작, 비즈니스 규칙을 문서로 정리하고 코드 리뷰와 UI 리뷰 에이전트가 함께 참조하도록 구성했습니다.</dd></div>
              <div><dt>코드 리뷰</dt><dd>요구사항 문서와 코드를 비교하며 아키텍처와 비즈니스 로직을 리뷰합니다.</dd></div>
              <div><dt>UI 리뷰</dt><dd>지정한 Figma 노드의 디자인과 구현 화면을 비교합니다.</dd></div>
            </dl>
          </div>
        </article>
      </div>

      <article className={styles.inspector} aria-labelledby="inspector-title">
        <div className={styles.inspectorIntroduction}>
          <div>
            <h3 id="inspector-title">Ricky Inspector</h3>
          </div>
          <div>
            <p>Android Studio에서 SSE 트래픽을 확인하기 불편해 만든 디버깅 도구입니다. <strong>SSE 이벤트와 응답 메시지</strong>, 앱 로그를 PC 브라우저에서 확인하며 채팅을 디버깅했습니다.</p>
            <p>Vuddy와 AI 캐릭터 앱을 개발할 때 사용했습니다. 앱 소스 변경 없이 로컬 debug 빌드에만 적용했습니다.</p>
          </div>
        </div>
        <figure className={styles.evidenceFigure}>
          <a href="/images/tooling/ricky-inspector-sse-demo.jpg" target="_blank" rel="noreferrer" aria-label="Ricky Inspector의 SSE 이벤트 화면 원본 열기">
            <img src="/images/tooling/ricky-inspector-sse-demo.jpg" alt="Ricky Inspector의 SSE 요청 목록, 수신 이벤트와 응답 메시지" width="1440" height="900" loading="lazy" decoding="async" />
          </a>
        </figure>
      </article>
    </section>
  )
}
