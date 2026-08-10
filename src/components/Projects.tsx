import { profile } from '../data/profile'
import { featuredProjects } from '../data/projects'
import { PixelIcon } from './PixelIcon'
import { ProjectArtwork } from './ProjectArtwork'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './Projects.module.css'

const caseLabels = [
  ['문제', 'problem'],
  ['판단', 'decision'],
  ['검증', 'verification'],
] as const

export function Projects() {
  return (
    <section className={styles.projects} id="projects" aria-labelledby="projects-title">
      <SectionTitle
        id="projects-title"
        index="01"
        eyebrow="SELECTED WORK"
        title="주요 프로젝트"
        action={
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">
            GitHub 프로젝트 보기 <PixelIcon name="external" />
          </a>
        }
      />
      <Reveal stagger>
        <p className={styles.sectionNote}>각 프로젝트에서 맡은 범위와 문제, 판단, 검증을 분리했습니다.</p>
        <div className={styles.grid}>
          {featuredProjects.map((project, index) => {
            const serviceLink = project.links[0]

            return (
              <article className={styles.card} key={project.name}>
                <ProjectArtwork
                  kind={project.image.artwork}
                  alt={project.image.alt}
                  href={serviceLink?.href}
                  linkLabel={serviceLink?.label}
                  external={serviceLink?.external}
                />
                <div className={styles.cardBody}>
                  <div className={styles.cardHeading}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <small>{serviceLink ? 'PUBLIC SERVICE' : project.eyebrow}</small>
                  </div>
                  <div className={styles.titleRow}>
                    <div>
                      <h3>{project.name}</h3>
                      <p className={styles.summary}>{project.summary}</p>
                    </div>
                    {serviceLink ? (
                      <a
                        className={styles.serviceLink}
                        href={serviceLink.href}
                        target={serviceLink.external ? '_blank' : undefined}
                        rel={serviceLink.external ? 'noreferrer' : undefined}
                      >
                        {serviceLink.label}
                        <PixelIcon name={serviceLink.external ? 'external' : 'arrow'} />
                      </a>
                    ) : (
                      <span className={styles.caseLabel}>평가 사례</span>
                    )}
                  </div>

                  <dl className={styles.role}>
                    <dt>담당</dt>
                    <dd>{project.role}</dd>
                  </dl>

                  <dl className={styles.caseStudy}>
                    {caseLabels.map(([label, key]) => (
                      <div key={key}>
                        <dt>{label}</dt>
                        <dd>{project.caseStudy[key]}</dd>
                      </div>
                    ))}
                  </dl>

                  <ul className={styles.tags} aria-label={`${project.name} 기술`}>
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
