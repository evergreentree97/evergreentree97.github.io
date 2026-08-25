import { useEffect, useRef } from 'react'
import { Activities } from './components/Activities'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowIWork } from './components/HowIWork'
import { MoreWork } from './components/MoreWork'
import { Projects } from './components/Projects'
import { SectionRail } from './components/SectionRail'
import { SideProjects } from './components/SideProjects'
import { TastePanel } from './components/TastePanel'
import styles from './App.module.css'

export default function App() {
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const main = mainRef.current
    if (!main) return

    const experience = main.querySelector('#experience')
    const targets = [experience].filter((element): element is Element => element !== null)
    const visible = new Set<Element>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target)
          else visible.delete(entry.target)
        }
        main.dataset.zone = visible.size > 0 ? 'intro' : 'default'
      },
      { rootMargin: '-15% 0px -15% 0px' },
    )
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skipLink" href="#main-content">본문으로 건너뛰기</a>
      <Header />
      <SectionRail />
      <main id="main-content" ref={mainRef} className={styles.main}>
        <Hero />
        <div className={styles.contentShell}>
          <Experience />
        </div>
        <Projects />
        <div className={styles.contentShell}>
          <HowIWork />
          <SideProjects />
          <div className={styles.secondaryGrid}>
            <MoreWork />
            <Activities />
          </div>
          <TastePanel />
          <Contact />
        </div>
      </main>
      <div className={styles.footerShell}>
        <Footer />
      </div>
    </>
  )
}
