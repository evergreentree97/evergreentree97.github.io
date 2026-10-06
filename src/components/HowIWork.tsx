import { workEvidence } from '../data/workEvidence'
import { SectionTitle } from './SectionTitle'
import styles from './HowIWork.module.css'

export function HowIWork() {
  return <section className={styles.section} id="how-i-work" aria-labelledby="how-i-work-title">
    <SectionTitle id="how-i-work-title" title="개발과 검증 기록" />
    <p className={styles.intro}>AI에 반복 작업을 맡기고 코드와 동작을 직접 확인합니다.</p>
    <ul className={styles.evidence}>
      {workEvidence.filter(item => !('project' in item)).map(item => <li key={item.title}><h3>{item.title}</h3><p>{item.copy}</p></li>)}
    </ul>
  </section>
}
