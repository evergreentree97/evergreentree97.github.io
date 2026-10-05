import { featuredProjects } from '../data/projects'
import { profile } from '../data/profile'
import { PixelIcon } from './PixelIcon'
import styles from './Hero.module.css'

const workNames = ['Vuddy', 'AI 캐릭터', 'Momentica']
const workNotes = ['Android 앱 구조와 출시 후 운영', '대화 모델 학습, 채팅과 결제', '3D 포토카드와 영상 알람']

export function Hero() {
  const screen = featuredProjects[0].media.find(media => media.featured)
  const secondaryScreen = featuredProjects[0].media.find(media => media.type === 'image' && !media.featured)

  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.identity}>
        <h1 id="hero-title">Ricky<br /><span>Choi.</span></h1>
        <p className={styles.role}>{profile.name}<span>Android Developer</span></p>
        <div className={styles.introduction}>
          <p>Vuddy의 신규 Android 앱 구조와 공통 기반을 설계하고 핵심 기능 개발, QA 배포와 출시 후 운영을 담당했습니다.</p>
          <p>사내 AI TF에서 캐릭터 대화 모델을 개발한 뒤 해당 모델을 사용하는 Android 채팅 기능을 주도했습니다.</p>
        </div>
        <a className={styles.contactLink} href="#contact">GitHub와 LinkedIn <PixelIcon name="external" /></a>
      </div>
      <div className={styles.workPreview}>
        <div className={styles.previewImages}>
          {secondaryScreen?.type === 'image' && <img className={styles.secondaryScreen} src={secondaryScreen.src} alt={secondaryScreen.alt} width={secondaryScreen.width} height={secondaryScreen.height} />}
          {screen?.type === 'image' && <img className={styles.primaryScreen} src={screen.src} alt={screen.alt} width={screen.width} height={screen.height} fetchPriority="high" />}
          <a className={styles.screenLink} href="#vuddy">Vuddy 채팅 <PixelIcon name="arrow" /></a>
        </div>
        <div className={styles.workIndex} aria-label="대표 프로젝트">
          {featuredProjects.map((project, index) => <a href={`#${project.id}`} key={project.id}>
            <span className={styles.workName}>{workNames[index]}</span>
            <span className={styles.workNote}>{workNotes[index]}</span>
            <PixelIcon name="arrow" />
          </a>)}
        </div>
      </div>
    </section>
  )
}
