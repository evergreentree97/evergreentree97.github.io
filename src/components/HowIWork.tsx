import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './HowIWork.module.css'

export function HowIWork() {
  return (
    <section className={styles.section} id="how-i-work" aria-labelledby="how-i-work-title">
      <Reveal>
        <SectionTitle id="how-i-work-title" index="03" eyebrow="AI 활용" title="AI와 일하는 방식" />
        <div className={styles.note}>
          <p>
            저장소 구조와 규칙을 먼저 공유합니다. API 연동처럼 범위가 분명한 일에 AI를 쓰고,
            변경된 코드는 직접 읽고 기존 기능을 테스트합니다.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
