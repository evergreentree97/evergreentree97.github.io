import { PixelIcon } from './PixelIcon'
import { SectionTitle } from './SectionTitle'
import styles from './About.module.css'

export function About() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <SectionTitle id="about-title" eyebrow="PROFILE" title="소개" />
      <div className={styles.body}>
        <div className={styles.avatar} aria-hidden="true">
          <div className={styles.avatarScreen}>
            <PixelIcon name="avatar" />
          </div>
          <span>PLAYER 01</span>
        </div>
        <div className={styles.copy}>
          <h3>불확실한 기술 문제를 함께 판단할 기준으로 바꿉니다</h3>
          <dl className={styles.focus}>
            <div>
              <dt>판단 근거</dt>
              <dd>실패 조건, 대안과 적용 범위를 문서로 남깁니다.</dd>
            </div>
            <div>
              <dt>검증 범위</dt>
              <dd>코드 리뷰, 테스트와 실기기 결과로 변경을 확인합니다.</dd>
            </div>
          </dl>
          <a href="#experience">
            경력 보기 <PixelIcon name="arrow" />
          </a>
        </div>
      </div>
    </section>
  )
}
