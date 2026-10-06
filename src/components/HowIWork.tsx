import { SectionTitle } from './SectionTitle'
import { Reveal } from './Reveal'
import styles from './HowIWork.module.css'

const evidence = [
  {
    title: 'QA 티켓 처리 자동화',
    copy: 'QA 티켓에 기록된 문제의 재현, 원인 분석, 코드 수정과 테스트를 Agent Skill로 자동화했습니다. PR과 배포 상태도 함께 동기화합니다.',
  },
  {
    title: 'SSE 트래픽 확인 도구',
    copy: 'Android Studio에서 보기 불편했던 SSE 트래픽을 PC 브라우저에서 확인하도록 디버그 앱 전용 네트워크 검사 도구를 만들었습니다.',
  },
  {
    title: '디자인 토큰을 Kotlin 코드로 변환',
    copy: 'Vuddy의 디자인 토큰을 Kotlin 코드로 변환하고 PR을 생성하도록 자동화했습니다. 브랜드 색상 개편 때 시맨틱 토큰을 사용하는 화면은 토큰 값 변경만으로 새 색상을 반영했습니다.',
  },
  {
    title: 'AI 코드와 화면 검증',
    copy: 'AI가 구현한 화면과 기능은 Compose Stable 검사, 스크린샷 테스트와 코드 리뷰로 확인합니다. 결제와 미디어 같은 핵심 모듈은 테스트 코드로도 검증합니다.',
  },
  {
    title: '기획과 디자인 문서 관리',
    copy: '새 AI 프로젝트의 기획과 디자인 문서를 GitHub에서 관리했습니다. AI가 개발을 시작하기 전에 최신 문서를 확인하도록 했습니다.',
  },
] as const

export function HowIWork() {
  return (
    <section className={styles.section} id="how-i-work" aria-labelledby="how-i-work-title">
      <Reveal stagger>
        <SectionTitle id="how-i-work-title" title="개발 도구와 자동화" />
        <div className={styles.introRow} data-reveal-item>
          <p>
            QA 티켓 처리와 디자인 토큰 변환을 자동화했습니다.
          </p>
        </div>

        <ul className={styles.evidence} aria-label="개발 도구와 자동화 사례">
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
