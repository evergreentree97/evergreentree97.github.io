import { experiences } from '../data/experience'
import { PixelIcon } from './PixelIcon'
import { SectionTitle } from './SectionTitle'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section className={styles.experience} id="experience" aria-labelledby="experience-title">
      <SectionTitle id="experience-title" eyebrow="CAREER LOG" title="경력" />
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
              <div className={styles.chapters}>
                {experience.chapters.map((chapter) => (
                  <section className={styles.chapter} key={`${chapter.title}-${chapter.period}`}>
                    <div className={styles.chapterHeading}>
                      <span>{chapter.period}</span>
                      <h4>{chapter.title}</h4>
                    </div>
                    <div className={styles.chapterContent}>
                      <p>{chapter.summary}</p>
                      <ul className={styles.highlights}>
                        {chapter.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </section>
                ))}
              </div>
              <ul className={styles.tags} aria-label={`${experience.organization} 기술`}>
                {experience.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
