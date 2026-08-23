import { featuredProjects } from '../data/projects'
import { ProjectScene } from './ProjectScene'

export function Projects() {
  return (
    <div id="projects" style={{ scrollMarginTop: 64 }}>
      {featuredProjects.map((project) => <ProjectScene key={project.id} project={project} />)}
    </div>
  )
}
