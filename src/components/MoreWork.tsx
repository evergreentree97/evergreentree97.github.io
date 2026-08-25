import { moreProjects } from '../data/projects'
import { PixelIcon } from './PixelIcon'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './MoreWork.module.css'

export function MoreWork() {
  return (
    <section className={styles.section} aria-labelledby="more-work-title">
      <Reveal stagger>
        <SectionTitle id="more-work-title" title="오픈소스" />
        <div className={styles.list}>
          {moreProjects.map((project) => (
            <article key={project.name} data-reveal-item>
            <div className={styles.heading}>
              <span>{project.eyebrow}</span>
              <h3>{project.name}</h3>
            </div>
            <div className={styles.copy}>
              <p>{project.summary}</p>
              <strong>{project.evidence}</strong>
              {project.technologies.length > 0 && (
                <ul aria-label={`${project.name} 기술`}>
                  {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              )}
            </div>
            <a href={project.link.href} target="_blank" rel="noreferrer">
              {project.link.label} <PixelIcon name="external" />
            </a>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
