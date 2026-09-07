import { careerIntroduction, experiences } from '../data/experience'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './Experience.module.css'

function OrganizationHeading({ organization }: { organization: string }) {
  const detailStart = organization.indexOf(' (')

  if (detailStart < 0) return <h3>{organization}</h3>

  return (
    <h3>
      {organization.slice(0, detailStart)}{' '}
      <span>{organization.slice(detailStart + 1)}</span>
    </h3>
  )
}

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
              <article className={styles.entry}>
                <header className={styles.company}>
                  <p className={styles.companyPeriod}>{experience.period}</p>
                  <OrganizationHeading organization={experience.organization} />
                  <p className={styles.companyIntro}>{experience.intro}</p>
                  <p className={styles.companyRole}>{experience.role}</p>
                </header>
                <div className={styles.chapters}>
                  {experience.chapters.map((chapter) => (
                    <section className={styles.chapter} key={`${chapter.title}-${chapter.period}`}>
                      <p className={styles.chapterPeriod}>{chapter.period}</p>
                      <div className={styles.chapterBody}>
                        <h4><a href={chapter.href}>{chapter.title}</a></h4>
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
