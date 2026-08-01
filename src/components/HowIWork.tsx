import { workingMethod } from '../data/workingMethod'
import { PixelIcon } from './PixelIcon'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './HowIWork.module.css'

export function HowIWork() {
  return (
    <section className={styles.section} id="how-i-work" aria-labelledby="how-i-work-title">
      <Reveal>
        <SectionTitle id="how-i-work-title" index="03" eyebrow="AI NATIVE" title="How I Work" />
        <div className={styles.intro}>
          <p>AI가 먼저 저장소 맥락을 읽게 합니다. 결과는 제가 리뷰하고 테스트합니다.</p>
          <span>
            <PixelIcon name="code" /> CONTEXT TO VERIFIED CHANGE
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
