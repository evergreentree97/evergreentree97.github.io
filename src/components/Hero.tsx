import { profile } from '../data/profile'
import { PixelIcon } from './PixelIcon'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.content}>
        <span className={styles.label}>
          <span aria-hidden="true">&gt;</span> CHOI SANGROK / ANDROID + AI NATIVE
        </span>
        <h1 id="hero-title">
          Android 제품을 만들고,
          <br />
          <strong>AI Native</strong>로<br className={styles.mobileBreak} /> 일합니다<span className={styles.cursor}>_</span>
        </h1>
        <p className={styles.description}>
          Kotlin과 Jetpack Compose로 앱을 만들고 출시 후 운영까지 맡아왔습니다.
          지금은 LLM 학습 데이터를 다듬고, 같은 조건으로 모델을 비교하는 평가 하네스를 만듭니다.
          vLLM 서빙 환경도 직접 구성합니다.
        </p>

        <div className={styles.actions}>
          <a className={`${styles.button} ${styles.primary}`} href="#projects">
            Featured Work <PixelIcon name="arrow" />
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
            Career Log <PixelIcon name="resume" />
          </a>
        </div>
      </div>

      <div className={styles.sceneColumn}>
        <div className={styles.sceneFrame}>
          <div className={styles.messageBox}>NEW JOURNEY START!</div>
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
          <div className={styles.statusBox} aria-label="현재 개발자 상태">
            <span>3 PRODUCTS</span>
            <strong>ANDROID + AI</strong>
            <span className={styles.building}>SHIPPING</span>
          </div>
        </div>
      </div>
    </section>
  )
}
