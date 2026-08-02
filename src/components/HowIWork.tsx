import { workingMethod } from '../data/workingMethod'
import { PixelIcon } from './PixelIcon'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './HowIWork.module.css'

export function HowIWork() {
  return (
    <section className={styles.section} id="how-i-work" aria-labelledby="how-i-work-title">
      <Reveal>
        <SectionTitle id="how-i-work-title" index="03" eyebrow="AI 활용" title="AI에 맡길 일과 제가 판단할 일" />
        <div className={styles.intro}>
          <p>AI 도구에는 범위가 분명하고 결과를 확인할 수 있는 작업을 맡깁니다. 작업 범위와 구조, 제품 반영 여부는 제가 판단합니다.</p>
          <span>
            <PixelIcon name="code" /> 맥락 제공부터 제품 판단까지
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
