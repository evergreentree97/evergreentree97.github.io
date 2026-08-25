import { careerIntroduction, experiences } from '../data/experience'
import { PixelIcon } from './PixelIcon'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section className={styles.experience} id="experience" aria-labelledby="experience-title">
      <Reveal stagger>
        <SectionTitle id="experience-title" title="경력" />
        <div className={styles.summary} data-reveal-item>
          {careerIntroduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <ol className={styles.timeline}>
          {experiences.map((experience) => (
            <li key={`${experience.organization}-${experience.period}`} data-reveal-item>
            <div className={styles.marker} aria-hidden="true">
              <PixelIcon name={experience.current ? 'flag' : 'save'} />
            </div>
            <div className={styles.period}>{experience.period}</div>
            <article className={styles.entry}>
              <div className={styles.entryHeading}>
                <div>
                  <h3>{experience.organization}</h3>
                  <p className={styles.intro}>{experience.intro}</p>
                  <p>{experience.role}</p>
                </div>
              </div>
              <div className={styles.chapters}>
                {experience.chapters.map((chapter) => (
                  <section className={styles.chapter} key={`${chapter.title}-${chapter.period}`}>
                    <div className={styles.chapterHeading}>
                      <span>{chapter.period}</span>
                      <h4><a href={chapter.href}>{chapter.title}</a></h4>
                    </div>
                    <div className={styles.chapterContent}>
                      <p>{chapter.summary}</p>
                    </div>
                  </section>
                ))}
              </div>
            </article>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}
