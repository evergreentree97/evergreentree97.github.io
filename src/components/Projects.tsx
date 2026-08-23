import { useEffect, useRef } from 'react'
import { featuredProjects } from '../data/projects'
import { ProjectScene } from './ProjectScene'
import styles from './Projects.module.css'

export function Projects() {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const scenes = Array.from(wrapper.querySelectorAll('section[id]'))
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            wrapper.dataset.scene = entry.target.id
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    scenes.forEach((scene) => observer.observe(scene))
    return () => observer.disconnect()
  }, [])

  return (
    <div id="projects" className={styles.wrapper} ref={wrapperRef}>
      {featuredProjects.map((project) => <ProjectScene key={project.id} project={project} />)}
    </div>
  )
}
