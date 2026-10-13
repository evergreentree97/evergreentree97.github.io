import { featuredProjects } from '../data/projects'
import { ProjectScene } from './ProjectScene'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <section id="projects" className={styles.wrapper} aria-labelledby="projects-title">
      <h2 id="projects-title" className={styles.title}>프로젝트</h2>
      <div className={styles.gallery}>
        {featuredProjects.map((project) => <ProjectScene key={project.id} project={project} />)}
      </div>
    </section>
  )
}
