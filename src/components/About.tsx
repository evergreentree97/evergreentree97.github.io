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
            <h3>Android 제품을 만들고, 이제는 AI 제품의 품질까지 봅니다</h3>
            <p>
              Kotlin과 Jetpack Compose로 앱 구조를 잡고 채팅, 결제, 광고를
              구현해 출시까지 이어왔습니다.
            </p>
            <p>
              현재 오픈소스 LLM의 학습 데이터 정제와 추가 학습, 자동 평가,
              vLLM 서빙까지 맡고 있습니다.
            </p>
            <p>
              점수가 올랐는지만 보지 않습니다. 직접 써보고, 사용자가 느낄
              품질까지 확인합니다.
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
