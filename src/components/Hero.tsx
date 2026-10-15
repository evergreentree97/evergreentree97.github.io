import { useEffect, useRef } from 'react'
import { profile } from '../data/profile'
import { featuredProjects } from '../data/projects'
import { Icon } from './Icon'
import styles from './Hero.module.css'

const screenOrder = ['momentica', 'vuddy', 'model-evaluation'] as const
const screens = screenOrder.flatMap((id) => {
  const project = featuredProjects.find((item) => item.id === id)
  const media = project?.media.find((item) => item.type === 'image' && item.featured)
  return project && media ? [{ project, media }] : []
})

function ProductStage() {
  const stageRef = useRef<HTMLDivElement>(null)
  const planeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    const plane = planeRef.current
    if (!stage || !plane) return

    const motion = window.matchMedia('(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine) and (min-width: 901px)')
    let frame = 0
    let currentX = 0
    let currentY = 0
    let targetX = 0
    let targetY = 0

    const render = () => {
      currentX += (targetX - currentX) * 0.09
      currentY += (targetY - currentY) * 0.09
      plane.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`
      if (Math.abs(targetX - currentX) + Math.abs(targetY - currentY) > 0.015) {
        frame = requestAnimationFrame(render)
      } else {
        frame = 0
      }
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render)
    }

    const move = (event: PointerEvent) => {
      if (!motion.matches || event.pointerType !== 'mouse') return
      const bounds = stage.getBoundingClientRect()
      targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12
      targetY = -((event.clientY - bounds.top) / bounds.height - 0.5) * 8
      schedule()
    }

    const reset = () => {
      targetX = 0
      targetY = 0
      schedule()
    }

    const stop = () => {
      cancelAnimationFrame(frame)
      frame = 0
      currentX = currentY = targetX = targetY = 0
      plane.style.removeProperty('transform')
    }

    stage.addEventListener('pointermove', move)
    stage.addEventListener('pointerleave', reset)
    motion.addEventListener('change', stop)

    return () => {
      stop()
      stage.removeEventListener('pointermove', move)
      stage.removeEventListener('pointerleave', reset)
      motion.removeEventListener('change', stop)
    }
  }, [])

  return (
    <div className={styles.stage} ref={stageRef}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.plane} ref={planeRef}>
        {screens.map(({ project, media }, index) => (
          <div className={`${styles.screenSlot} ${styles[project.id]}`} key={project.id}>
            <a className={styles.screen} href={`#${project.id}`} aria-label={project.name}>
              <img
                src={media.src}
                alt={media.alt}
                width={media.width}
                height={media.height}
                fetchPriority={index === 1 ? 'high' : 'low'}
                decoding="async"
                draggable={false}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <div className={styles.identity}>
            <h1 id="hero-title" className={styles.headline}>최상록</h1>
            <p className={styles.role}>Android Developer</p>
          </div>
          <div className={styles.details}>
            <p>3년 차 안드로이드 개발자입니다. 신규 프로덕트의 초기 아키텍처 설계부터 배포와 운영을 주도했으며, 런타임 최적화와 메모리 누수 해결로 앱 안정성을 높여왔습니다.</p>
            <p>LLM 파인튜닝과 서빙 경험을 바탕으로 AI 기능을 직접 구현하고, Agent 기반 개발과 검증 파이프라인을 구축해 일하는 방식을 개선하고 있습니다.</p>
          </div>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href="#projects">프로젝트 보기</a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">
              <Icon name="github" /> GitHub
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
              <Icon name="linkedin" /> LinkedIn
            </a>
          </div>
        </div>

        <ProductStage />
      </div>
    </section>
  )
}
