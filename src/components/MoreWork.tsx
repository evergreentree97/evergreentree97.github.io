import { moreProjects } from '../data/projects'
import { PixelIcon } from './PixelIcon'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './MoreWork.module.css'

export function MoreWork() {
  return (
    <section className={styles.section} aria-labelledby="more-work-title">
      <Reveal>
        <SectionTitle id="more-work-title" index="07" eyebrow="MORE WORK" title="Open & Side Work" />
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
      </Reveal>
    </section>
  )
}
