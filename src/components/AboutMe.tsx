import { aboutParagraphs } from '../data/about'
import { SectionTitle } from './SectionTitle'
import styles from './AboutMe.module.css'

export function AboutMe() {
  return (
    <section className={styles.section} id="about" aria-labelledby="about-title">
      <SectionTitle id="about-title" title="소개" />
      <div className={styles.body}>
        <p className={styles.lead}>{aboutParagraphs[0]}</p>
        <div className={styles.rest}>
          {aboutParagraphs.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
