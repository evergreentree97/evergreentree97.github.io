import { profile } from '../data/profile'
import { Icon } from './Icon'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.opening}>
          <p className={styles.profile}>
            <span>최상록</span>
            <span>Android Developer</span>
          </p>
          <h1 id="hero-title" className={styles.headline}>
            <span>단단한 기반 위에 제품의 완성도를 높이고, </span>
            <span>필요한 기술을 유연하게 연결하는 </span>
            <span>안드로이드 개발자입니다.</span>
          </h1>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href="#projects">프로젝트 보기</a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">
              <Icon name="github" /> GitHub
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
              <Icon name="linkedin" /> LinkedIn
            </a>
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.detail}>
            <h2>Android 개발과 운영</h2>
            <p>초기 설계부터 Google Play 배포와 운영을 겪으며, 좋은 구조가 팀의 개발 속도와 제품의 확장성을 지켜준다는 점을 배웠습니다. Jetpack Compose와 Clean Architecture 기반 멀티 모듈 구조를 바탕으로 인증, 실시간 채팅, 미디어 재생을 구현해 왔습니다. 단순히 화면에 기능이 나오는 것에 만족하기보다, API 토큰 동시 갱신 제어나 힙 덤프 기반 메모리 누수 해결처럼 실제 프로덕션 환경에서 마주하는 기술적 난제를 집요하게 분석하고 개선하는 데 집중합니다.</p>
          </div>
          <div className={styles.detail}>
            <h2>AI 모델과 Android 연동</h2>
            <p>동시에 모바일 개발의 울타리에 갇히지 않고, 사내 AI TF에서 대화 모델의 데이터 구성부터 파인튜닝, 평가, 서빙까지 직접 다루었습니다. 이를 활용해 클라이언트에서 SSE 스트리밍 채팅과 결제 기능까지 엮어내며, 새로운 기술을 실제 사용자가 체감하는 프로덕트 기능으로 구현하는 데 즐거움을 느낍니다.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
