import { moreProjects } from '../data/projects'
import { PixelIcon } from './PixelIcon'
import { SectionTitle } from './SectionTitle'
import styles from './MoreWork.module.css'

export function MoreWork() {
  return (
    <section className={styles.section} aria-labelledby="more-work-title">
      <SectionTitle id="more-work-title" eyebrow="MORE WORK" title="오픈소스와 사이드 프로젝트" />
      <div className={styles.list}>
        {moreProjects.map((project) => (
          <article key={project.name}>
            <div className={styles.heading}>
              <span>{project.eyebrow}</span>
              <h3>{project.name}</h3>
            </div>
            <div className={styles.copy}>
              <p>{project.summary}</p>
              <strong>{project.evidence}</strong>
              <ul aria-label={`${project.name} 기술`}>
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
            <a href={project.link.href} target="_blank" rel="noreferrer">
              {project.link.label} <PixelIcon name="external" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
