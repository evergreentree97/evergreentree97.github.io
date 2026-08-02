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
          AI에 작업을 맡기고,
          <br />
          <strong>제품에 필요한</strong><br className={styles.mobileBreak} /> 판단을 합니다<span className={styles.cursor}>_</span>
        </h1>
        <p className={styles.description}>
          Android 앱을 만들고 출시 후 운영해왔습니다.
          서버 API 반영과 반복 구현처럼 결과를 확인할 수 있는 작업은 저장소 규칙과 완료 조건을 준 뒤 AI 도구에 맡깁니다.
          작업 범위와 구조, 제품 반영 여부를 판단하고 코드 리뷰와 기존 기능 테스트로 결과를 확인합니다.
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
          <div className={styles.messageBox}>만들고 확인한 뒤 출시합니다.</div>
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
            <span>ANDROID 제품 3개</span>
            <strong>AI에 작업을 맡김</strong>
            <span className={styles.building}>제품 판단과 검증</span>
          </div>
        </div>
      </div>
    </section>
  )
}
