import { featuredProjects } from '../data/projects'
import { profile } from '../data/profile'
import { useEntrance } from '../hooks/useEntrance'
import { PixelIcon } from './PixelIcon'
import styles from './Hero.module.css'

export function Hero() {
  const screen = featuredProjects[0].media[1]
  const ref = useEntrance({ animate: true, stagger: true })
  return <section className={styles.hero} id="top" aria-labelledby="hero-title">
    <div ref={ref} className={styles.heroInner}>
      <div className={styles.copy} data-reveal-item>
        <div className={styles.identity}>
          <h1 id="hero-title">{profile.name}{' '}<span>{profile.englishName}</span></h1>
          <p className={styles.role}>Android 개발자</p>
        </div>
        <p className={styles.lead}>Vuddy의 신규 Android 앱 구조를 설계하고, 채팅과 미디어 기능 개발부터 출시 후 운영까지 맡았습니다.</p>
        <p className={styles.support}>캐릭터 대화 모델의 학습과 서빙, Android 채팅과 결제를 개발했으며, Agent Skill로 QA 처리 절차를 자동화했습니다.</p>
        <div className={styles.actions}>
          <a className={styles.primaryAction} href="#projects">프로젝트 보기 <PixelIcon name="arrow" /></a>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub 보기 <PixelIcon name="external" /></a>
        </div>
      </div>
      <figure className={styles.preview} data-reveal-item>
        <a className={styles.screen} href={screen.src} target="_blank" rel="noreferrer" aria-label="Vuddy 채팅 원본 화면 열기">
          <img src={screen.src} alt={screen.alt} width={screen.width} height={screen.height} fetchPriority="high" />
        </a>
        <figcaption><strong>Vuddy</strong><span>{screen.caption}</span><a href={screen.src} target="_blank" rel="noreferrer">원본 화면 열기</a></figcaption>
      </figure>
    </div>
  </section>
}
