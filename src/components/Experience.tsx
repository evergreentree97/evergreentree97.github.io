import { experiences } from '../data/experience'
import { PixelIcon } from './PixelIcon'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section className={styles.experience} id="experience" aria-labelledby="experience-title">
      <Reveal>
        <SectionTitle id="experience-title" index="05" eyebrow="CAREER LOG" title="경력" />
        <p className={styles.sectionNote}>공개 가능한 범위에서 직접 담당한 업무와 검증 결과를 정리했습니다.</p>
        <ol className={styles.timeline}>
          {experiences.map((experience) => (
            <li key={`${experience.organization}-${experience.period}`}>
              <div className={styles.marker} aria-hidden="true">
                <PixelIcon name={experience.current ? 'flag' : 'save'} />
              </div>
              <div className={styles.period}>{experience.period}</div>
              <article className={styles.entry}>
                <div className={styles.entryHeading}>
                  <div>
                    <h3>{experience.organization}</h3>
                    <p>{experience.role}</p>
                  </div>
                  {experience.current ? <span>CURRENT</span> : null}
                </div>
                <p className={styles.summary}>{experience.summary}</p>
                <ul className={styles.highlights}>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <ul className={styles.tags} aria-label={`${experience.organization} 기술`}>
                  {experience.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}
