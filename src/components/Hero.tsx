import { useRef, useState, type KeyboardEvent } from 'react'
import { featuredProjects } from '../data/projects'
import { PixelIcon } from './PixelIcon'
import styles from './Hero.module.css'

const exhibitions = [
  { name: 'Vuddy', title: 'VUDDY', note: '신규 앱의 구조 설계부터 출시 후 운영까지', project: featuredProjects[0], theme: 'vuddy' },
  { name: 'AI 캐릭터', title: 'CHARACTER AI', note: '모델 개발에서 Android 채팅과 결제까지', project: featuredProjects[1], theme: 'ai' },
  { name: 'Momentica', title: 'MOMENTICA', note: '3D 인터랙션과 백그라운드 알람', project: featuredProjects[2], theme: 'momentica' },
] as const

export function Hero() {
  const [selected, setSelected] = useState(0)
  const buttons = useRef<(HTMLButtonElement | null)[]>([])
  const exhibit = exhibitions[selected]
  const media = exhibit.project.media.filter(item => item.type === 'image')
  const keyboardSelect = (event: KeyboardEvent<HTMLButtonElement>) => {
    let next: number
    if (event.key === 'ArrowRight') next = (selected + 1) % exhibitions.length
    else if (event.key === 'ArrowLeft') next = (selected + exhibitions.length - 1) % exhibitions.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = exhibitions.length - 1
    else return
    event.preventDefault()
    setSelected(next)
    buttons.current[next]?.focus()
  }

  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.introduction}>
        <h1 id="hero-title"><span>제품을 만드는</span><span>엔지니어입니다</span></h1>
        <div className={styles.introCopy}>
          <p>Android 앱의 초기 구조와 운영,<br />AI 모델과 개발 과정의 검증을 맡습니다.</p>
          <details className={styles.bio}>
            <summary>맡아온 일 <PixelIcon name="arrow" /></summary>
            <div>
              <p>Vuddy의 신규 Android 앱 구조와 공통 기반을 설계하고 핵심 기능 개발, QA 배포와 출시 후 운영을 담당했습니다.</p>
              <p>사내 AI TF에서 캐릭터 대화 모델을 개발한 뒤 해당 모델을 사용하는 Android 채팅 기능을 주도했습니다.</p>
            </div>
          </details>
        </div>
      </div>
      <div className={styles.exhibition} data-project={exhibit.theme}>
        <div className={styles.stage} id="exhibition-panel" role="tabpanel" aria-labelledby={`exhibition-tab-${selected}`} tabIndex={0}>
          <div className={styles.stageContent} key={exhibit.theme}>
            <p className={styles.projectName} aria-hidden="true">{exhibit.title}</p>
            <div className={`${styles.screens} ${media.length === 2 ? styles.twoScreens : ''}`}>
              {media.map((item, index) => (
                <figure className={`${styles.screen} ${item.featured ? styles.featured : ''}`} key={item.src}>
                  <img src={item.src} alt={item.alt} width={item.width} height={item.height} loading={selected === 0 ? 'eager' : 'lazy'} fetchPriority={selected === 0 && item.featured ? 'high' : 'auto'} />
                  <figcaption>{item.caption?.split(' / ')[0]}</figcaption>
                  <span className={styles.screenIndex} aria-hidden="true">{index === 0 ? 'VIEW' : ''}</span>
                </figure>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.exhibitFooter}>
          <div className={styles.projectTabs} role="tablist" aria-label="대표 프로젝트 선택">
            {exhibitions.map((item, index) => <button type="button" role="tab" id={`exhibition-tab-${index}`} key={item.theme} ref={el => { buttons.current[index] = el }} aria-controls="exhibition-panel" aria-selected={selected === index} tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={keyboardSelect}>{item.name}</button>)}
          </div>
          <a className={styles.readCase} href={`#${exhibit.project.id}`}>담당한 구현 보기 <PixelIcon name="arrow" /></a>
        </div>
      </div>
      <div className={styles.exhibitCaption} aria-live="polite"><span>{exhibit.note}</span><span>{exhibit.project.eyebrow}</span></div>
    </section>
  )
}
