import { experiences, type ExperienceProject, type ExperienceText } from '../data/experience'
import styles from './Experience.module.css'

function renderText(parts: ExperienceText) {
  return parts.map((part, index) => typeof part === 'string'
    ? part
    : <strong key={index}>{part.emphasis}</strong>)
}

function CareerProject({ project, grouped = false }: { project: ExperienceProject; grouped?: boolean }) {
  const Heading = grouped ? 'h5' : 'h4'

  return (
    <article className={`${styles.project} ${project.featured ? styles.featured : ''}`}>
      <Heading className={styles.projectTitle}>
        <a href={project.href}>
          {project.title}
        </a>
      </Heading>
      <p className={styles.period}>{project.period}</p>
      {project.intro && <p className={styles.projectIntro}>{project.intro}</p>}
      {project.bullets && (
        <ul className={styles.bullets}>
          {project.bullets.map((bullet, index) => <li key={index}>{renderText(bullet)}</li>)}
        </ul>
      )}
      {project.summary && <p className={styles.summary}>{renderText(project.summary)}</p>}
    </article>
  )
}

export function Experience() {
  return (
    <section className={styles.experience} id="experience" aria-labelledby="experience-title">
      <h2 id="experience-title" className={styles.sectionTitle}>경력</h2>
      {experiences.map((experience) => (
        <article className={styles.employer} key={`${experience.organization}-${experience.period}`}>
          <div className={styles.identity}>
            <h3>{experience.organization}</h3>
            <p className={styles.affiliation}>{experience.affiliation}</p>
            <p className={styles.intro}>{experience.intro}</p>
            <div className={styles.employment}>
              <p className={styles.role}>{experience.role}</p>
              <p className={styles.period}>{experience.period}</p>
            </div>
          </div>
          <div className={styles.work}>
            {experience.chapters.map((chapter) => (
              <div key={chapter.title ?? chapter.projects[0].title} className={chapter.title ? styles.group : styles.single}>
                {chapter.title && (
                  <div className={styles.groupHeading}>
                    <h4 className={styles.groupTitle}>{chapter.title}</h4>
                    {chapter.description && <p className={styles.groupDescription}>{chapter.description}</p>}
                  </div>
                )}
                <div className={chapter.title ? styles.pairedProjects : undefined}>
                  {chapter.projects.map((project) => (
                    <CareerProject key={project.title} project={project} grouped={Boolean(chapter.title)} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  )
}
