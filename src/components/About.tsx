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
            <h3>Android 앱과 대화형 LLM을 다룹니다</h3>
            <dl className={styles.focus}>
              <div>
                <dt>Android</dt>
                <dd>구조 설계, SDK와 API 연동, 출시 후 운영</dd>
              </div>
              <div>
                <dt>LLM</dt>
                <dd>학습 데이터 정리, 추가 학습, 평가와 서빙</dd>
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
