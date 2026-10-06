import { featuredProjects } from '../data/projects'
import { ProjectScene } from './ProjectScene'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <div id="projects" className={styles.wrapper}>
      {featuredProjects.map((project) => <ProjectScene key={project.id} project={project} />)}
    </div>
  )
}
