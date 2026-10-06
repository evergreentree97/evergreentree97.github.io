import { Activities } from './components/Activities'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowIWork } from './components/HowIWork'
import { MoreWork } from './components/MoreWork'
import { Projects } from './components/Projects'
import { SideProjects } from './components/SideProjects'
import styles from './App.module.css'

export default function App() {
  return <>
    <a className="skipLink" href="#main-content">본문으로 건너뛰기</a>
    <Header />
    <main id="main-content">
      <Hero />
      <Projects />
      <div className={styles.contentShell}>
        <HowIWork />
        <Experience />
        <SideProjects />
        <div className={styles.secondaryGrid}><MoreWork /><Activities /></div>
        <Contact />
      </div>
    </main>
    <div className={styles.contentShell}><Footer /></div>
  </>
}
