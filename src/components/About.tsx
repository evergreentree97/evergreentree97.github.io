import { PixelIcon } from './PixelIcon'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './About.module.css'

export function About() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <Reveal>
        <SectionTitle id="about-title" index="01" eyebrow="PROFILE" title="소개" />
        <div className={styles.body}>
          <div className={styles.avatar} aria-hidden="true">
            <div className={styles.avatarScreen}>
              <PixelIcon name="avatar" />
            </div>
            <span>PLAYER 01</span>
          </div>
          <div className={styles.copy}>
            <h3>불확실한 문제에 판단 기준과 검증 방법을 설계합니다</h3>
            <dl className={styles.focus}>
              <div>
                <dt>Android</dt>
                <dd>앱, 서버, 외부 SDK의 책임 분리와 출시 후 운영</dd>
              </div>
              <div>
                <dt>LLM</dt>
                <dd>학습과 평가 조건을 고정하고, 제품 품질을 기준으로 모델 채택 여부를 판단</dd>
              </div>
            </dl>
            <a href="#experience">
              경력 보기 <PixelIcon name="arrow" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
