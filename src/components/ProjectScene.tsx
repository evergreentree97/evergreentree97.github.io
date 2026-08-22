import type { FeaturedProject } from '../data/projects'
import { ModelEvaluationDiagram, MomenticaDiagram, VuddyDiagram } from './ProjectDiagrams'
import { PixelIcon } from './PixelIcon'
import styles from './ProjectScene.module.css'

function ProjectDiagram({ id }: Pick<FeaturedProject, 'id'>) {
  if (id === 'vuddy') return <VuddyDiagram />
  if (id === 'model-evaluation') return <ModelEvaluationDiagram />
  return <MomenticaDiagram />
}

export function ProjectScene({ project }: { project: FeaturedProject }) {
  const serviceLink = project.links[0]

  return (
    <section
      className={`${styles.scene} ${styles[project.id] ?? ''}`}
      id={project.id}
      aria-labelledby={`${project.id}-title`}
    >
      <div className={styles.sceneInner}>
        <div className={styles.copyColumn}>
          <div className={styles.projectHeading}>
            <span>{project.eyebrow}</span>
            <h2 id={`${project.id}-title`}>{project.name}</h2>
            <p>{project.headline}</p>
          </div>

          <div className={styles.stageList} aria-label={`${project.name} 담당, 문제, 판단과 확인`}>
            {project.sceneSteps.map((step) => (
              <article key={`${step.label}-${step.title}`}>
                <span>{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>

          <div className={styles.projectMeta}>
            <ul aria-label={`${project.name} 기술`}>
              {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
            {serviceLink ? (
              <a href={serviceLink.href} target="_blank" rel="noreferrer">
                {serviceLink.label} <PixelIcon name="external" />
              </a>
            ) : (
              <span className={styles.internalCase}>사내 평가 사례</span>
            )}
          </div>
        </div>

        <div className={styles.diagramColumn}>
          <ProjectDiagram id={project.id} />
        </div>
      </div>
    </section>
  )
}
