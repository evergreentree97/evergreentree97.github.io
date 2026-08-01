import { PixelIcon } from './PixelIcon'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './About.module.css'

export function About() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <Reveal>
        <SectionTitle id="about-title" index="01" eyebrow="PROFILE" title="About Me" />
        <div className={styles.body}>
          <div className={styles.avatar} aria-hidden="true">
            <div className={styles.avatarScreen}>
              <PixelIcon name="avatar" />
            </div>
            <span>PLAYER 01</span>
          </div>
          <div className={styles.copy}>
            <h3>Android를 기반으로 AI Native 제품까지 다루는 개발자</h3>
            <p>
              Kotlin과 Jetpack Compose로 앱 아키텍처, 채팅, 결제, 광고와
              배포를 경험했습니다.
            </p>
            <p>
              최근에는 LLM 데이터 정제, LoRA 기반 SFT, 평가 하네스와 vLLM
              서빙을 맡고 있습니다.
            </p>
            <p>
              모델 점수만 보지 않고 실제 사용 경험과 제품 기준까지 함께
              검증합니다.
            </p>
            <a href="#experience">
              View experience <PixelIcon name="arrow" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
