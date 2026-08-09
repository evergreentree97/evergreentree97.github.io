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
          <span className={styles.line}>실패 조건을 확인하고</span>
          <br />
          <span className={styles.line}><strong>책임을 나눕니다.</strong><span className={styles.cursor}>_</span></span>
        </h1>
        <p className={styles.description}>
          신규 Android 앱의 채팅 구조와 Sendbird 연동을 맡았습니다.
          대규모 그룹 푸시와 채널별 금칙어 설정이 요구사항을 충족하지 못하는 것을 출시 전에 확인해,
          실시간 메시징은 Sendbird에 두고 비즈니스 규칙과 자체 푸시는 Backend가 맡도록 구분했습니다.
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
          <div className={styles.messageBox}>CHECK. DECIDE. VERIFY.</div>
          <picture>
            <source
              srcSet="/images/hero-product-developer-480.avif 480w, /images/hero-product-developer-560.avif 560w, /images/hero-product-developer-640.avif 640w, /images/hero-product-developer-800.avif 800w, /images/hero-product-developer.avif 1200w"
              sizes="(max-width: 540px) min(320px, calc(100vw - 40px)), (max-width: 820px) calc(100vw - 54px), (max-width: 1180px) 45vw, 540px"
              type="image/avif"
            />
            <img
              src="/images/hero-product-developer.jpg"
              sizes="(max-width: 540px) min(320px, calc(100vw - 40px)), (max-width: 820px) calc(100vw - 54px), (max-width: 1180px) 45vw, 540px"
              alt="노트의 아이디어를 노트북과 스마트폰의 제품으로 옮기는 개발자의 저녁 작업실"
              width="1536"
              height="1024"
              fetchPriority="high"
              loading="eager"
            />
          </picture>
          <div className={styles.statusBox} aria-label="채팅 구조 판단 요약">
            <span>채팅 구조 설계</span>
            <strong>Sendbird / Backend</strong>
            <span className={styles.building}>출시 전 검증</span>
          </div>
        </div>
      </div>
    </section>
  )
}
