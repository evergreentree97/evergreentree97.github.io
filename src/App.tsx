import { useEffect, useRef } from 'react'
import { AboutMe } from './components/AboutMe'
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
import { Skills } from './components/Skills'
import { TastePanel } from './components/TastePanel'
import styles from './App.module.css'

export default function App() {
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const main = mainRef.current
    if (!main) return

    const about = main.querySelector('#about')
    const experience = main.querySelector('#experience')
    const targets = [about, experience].filter((element): element is Element => element !== null)
    let visibleCount = 0
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleCount += entry.isIntersecting ? 1 : -1
        }
        main.dataset.zone = visibleCount > 0 ? 'intro' : 'default'
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
          <AboutMe />
          <Experience />
        </div>
        <Projects />
        <div className={styles.contentShell}>
          <SideProjects />
          <div className={styles.secondaryGrid}>
            <MoreWork />
            <Activities />
          </div>
          <Skills />
          <HowIWork />
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
