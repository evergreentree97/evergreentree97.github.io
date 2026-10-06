import { featuredProjects } from '../data/projects'
import { projectReading } from '../data/projectReading'
import { ProjectScene } from './ProjectScene'
import { PixelIcon } from './PixelIcon'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './Projects.module.css'

export function Projects() {
  return <>
    <section id="projects" className={styles.overview} aria-labelledby="projects-title">
      <SectionTitle id="projects-title" title="프로젝트" />
      <Reveal stagger animate>
        <div className={styles.grid}>
          {featuredProjects.map((project, index) => {
            const reading = projectReading[project.id]
            const media = project.media[reading.summaryMedia]
            return <article key={project.id} className={index === 0 ? styles.featured : styles.item} data-reveal-item>
              <div className={styles.copy}>
                <h3><a href={`#${project.id}`}>{reading.shortName}</a></h3>
                <p className={styles.service}>{reading.service}</p>
                <dl className={styles.facts}>
                  <div><dt>담당</dt><dd>{reading.role}</dd></div>
                  {reading.periods.map(period => <div key={period.label}><dt>{period.label}</dt><dd>{period.value}</dd></div>)}
                </dl>
                <ul className={styles.technologies} aria-label={`${reading.shortName} 주요 기술`}>{reading.summaryTechnologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
                <a className={styles.detailLink} href={`#${project.id}`}>{reading.shortName} 상세 보기 <PixelIcon name="arrow" /></a>
              </div>
              <figure className={styles.media}>
                <a className={styles.imageFrame} href={media.src} target="_blank" rel="noreferrer" aria-label={`${reading.shortName} ${media.caption} 원본 화면 열기`}>
                  <img src={media.src} alt={media.alt} width={media.width} height={media.height} loading="lazy" />
                </a>
                <figcaption>{media.caption}{project.id === 'model-evaluation' && <span>화면 시안 (캐릭터 이름 마스킹)</span>}<a href={media.src} target="_blank" rel="noreferrer">원본 화면 열기</a></figcaption>
              </figure>
            </article>
          })}
        </div>
      </Reveal>
    </section>
    {featuredProjects.map(project => <ProjectScene key={project.id} project={project} />)}
  </>
}
