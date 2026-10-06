import { sideProjects } from '../data/sideProjects'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './SideProjects.module.css'

export function SideProjects() {
  return (
    <section className={styles.section} id="side-projects" aria-labelledby="side-projects-title">
      <Reveal stagger>
        <SectionTitle id="side-projects-title" title="사이드 프로젝트" />
        <div className={styles.grid}>
          {sideProjects.map((project) => (
            <article key={project.name} data-reveal-item>
            <div className={styles.meta}>
              <span>{project.period}</span>
            </div>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <ul>
              {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
