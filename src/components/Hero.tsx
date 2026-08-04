import { profile } from '../data/profile'
import { PixelIcon } from './PixelIcon'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.content}>
        <span className={styles.label}>
          <span aria-hidden="true">&gt;</span>
          <span>CHOI SANGROK / ANDROID DEVELOPER / AI-NATIVE PRODUCT ENGINEER</span>
        </span>
        <h1 id="hero-title">
          <span className={styles.line}>역할의 경계를 넘어,</span>
          <br />
          <span className={styles.line}>아이디어를 <strong>제품까지</strong> 가져갑니다<span className={styles.cursor}>_</span></span>
        </h1>
        <p className={styles.description}>
          제품의 문제를 기준으로 기술과 구현 범위를 결정합니다.
          Android 앱은 설계부터 출시 후 운영까지, LLM은 학습부터 평가와 적용 판단까지 맡았습니다.
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
        </div>
      </div>

      <div className={styles.sceneColumn}>
        <div className={styles.sceneFrame}>
          <div className={styles.messageBox}>제품까지 가져갑니다.</div>
          <picture>
            <source
              srcSet="/images/hero-product-developer-480.avif 480w, /images/hero-product-developer-800.avif 800w, /images/hero-product-developer.avif 1200w"
              sizes="(max-width: 820px) calc(100vw - 54px), (max-width: 1180px) 45vw, 540px"
              type="image/avif"
            />
            <img
              src="/images/hero-product-developer.jpg"
              sizes="(max-width: 820px) calc(100vw - 54px), (max-width: 1180px) 45vw, 540px"
              alt="노트의 아이디어를 노트북과 스마트폰의 제품으로 옮기는 개발자의 저녁 작업실"
              width="1536"
              height="1024"
              fetchPriority="high"
              loading="eager"
            />
          </picture>
          <div className={styles.statusBox} aria-label="주요 경험과 기술">
            <span>Android 앱 3개</span>
            <strong>설계부터 운영</strong>
            <span className={styles.building}>LLM 학습과 평가</span>
          </div>
        </div>
      </div>
    </section>
  )
}
