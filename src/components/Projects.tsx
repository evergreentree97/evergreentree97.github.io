import { profile } from '../data/profile'
import { featuredProjects } from '../data/projects'
import { PixelIcon } from './PixelIcon'
import { ProjectArtwork } from './ProjectArtwork'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './Projects.module.css'

const caseLabels = [
  ['문제', 'problem'],
  ['선택', 'decision'],
  ['결과', 'verification'],
] as const

export function Projects() {
  return (
    <section className={styles.projects} id="projects" aria-labelledby="projects-title">
      <Reveal stagger>
        <SectionTitle
          id="projects-title"
          index="03"
          eyebrow="SELECTED WORK"
          title="주요 프로젝트"
          action={
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">
              GitHub 프로젝트 보기 <PixelIcon name="external" />
            </a>
          }
        />
        <p className={styles.sectionNote}>각 프로젝트는 문제, 선택, 결과 순서로 정리했습니다. 수치에는 측정 조건을 함께 적었습니다.</p>
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

                  <ul className={styles.outcomes}>
                    {project.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>

                  <ul className={styles.tags} aria-label={`${project.name} 기술`}>
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>

                  <details className={styles.caseStudy}>
                    <summary>
                      해결 과정 보기 <PixelIcon name="arrow" />
                    </summary>
                    <dl>
                      {caseLabels.map(([label, key]) => (
                        <div key={key}>
                          <dt>{label}</dt>
                          <dd>{project.caseStudy[key]}</dd>
                        </div>
                      ))}
                    </dl>
                  </details>
                </div>
              </article>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
