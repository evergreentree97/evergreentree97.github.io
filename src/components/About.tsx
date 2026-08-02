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
            <h3>Android 앱을 만들고, LLM을 학습하고 평가합니다</h3>
            <p>
              Vuddy의 초기 구조, 실시간 채팅과 미디어를 맡았고 Momentica에서는
              포토카드 도감과 영상 알람을 개발했습니다.
            </p>
            <p>
              사내 AI TF에서는 오픈소스 LLM의 학습 데이터를 정제하고 LoRA로 추가 학습했습니다.
              같은 질문으로 모델을 비교하는 도구를 만들고, 채점 결과가 일관적인지도 따로 확인했습니다.
            </p>
            <p>
              서버 API 연동이나 QA 준비에는 AI 도구를 씁니다.
              나온 코드는 직접 읽고 기존 기능을 테스트한 뒤 반영합니다.
            </p>
            <a href="#experience">
              경력 보기 <PixelIcon name="arrow" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
