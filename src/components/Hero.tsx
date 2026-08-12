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
          <span className={styles.line}>제품의 구조를 설계하고</span>
          <br />
          <span className={styles.line}><strong>출시 이후까지 운영합니다.</strong><span className={styles.cursor}>_</span></span>
        </h1>
        <p className={styles.description}>
          Android 앱의 초기 구조를 설계하고 주요 기능을 개발해 출시 후 운영까지 맡아왔습니다.
          사내 AI TF에서는 캐릭터 대화 모델의 데이터를 정제하고 LoRA로 학습했습니다.
          평가 도구와 vLLM 서빙도 맡았습니다.
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
              alt="창가 책상에서 노트북으로 작업하는 개발자의 도트 일러스트"
              width="1536"
              height="1024"
              fetchPriority="high"
              loading="eager"
            />
          </picture>
          <div className={styles.statusBox} aria-label="주요 경험과 기술">
            <strong>Kotlin / Compose</strong>
            <span className={styles.building}>LLM 평가</span>
          </div>
        </div>
      </div>
    </section>
  )
}
