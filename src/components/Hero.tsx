import { profile } from '../data/profile'
import { Icon } from './Icon'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.opening}>
          <div className={styles.identity}>
            <h1 id="hero-title" className={styles.headline}>최상록</h1>
            <p className={styles.role}>Android Developer</p>
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

        <div className={styles.details}>
          <p>3년 차 안드로이드 개발자입니다. 신규 프로덕트의 초기 아키텍처 설계부터 배포와 운영을 주도했으며, 런타임 최적화와 메모리 누수 해결로 앱 안정성을 높여왔습니다.</p>
          <p>LLM 파인튜닝과 서빙 경험을 바탕으로 AI 기능을 직접 구현하고, Agent 기반 개발과 검증 파이프라인을 구축해 일하는 방식을 개선하고 있습니다.</p>
        </div>
      </div>
    </section>
  )
}
