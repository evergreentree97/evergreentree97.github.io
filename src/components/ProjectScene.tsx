import { useEffect, useRef, useState } from 'react'
import type { FeaturedProject, ProjectVideo } from '../data/projects'
import { PixelIcon } from './PixelIcon'
import styles from './ProjectScene.module.css'

function VideoMedia({ media }: { media: ProjectVideo }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const hasAutoPlayedRef = useRef(false)
  const hasEndedRef = useRef(false)
  const isInViewRef = useRef(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current

    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const playOnce = () => {
      if (!isInViewRef.current || hasAutoPlayedRef.current) {
        return
      }

      hasAutoPlayedRef.current = true
      hasEndedRef.current = false
      void video.play().catch(() => {
        hasAutoPlayedRef.current = false
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting

        if (entry.isIntersecting) {
          playOnce()
        } else if (!entry.isIntersecting && !video.paused) {
          video.pause()
        }
      },
      { threshold: 0.55 },
    )

    video.addEventListener('canplay', playOnce)
    observer.observe(video)
    return () => {
      video.removeEventListener('canplay', playOnce)
      observer.disconnect()
    }
  }, [])

  const togglePlayback = () => {
    const video = videoRef.current

    if (!video) {
      return
    }

    if (video.paused) {
      if (hasEndedRef.current) {
        video.currentTime = 0
        hasEndedRef.current = false
      }
      void video.play()
    } else {
      video.pause()
    }
  }

  const handleEnded = () => {
    const video = videoRef.current

    if (!video) {
      return
    }

    hasEndedRef.current = true
    video.currentTime = media.posterTime ?? 0
    setIsPlaying(false)
  }

  return (
    <figure className={`${styles.mediaItem} ${media.caption ? styles.mediaItemWithCaption : ''}`}>
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
          onEnded={handleEnded}
        >
          <source src={media.src} type="video/mp4" />
          영상 재생을 지원하지 않는 브라우저입니다.
        </video>
        <button
          className={styles.videoAction}
          type="button"
          aria-label={`${media.alt} ${isPlaying ? '일시 정지' : '재생'}`}
          aria-pressed={isPlaying}
          onClick={togglePlayback}
        >
          {isPlaying ? '일시 정지' : '재생'}
        </button>
      </div>
      {media.caption && <figcaption className={styles.mediaCaption}>{media.caption}</figcaption>}
    </figure>
  )
}

export function ProjectScene({ project }: { project: FeaturedProject }) {
  const sceneRef = useRef<HTMLElement>(null)
  const serviceLink = project.links[0]
  const mediaGridClass = project.media.length === 2
    ? styles.mediaGridTwo
    : project.media.length === 3
      ? styles.mediaGridThree
      : styles.mediaGridDefault

  useEffect(() => {
    const scene = sceneRef.current

    if (!scene) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      scene.dataset.visible = 'true'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        scene.dataset.visible = 'true'
        observer.disconnect()
      },
      { rootMargin: '-8% 0px -8% 0px', threshold: 0.06 },
    )

    observer.observe(scene)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sceneRef}
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

        </div>

        {project.media.length > 0 && (
          <div className={styles.mediaMotion}>
            <div className={`${styles.mediaGrid} ${mediaGridClass}`} aria-label={`${project.name} 주요 화면과 영상`}>
              {project.media.map((media) => {
                if (media.type === 'video') {
                  return <VideoMedia key={media.src} media={media} />
                }

                return (
                  <figure
                    className={`${styles.mediaItem} ${media.caption ? styles.mediaItemWithCaption : ''}`}
                    key={media.src}
                  >
                    <img
                      src={media.src}
                      alt={media.alt}
                      loading="lazy"
                      width={media.width}
                      height={media.height}
                    />
                    {media.caption && <figcaption className={styles.mediaCaption}>{media.caption}</figcaption>}
                  </figure>
                )
              })}
            </div>
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
            <span className={styles.internalCase}>사내 프로젝트</span>
          )}
        </div>
      </div>
    </section>
  )
}
