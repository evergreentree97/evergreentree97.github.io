import { featuredProjects } from '../data/projects'
import { ProjectScene } from './ProjectScene'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <>
      <section className={styles.overview} id="projects" aria-labelledby="projects-title">
        <div className={styles.inner}>
          <h2 id="projects-title">출시한 앱, 검증한 모델, 운영 환경에서 확인한 판단을 보여드립니다.</h2>
          <nav className={styles.projectIndex} aria-label="주요 프로젝트 바로 가기">
            {featuredProjects.map((project, index) => (
              <a href={`#${project.id}`} key={project.id}>
                <small>{String(index + 1).padStart(2, '0')}</small>
                <strong>{project.indexName}</strong>
                <span>{project.eyebrow}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {featuredProjects.map((project) => <ProjectScene key={project.id} project={project} />)}
    </>
  )
}
