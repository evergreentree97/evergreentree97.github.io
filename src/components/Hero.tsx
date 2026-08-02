import { profile } from '../data/profile'
import { PixelIcon } from './PixelIcon'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.content}>
        <span className={styles.label}>
          <span aria-hidden="true">&gt;</span> CHOI SANGROK / ANDROID DEVELOPER
        </span>
        <h1 id="hero-title">
          AI에 일을 맡기고,
          <br />
          <strong>제품을</strong><br className={styles.mobileBreak} /> 만듭니다<span className={styles.cursor}>_</span>
        </h1>
        <p className={styles.description}>
          Kotlin과 Jetpack Compose로 Android 앱을 만들고 운영합니다.
          서버 API 연동이나 반복 구현에는 AI를 씁니다. 나온 코드는 직접 리뷰하고 테스트합니다.
        </p>

        <div className={styles.actions}>
          <a className={`${styles.button} ${styles.primary}`} href="#projects">
            주요 프로젝트 <PixelIcon name="arrow" />
          </a>
          <a
            className={styles.button}
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <PixelIcon name="external" />
          </a>
          <a className={styles.button} href={profile.careerUrl}>
            경력 보기 <PixelIcon name="resume" />
          </a>
        </div>
      </div>

      <div className={styles.sceneColumn}>
        <div className={styles.sceneFrame}>
          <div className={styles.messageBox}>앱을 만들고 운영합니다.</div>
          <picture>
            <source
              srcSet="/images/hero-journey-480.avif 480w, /images/hero-journey-800.avif 800w, /images/hero-journey.avif 1200w"
              sizes="(max-width: 820px) calc(100vw - 54px), (max-width: 1180px) 45vw, 540px"
              type="image/avif"
            />
            <img
              src="/images/hero-journey.jpg"
              srcSet="/images/hero-journey-480.jpg 480w, /images/hero-journey-800.jpg 800w, /images/hero-journey.jpg 1200w"
              sizes="(max-width: 820px) calc(100vw - 54px), (max-width: 1180px) 45vw, 540px"
              alt="언덕길에서 멀리 도시를 바라보는 개발자의 오리지널 도트 일러스트"
              width="1200"
              height="800"
              fetchPriority="high"
              loading="eager"
            />
          </picture>
          <div className={styles.statusBox} aria-label="주요 경험과 기술">
            <span>Android 제품 3개</span>
            <strong>Kotlin / Compose</strong>
            <span className={styles.building}>LLM 평가</span>
          </div>
        </div>
      </div>
    </section>
  )
}
