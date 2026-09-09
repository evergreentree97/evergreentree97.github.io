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
    copy: 'Android Studio에서 확인하기 불편했던 SSE 트래픽을 PC 브라우저에서 볼 수 있도록 디버그 앱 전용 네트워크 검사 도구를 구현했습니다.',
  },
  {
    title: '디자인 토큰의 Kotlin 코드 변환',
    copy: 'Vuddy의 디자인 토큰을 Kotlin 코드로 변환하고 PR을 생성하도록 자동화했습니다. 브랜드 색상 개편 시 시맨틱 토큰을 사용하는 화면은 화면 코드 수정 없이 토큰 값 변경으로 새 색상을 반영했습니다.',
  },
  {
    title: 'AI가 만든 코드와 화면 검증',
    copy: 'AI가 구현한 화면과 기능은 Compose Stable 검사, 스크린샷 테스트와 코드 리뷰로 확인합니다. 결제와 미디어 같은 핵심 모듈은 테스트 코드로도 검증합니다.',
  },
  {
    title: 'AI가 참고하는 기획과 디자인 문서',
    copy: '새 AI 프로젝트의 기획과 디자인 문서를 GitHub에서 관리하고 AI가 개발 전에 최신 내용을 확인하도록 했습니다.',
  },
] as const

export function HowIWork() {
  return (
    <section className={styles.section} id="how-i-work" aria-labelledby="how-i-work-title">
      <Reveal stagger>
        <SectionTitle id="how-i-work-title" title="AI와 함께 개발하는 방식" />
        <div className={styles.introRow} data-reveal-item>
          <p>
            AI에 반복 작업을 맡기고 코드와 동작을 직접 확인합니다.
          </p>
        </div>

        <ul className={styles.evidence} aria-label="AI와 함께 개발하는 방식과 사례">
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
