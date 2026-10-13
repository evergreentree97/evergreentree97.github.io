import { moreProjects } from '../data/projects'
import { SectionTitle } from './SectionTitle'
import { Icon } from './Icon'
import styles from './MoreWork.module.css'

export function MoreWork() {
  return (
    <section className={styles.section} id="open-source" aria-labelledby="more-work-title">
      <SectionTitle id="more-work-title" title="오픈소스" />
      <div className={styles.list}>
        {moreProjects.map((project) => (
          <article key={project.name}>
            <div className={styles.heading}>
              <h3>{project.name}</h3>
            </div>
            <div className={styles.copy}>
              <p>{project.summary}</p>
            </div>
            <a href={project.link.href} target="_blank" rel="noreferrer">
              <Icon name="github" />
              {project.link.label}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
