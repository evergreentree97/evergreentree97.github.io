import { About } from './components/About'
import { Activities } from './components/Activities'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowIWork } from './components/HowIWork'
import { MoreWork } from './components/MoreWork'
import { PixelDivider } from './components/PixelDivider'
import { ProofStrip } from './components/ProofStrip'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { TastePanel } from './components/TastePanel'
import styles from './App.module.css'

export default function App() {
  return (
    <>
      <a className="skipLink" href="#main-content">본문으로 건너뛰기</a>
      <Header />
      <main className={styles.shell} id="main-content">
        <Hero />
        <PixelDivider />
        <ProofStrip />
        <div className={styles.aboutSkills}>
          <About />
          <Skills />
        </div>
        <HowIWork />
        <Projects />
        <Experience />
        <Activities />
        <MoreWork />
        <TastePanel />
        <Contact />
      </main>
      <div className={styles.footerShell}>
        <Footer />
      </div>
    </>
  )
}
