import { profile } from '../data/profile'
import { PixelIcon } from './PixelIcon'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.heroContent}>
          <span className={styles.label}>
            ANDROID & AI PRODUCT
          </span>

          <h1 id="hero-title">
            <span className={styles.line}>제품을 만드는</span>
            <span className={styles.line}>엔지니어입니다</span>
          </h1>

          <div className={styles.description}>
            <p>Vuddy의 신규 Android 앱 구조와 공통 기반을 설계하고 핵심 기능 개발, QA 배포와 출시 후 운영을 담당했습니다.</p>
            <p>사내 AI TF에서 캐릭터 대화 모델을 개발한 뒤 해당 모델을 사용하는 Android 채팅 기능을 주도했습니다.</p>
          </div>

          <div className={styles.actions}>
            <a className={styles.primaryAction} href="#projects">
              주요 프로젝트 보기 <PixelIcon name="arrow" />
            </a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">
              GitHub <PixelIcon name="external" />
            </a>
          </div>

          <p className={styles.identity}>
            <strong>최상록</strong>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
              <PixelIcon name="linkedin" /> LinkedIn
            </a>
            <a href="#contact">
              <PixelIcon name="mail" /> 연락처
            </a>
          </p>
        </div>

        <div className={styles.sceneFrame}>
          <picture>
            <source
              type="image/avif"
              srcSet="/images/hero-product-developer-hand-hidden-480.avif 480w, /images/hero-product-developer-hand-hidden-560.avif 560w, /images/hero-product-developer-hand-hidden-640.avif 640w, /images/hero-product-developer-hand-hidden-800.avif 800w, /images/hero-product-developer-hand-hidden.avif 1200w"
              sizes="(max-width: 900px) calc(100vw - 32px), 52vw"
            />
            <img
              src="/images/hero-product-developer-hand-hidden.jpg"
              alt="창가 책상에서 노트북으로 작업하는 개발자의 도트 일러스트"
              width="1200"
              height="800"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
          <div className={styles.scrim} aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
