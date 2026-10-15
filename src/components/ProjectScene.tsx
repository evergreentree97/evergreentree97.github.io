import { useRef, useState } from 'react'
import type { FeaturedProject, ProjectMedia, ProjectPoint, ProjectVideo } from '../data/projects'
import styles from './ProjectScene.module.css'
import { Icon } from './Icon'
import { OptimizedImage } from './OptimizedImage'

function VideoMedia({ media }: { media: ProjectVideo }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) void video.play().catch(() => setIsPlaying(false))
    else video.pause()
  }

  return (
    <div className={styles.videoFrame}>
      <video
        ref={videoRef}
        poster={media.poster}
        preload="none"
        muted
        playsInline
        width={media.width}
        height={media.height}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={media.src} type="video/mp4" />
        영상 재생을 지원하지 않는 브라우저입니다.
      </video>
      <button className={styles.videoAction} type="button" aria-label={`${media.alt} ${isPlaying ? '일시 정지' : '재생'}`} aria-pressed={isPlaying} onClick={togglePlayback}>
        {isPlaying ? '일시 정지' : '재생'}
      </button>
    </div>
  )
}

function MediaContent({ media }: { media: ProjectMedia }) {
  if (media.type === 'video') return <VideoMedia media={media} />
  return <OptimizedImage src={media.src} alt={media.alt} loading="lazy" decoding="async" width={media.width} height={media.height} />
}

function WorkDetails({ project }: { project: FeaturedProject }) {
  return (
    <div className={styles.workDetails}>
      {project.highlightGroups.map((group, index) => {
        const Heading = group.title ? 'h5' : 'h4'
        return (
          <div className={styles.workGroup} key={group.title ?? index}>
            {group.title && <h4>{group.title}</h4>}
            <div className={styles.workItems}>
              {group.highlights.map((story) => (
                <article className={styles.workItem} key={story.title}>
                  <Heading>{story.title}</Heading>
                  <PointList points={story.points} />
                </article>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function EmphasizedText({ text, emphasis }: ProjectPoint) {
  if (!emphasis || !text.includes(emphasis)) return <>{text}</>
  const start = text.indexOf(emphasis)
  return <>{text.slice(0, start)}<strong>{emphasis}</strong>{text.slice(start + emphasis.length)}</>
}

function PointList({ points, nested = false }: { points: ProjectPoint[]; nested?: boolean }) {
  return (
    <ul className={nested ? styles.subpoints : styles.points}>
      {points.map((point) => (
        <li key={point.text}>
          <EmphasizedText {...point} />
          {point.children && <PointList points={point.children} nested />}
        </li>
      ))}
    </ul>
  )
}

export function ProjectScene({ project }: { project: FeaturedProject }) {
  return (
    <article className={styles.project} id={project.id} data-project={project.id} aria-labelledby={`${project.id}-title`}>
      <div className={styles.information}>
        <div className={styles.identity}>
          <h3 id={`${project.id}-title`}>{project.name}</h3>
          <p className={styles.metadata}><span>{project.eyebrow}</span><span>{project.period}</span></p>
        </div>
        <div className={styles.description}>
          <p className={styles.introduction}>{project.headline}</p>
          {project.links.map((link) => <a className={styles.serviceLink} key={link.href} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>{link.label}</a>)}
        </div>
      </div>
      <div className={styles.coverFrame}>
        <div className={styles.cover}>
          <div className={styles.screens}>
            {project.media.map((media) => (
              <figure key={media.src} className={`${styles.screen} ${media.featured ? styles.mainScreen : ''}`}>
                {media.type === 'image' ? (
                  <a href={media.src} target="_blank" rel="noreferrer" aria-label={`${media.alt}, 원본 화면 열기`}>
                    <MediaContent media={media} />
                  </a>
                ) : <MediaContent media={media} />}
              </figure>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.contribution}>
        {project.contribution.map((item) => (
          <section className={styles.case} key={item.title} aria-label={item.title}>
            <h4>{item.title}</h4>
            <PointList points={item.points} />
          </section>
        ))}
      </div>
      <p className={styles.technologies}>{project.technologies.join(' / ')}</p>

      {project.highlightGroups.some((group) => group.highlights.length > 0) && <details className={styles.disclosure}>
        <summary>
          <span className={styles.closedLabel}>기술 설계와 트러블슈팅 상세</span>
          <span className={styles.openLabel}>기술 설계와 트러블슈팅 상세 접기</span>
          <Icon name="expand" />
        </summary>
        <WorkDetails project={project} />
      </details>}
    </article>
  )
}
