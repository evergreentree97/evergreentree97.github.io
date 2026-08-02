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
            <h3>AI에 작업을 맡기되, 제품에 반영할지는 직접 판단합니다</h3>
            <p>
              Vuddy의 초기 구조, 실시간 채팅과 미디어를 맡았고 Momentica에서는
              포토카드 도감과 영상 알람을 개발했습니다.
            </p>
            <p>
              사내 AI TF에서는 오픈소스 LLM의 데이터를 정제하고 추가 학습했습니다.
              같은 질문과 채점 기준으로 모델을 비교하는 평가 도구를 만들고 채점기의 일관성도 따로 확인했습니다.
            </p>
            <p>
              AI 도구에는 서버 API 반영과 QA 준비처럼 범위가 분명한 작업을 맡깁니다.
              결과는 직접 읽고 테스트하며, 기존 구조와 사용자 흐름에 맞는 코드만 반영합니다.
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
