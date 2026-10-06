import { useState } from 'react'
import type { FeaturedProject } from '../data/projects'
import { projectReading } from '../data/projectReading'
import { workEvidence } from '../data/workEvidence'
import { PixelIcon } from './PixelIcon'
import styles from './ProjectScene.module.css'

export function ProjectScene({ project }: { project: FeaturedProject }) {
  const [selectedMedia, setSelectedMedia] = useState(0)
  const reading = projectReading[project.id]
  const detailMedia = reading.detailMedia.map(index => project.media[index])
  const extras = workEvidence.filter(item => 'project' in item && item.project === project.id)
  let caseIndex = 0

  return <section className={styles.scene} id={project.id} data-project={project.id} aria-labelledby={`${project.id}-title`}>
    <div className={styles.sceneInner}>
      <div className={styles.overview}>
        <div className={styles.heading}>
          <h2 id={`${project.id}-title`}>{project.name}</h2>
          <p>{reading.service}</p>
          <dl className={styles.meta}>
            <div><dt>담당</dt><dd>{reading.role}</dd></div>
            {reading.periods.map(period => <div key={period.label}><dt>{period.label}</dt><dd>{period.value}</dd></div>)}
          </dl>
        </div>
        <div className={styles.scope}><h3>담당 범위와 협업</h3><p>{reading.scope}</p></div>
      </div>
      <div className={styles.media}>
        {detailMedia.length > 1 && <div className={styles.selector} data-media-selector aria-label={`${project.name} 화면 선택`}>
          {detailMedia.map((media, index) => <button key={media.src} type="button" aria-pressed={selectedMedia === index} aria-controls={`${project.id}-screen-${index}`} onClick={() => setSelectedMedia(index)}>{media.caption?.split(' / ')[0]}</button>)}
        </div>}
        {detailMedia.map((media, index) => <figure key={media.src} id={`${project.id}-screen-${index}`} className={styles.figure} data-media-active={selectedMedia === index}>
          <a className={styles.imageFrame} href={media.src} target="_blank" rel="noreferrer" aria-label={`${project.name} ${media.caption} 원본 화면 열기`}>
            <img src={media.src} alt={media.alt} width={media.width} height={media.height} loading="lazy" />
          </a>
          <figcaption>{media.caption}{project.id === 'model-evaluation' && <span>화면 시안 (캐릭터 이름 마스킹)</span>}<a href={media.src} target="_blank" rel="noreferrer">원본 화면 열기 <PixelIcon name="external" /></a></figcaption>
        </figure>)}
      </div>
      <div className={styles.reading}>
        {project.highlightGroups.map((group, groupIndex) => <div key={group.title ?? groupIndex} className={styles.group}>
          {group.title && <h3 className={styles.groupTitle}>{group.title}</h3>}
          {group.highlights.map((highlight, index) => {
            const separator = highlight.indexOf(':')
            const context = reading.cases[caseIndex++] ?? {}
            const Heading = group.title ? 'h4' : 'h3'
            return <details className={styles.case} key={highlight} open={index === 0}>
              <summary><Heading>{highlight.slice(0, separator)}</Heading><PixelIcon name="arrow" /></summary>
              <dl className={styles.caseBody}>
                {context.context && <div><dt>상황과 제약</dt><dd>{context.context}</dd></div>}
                {context.choice && <div><dt>선택과 이유</dt><dd>{context.choice}</dd></div>}
                <div><dt>구현과 확인한 동작</dt><dd>{context.implementation ?? highlight.slice(separator + 1).trim()}</dd></div>
                {context.boundary && <div><dt>적용 범위와 한계</dt><dd>{context.boundary}</dd></div>}
              </dl>
            </details>
          })}
        </div>)}
        {extras.length > 0 && <div className={styles.relatedWork}><h3>함께 만든 개발 도구</h3>{extras.map(item => <div key={item.title}><h4>{item.title}</h4><p>{item.copy}</p></div>)}</div>}
      </div>
      <div className={styles.footer}>
        <ul aria-label={`${project.name} 사용 기술`}>{project.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
        <div>{project.links.map(link => <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} <PixelIcon name="external" /></a>)}</div>
        <a href="#projects">프로젝트 목록으로</a>
      </div>
    </div>
  </section>
}
