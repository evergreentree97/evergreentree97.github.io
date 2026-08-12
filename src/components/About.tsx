import { PixelIcon } from './PixelIcon'
import { SectionTitle } from './SectionTitle'
import styles from './About.module.css'

export function About() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <SectionTitle id="about-title" title="소개" />
      <div className={styles.body}>
        <div className={styles.avatar} aria-hidden="true">
          <div className={styles.avatarScreen}>
            <PixelIcon name="avatar" />
          </div>
          <span>PLAYER 01</span>
        </div>
        <div className={styles.copy}>
          <h3>불확실한 문제는 실패 조건과 대안부터 정리합니다</h3>
          <dl className={styles.focus}>
            <div>
              <dt>선택 이유</dt>
              <dd>실패 조건과 비교한 대안을 문서에 남깁니다.</dd>
            </div>
            <div>
              <dt>확인 방법</dt>
              <dd>코드 리뷰와 테스트를 거친 뒤 실기기에서 다시 확인합니다.</dd>
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
