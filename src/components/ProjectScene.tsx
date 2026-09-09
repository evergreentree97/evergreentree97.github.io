import { useEffect, useRef, useState } from 'react'
import type { FeaturedProject, ProjectMedia, ProjectVideo } from '../data/projects'
import { PixelIcon } from './PixelIcon'
import styles from './ProjectScene.module.css'

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
  return <img src={media.src} alt={media.alt} loading="lazy" width={media.width} height={media.height} />
}

function HighlightText({ text, grouped }: { text: string; grouped: boolean }) {
  const separator = text.indexOf(':')
  if (separator < 0) return <p>{text}</p>
  const Heading = grouped ? 'h4' : 'h3'

  return (
    <>
      <Heading>{text.slice(0, separator)}</Heading>
      <p>{text.slice(separator + 1).trimStart()}</p>
    </>
  )
}

export function ProjectScene({ project }: { project: FeaturedProject }) {
  const mediaRef = useRef<HTMLDivElement>(null)
  const initialMedia = Math.max(0, project.media.findIndex((media) => media.featured))
  const [selectedMedia, setSelectedMedia] = useState(initialMedia)
  const serviceLink = project.links[0]
  const activeMedia = project.media[selectedMedia]

  useEffect(() => {
    const media = mediaRef.current
    if (!media || !('ResizeObserver' in window)) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      const canStick = window.innerWidth >= 1024 && window.innerHeight >= 800 && !motion.matches && media.offsetHeight <= window.innerHeight - 112
      media.dataset.sticky = String(canStick)
    }
    const observer = new ResizeObserver(update)
    observer.observe(media)
    window.addEventListener('resize', update)
    motion.addEventListener('change', update)
    update()
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', update)
      motion.removeEventListener('change', update)
    }
  }, [])

  return (
    <section className={styles.scene} id={project.id} aria-labelledby={`${project.id}-title`}>
      <div className={styles.sceneInner}>
        <div className={styles.copyColumn}>
          <div className={styles.projectHeading}>
            <span>{project.eyebrow}</span>
            <h2 id={`${project.id}-title`}>{project.name}</h2>
            <p>{project.headline}</p>
          </div>
          {project.highlightGroups.map((group, index) => (
            <div key={group.title ?? index} className={group.title ? styles.highlightGroup : undefined}>
              {group.title && <h3 className={styles.groupTitle}>{group.title}</h3>}
              <ul className={styles.highlightList} aria-label={`${project.name} ${group.title ?? '담당 업무'}`}>
                {group.highlights.map((highlight) => (
                  <li key={highlight}><HighlightText text={highlight} grouped={Boolean(group.title)} /></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {activeMedia && (
          <div ref={mediaRef} className={styles.mediaColumn}>
            <div className={styles.mediaSelector} aria-label={`${project.name} 화면 선택`}>
              {project.media.map((media, index) => (
                <button key={media.src} type="button" aria-pressed={selectedMedia === index} aria-controls={`${project.id}-media`} onClick={() => setSelectedMedia(index)}>
                  {media.caption?.split(' / ')[0] ?? `화면 ${index + 1}`}
                </button>
              ))}
            </div>
            <figure id={`${project.id}-media`} className={`${styles.mediaItem} ${activeMedia.width > activeMedia.height ? styles.landscape : ''}`} aria-live="polite">
              <div className={styles.mediaStage}><MediaContent media={activeMedia} /></div>
              {activeMedia.caption && <figcaption>{activeMedia.caption}</figcaption>}
            </figure>
          </div>
        )}

        <div className={styles.projectMeta}>
          <ul aria-label={`${project.name} 기술`}>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
          {serviceLink ? (
            <a href={serviceLink.href} target="_blank" rel="noreferrer">{serviceLink.label} <PixelIcon name="external" /></a>
          ) : <span className={styles.internalCase}>사내 프로젝트</span>}
        </div>
      </div>
    </section>
  )
}
