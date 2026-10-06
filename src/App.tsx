import { Activities } from './components/Activities'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowIWork } from './components/HowIWork'
import { MoreWork } from './components/MoreWork'
import { ProjectScene } from './components/ProjectScene'
import { featuredProjects } from './data/projects'
import { Projects } from './components/Projects'
import { SideProjects } from './components/SideProjects'
import styles from './App.module.css'

export default function App({ path = "/" }: { path?: string }) {
  const project = featuredProjects.find(item => path.replace(/\/$/, "") === `/projects/${item.id}`)
  return <>
    <a className="skipLink" href="#main-content">본문으로 건너뛰기</a>
    <Header detail={Boolean(project)} />
    <main id="main-content">
      {project ? <div id="top" className={styles.projectPage}>
        <div className={styles.contentShell}><a className={styles.backLink} href="/#projects">프로젝트 목록으로</a></div>
        <ProjectScene project={project} />
      </div> : <>
        <Hero />
        <Projects />
        <div className={styles.contentShell}>
          <Experience />
          <HowIWork />
          <details className={styles.additional}>
            <summary>사이드 프로젝트, 오픈소스와 활동 보기</summary>
            <SideProjects />
            <div className={styles.secondaryGrid}><MoreWork /><Activities /></div>
          </details>
          <Contact />
        </div>
      </>}

    </main>
    <div className={styles.contentShell}><Footer /></div>
  </>
}
