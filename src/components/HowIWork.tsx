import { workingMethod } from '../data/workingMethod'
import { PixelIcon } from './PixelIcon'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './HowIWork.module.css'

export function HowIWork() {
  return (
    <section className={styles.section} id="how-i-work" aria-labelledby="how-i-work-title">
      <Reveal>
        <SectionTitle id="how-i-work-title" index="03" eyebrow="AI 활용" title="AI와 일하는 방식" />
        <div className={styles.intro}>
          <p>서버 API 연동이나 QA 준비처럼 범위가 분명한 일을 맡깁니다. 나온 코드는 직접 리뷰하고 기존 기능까지 테스트합니다.</p>
          <span>
            <PixelIcon name="code" /> 저장소 규칙부터 코드 리뷰까지
          </span>
        </div>
        <ol className={styles.method}>
          {workingMethod.map((item, index) => (
            <li key={item.label}>
              <div className={styles.marker} aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
              <small>{item.label}</small>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}
