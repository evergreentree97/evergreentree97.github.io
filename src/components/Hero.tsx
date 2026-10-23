import { useEffect, useRef } from 'react'
import { profile } from '../data/profile'
import { featuredProjects } from '../data/projects'
import { Icon } from './Icon'
import { OptimizedImage } from './OptimizedImage'
import { attachHeroMotion } from '../lib/heroMotion'
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

    return attachHeroMotion(stage, plane)
  }, [])

  return (
    <div className={styles.stage} ref={stageRef}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.plane} ref={planeRef}>
        {screens.map(({ project, media }, index) => (
          <div className={`${styles.screenSlot} ${styles[project.id]}`} key={project.id}>
            <a className={styles.screen} href={`#${project.id}`} aria-label={project.name}>
              <OptimizedImage
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
            <p className={styles.role}>Software Developer</p>
          </div>
          <div className={styles.details}>
            <p className={styles.lead}>모바일 엔지니어링 역량을 기반으로 AI 기술과 개발 프로세스 자동화를 내재화해 나가는 3년 차 안드로이드 개발자입니다.</p>
            <p>확장성 높은 멀티 모듈 아키텍처를 설계하고 메모리 최적화와 런타임 성능 개선을 통해 높은 서비스 신뢰성을 확보해 왔습니다.</p>
            <p>이에 더해 LLM 파인튜닝 및 서빙 환경을 구축하여 서비스 영역을 AI 도메인으로 확장했으며, AI Agent를 활용한 개발, 테스트 자동화 파이프라인으로 배포 품질과 개발 효율을 개선하고 있습니다.</p>
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
