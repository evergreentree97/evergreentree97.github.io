import { experiences } from '../data/experience'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section className={styles.experience} id="experience" aria-labelledby="experience-title">
      <Reveal stagger>
        <SectionTitle id="experience-title" title="경력" />
        <ol className={styles.timeline}>
          {experiences.map((experience) => (
            <li key={`${experience.organization}-${experience.period}`} data-reveal-item>
            <div className={styles.period}>{experience.period}</div>
            <article className={styles.entry}>
              <div className={styles.entryHeading}>
                <div>
                  <h3>{experience.organization}</h3>
                  <p className={styles.intro}>{experience.intro}</p>
                  <p>{experience.role}</p>
                </div>
              </div>

            </article>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}
