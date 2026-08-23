import type { FeaturedProject } from '../data/projects'
import { PixelIcon } from './PixelIcon'
import styles from './ProjectScene.module.css'

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

          <ul className={styles.highlightList} aria-label={`${project.name} 담당 업무`}>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          {project.screenshots.length > 0 && (
            <div className={styles.screenshotRow} aria-label={`${project.name} 화면`}>
              {project.screenshots.map((screenshot) => (
                <img
                  key={screenshot.src}
                  src={screenshot.src}
                  alt={screenshot.alt}
                  loading="lazy"
                  width={screenshot.width}
                  height={screenshot.height}
                />
              ))}
            </div>
          )}

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
      </div>
    </section>
  )
}
