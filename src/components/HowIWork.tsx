import { SectionTitle } from './SectionTitle'
import { Reveal } from './Reveal'
import styles from './HowIWork.module.css'

const evidence = [
  {
    title: 'QA 티켓 처리 자동화',
    copy: 'QA 티켓에 기록된 문제의 재현부터 원인 분석, 코드 수정과 테스트, PR과 배포 상태 동기화까지 Agent Skill 하나로 묶었습니다.',
  },
  {
    title: 'SSE 트래픽 확인 도구',
    copy: 'debug 빌드에서 SSE 트래픽을 확인할 수 있도록 네트워크 인스펙터를 구현했습니다.',
  },
  {
    title: '중요도에 따른 검증',
    copy: 'AI가 구현한 화면과 기능은 스크린샷 테스트와 직접 코드 리뷰로 확인합니다. 결제와 미디어 같은 핵심 모듈은 테스트 코드로도 검증합니다.',
  },
  {
    title: '최신 기준을 먼저 확인',
    copy: '새 AI 프로젝트에서는 기획과 디자인의 기준 문서를 GitHub에서 관리하고, AI가 개발 전에 최신 내용을 확인하도록 했습니다.',
  },
] as const

export function HowIWork() {
  return (
    <section className={styles.section} id="how-i-work" aria-labelledby="how-i-work-title">
      <Reveal stagger>
        <SectionTitle id="how-i-work-title" title="AI 활용과 검증" />
        <div className={styles.introRow} data-reveal-item>
          <p>
            아키텍처와 개발 규칙은 Markdown으로 관리하고 반복 작업은 Agent Skill로 만들어 재사용합니다.
          </p>
        </div>

        <ul className={styles.evidence} aria-label="AI 활용과 검증 사례">
          {evidence.map((item) => (
            <li key={item.title} data-reveal-item>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
