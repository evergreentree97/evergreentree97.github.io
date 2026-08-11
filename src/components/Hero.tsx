import { profile } from '../data/profile'
import { PixelIcon } from './PixelIcon'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.content}>
        <span className={styles.label}>
          <span aria-hidden="true">&gt;</span>
          <span>CHOI SANGROK / ANDROID DEVELOPER</span>
        </span>
        <h1 id="hero-title">
          <span className={styles.line}>AI에 일을 맡기고,</span>
          <br />
          <span className={styles.line}><strong>제품을 만듭니다.</strong><span className={styles.cursor}>_</span></span>
        </h1>
        <p className={styles.description}>
          Android 앱의 초기 구조와 주요 기능을 개발해 출시와 운영까지 맡아왔습니다.
          사내 AI TF에서는 캐릭터 대화 모델의 데이터 정제, 학습, 평가와 서빙을 담당했습니다.
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
          <div className={styles.messageBox}>BUILD. SHIP. ENJOY.</div>
          <picture>
            <source
              srcSet="/images/hero-product-developer-hand-hidden-480.avif 480w, /images/hero-product-developer-hand-hidden-560.avif 560w, /images/hero-product-developer-hand-hidden-640.avif 640w, /images/hero-product-developer-hand-hidden-800.avif 800w, /images/hero-product-developer-hand-hidden.avif 1200w"
              sizes="(max-width: 540px) min(320px, calc(100vw - 40px)), (max-width: 820px) calc(100vw - 54px), (max-width: 1180px) 45vw, 540px"
              type="image/avif"
            />
            <img
              src="/images/hero-product-developer-hand-hidden.jpg"
              sizes="(max-width: 540px) min(320px, calc(100vw - 40px)), (max-width: 820px) calc(100vw - 54px), (max-width: 1180px) 45vw, 540px"
              alt="노트의 아이디어를 노트북과 스마트폰의 제품으로 옮기는 개발자의 저녁 작업실"
              width="1536"
              height="1024"
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
