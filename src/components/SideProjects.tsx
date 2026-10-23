import { sideProjects } from '../data/sideProjects'
import { SectionTitle } from './SectionTitle'
import styles from './SideProjects.module.css'

export function SideProjects() {
  return (
    <section className={styles.section} id="side-projects" aria-labelledby="side-projects-title">
      <SectionTitle id="side-projects-title" title="사이드 프로젝트" />
      <div className={styles.grid}>
        {sideProjects.map((project) => (
          <article key={project.name}>
            <h3>{project.name}</h3>
            <p className={styles.meta}>{project.period}</p>
            <p className={styles.summary}>{project.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
