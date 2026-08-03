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
          <span className={styles.line}>기준을 세우고,</span>
          <br />
          <span className={styles.line}><strong>제품을</strong> 끝까지 만듭니다<span className={styles.cursor}>_</span></span>
        </h1>
        <p className={styles.description}>
          Android 앱의 구조 설계와 출시 후 운영을 담당했으며, LLM 학습과 평가 체계를 구축했습니다.
          AI는 개발 과정에 활용하고, 결과는 코드 리뷰와 동작 테스트로 검증합니다.
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
          <div className={styles.messageBox}>출시 이후까지 책임집니다.</div>
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
            <span>Android 앱 3개</span>
            <strong>Kotlin / Compose</strong>
            <span className={styles.building}>LLM 평가</span>
          </div>
        </div>
      </div>
    </section>
  )
}
