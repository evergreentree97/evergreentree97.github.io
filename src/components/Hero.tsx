import { featuredProjects } from '../data/projects'
import { profile } from '../data/profile'
import { PixelIcon } from './PixelIcon'
import styles from './Hero.module.css'

export function Hero() {
  const screen = featuredProjects[0].media[0]
  return <section className={styles.hero} id="top" aria-labelledby="hero-title">
    <div className={styles.identity}>
      <h1 id="hero-title">{profile.name}{' '}<span>{profile.englishName}</span></h1>
      <p className={styles.role}>Android 개발자</p>
      <div className={styles.introduction}>
        <p>Vuddy의 신규 Android 앱 구조와 공통 기반을 설계하고 핵심 기능 개발, QA 배포와 출시 후 운영을 담당했습니다.</p>
        <p>사내 AI TF에서 캐릭터 대화 모델을 개발한 뒤 해당 모델을 사용하는 Android 채팅 기능을 주도했습니다.</p>
      </div>
      <div className={styles.actions}>
        <a className={styles.primaryAction} href="#projects">프로젝트 보기 <PixelIcon name="arrow" /></a>
        <a href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub 보기 <PixelIcon name="external" /></a>
      </div>
    </div>
    <figure className={styles.preview}>
      <a className={styles.screen} href={screen.src} target="_blank" rel="noreferrer" aria-label="Vuddy 홈 원본 화면 열기">
        <img src={screen.src} alt={screen.alt} width={screen.width} height={screen.height} fetchPriority="high" />
      </a>
      <figcaption><strong>Vuddy</strong><span>{screen.caption}</span><a href={screen.src} target="_blank" rel="noreferrer">원본 화면 열기</a></figcaption>
    </figure>
  </section>
}
