import { SectionTitle } from './SectionTitle'
import styles from './HowIWork.module.css'

const evidence = [
  {
    title: 'QA 티켓 처리 자동화',
    copy: 'QA 티켓의 재현, 원인 분석, 코드 수정, 테스트, PR과 배포 상태 동기화를 Agent Skill 하나로 묶었습니다.',
  },
  {
    title: 'SSE 트래픽 확인 도구',
    copy: 'debug 빌드에서 SSE 트래픽을 확인할 수 있도록 네트워크 인스펙터를 구현했습니다.',
  },
  {
    title: '중요도에 따른 검증',
    copy: '화면과 기능은 Compose Stable, 스크린샷 테스트, 코드 리뷰로 확인하고 결제와 미디어 모듈은 테스트 코드까지 작성합니다.',
  },
  {
    title: '최신 기준을 먼저 확인',
    copy: '새 AI 프로젝트에서는 GitHub를 기획과 디자인의 SSOT로 삼고 개발 전에 최신 문서를 확인하도록 했습니다.',
  },
] as const

export function HowIWork() {
  return (
    <section className={styles.section} id="how-i-work" aria-labelledby="how-i-work-title">
      <SectionTitle id="how-i-work-title" title="AI 활용과 검증" />
      <div className={styles.introRow}>
        <p>
          아키텍처와 개발 규칙은 Markdown으로 관리하고 반복 작업은 Agent Skill로 만들어 재사용합니다.
        </p>
      </div>

      <ul className={styles.evidence} aria-label="AI 활용과 검증 사례">
        {evidence.map((item) => (
          <li key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
