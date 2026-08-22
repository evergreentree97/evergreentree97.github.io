import { aboutPrinciples } from '../data/about'
import { SectionTitle } from './SectionTitle'
import styles from './AboutMe.module.css'

export function AboutMe() {
  return (
    <section className={styles.section} id="about" aria-labelledby="about-title">
      <SectionTitle id="about-title" title="소개" />
      <div className={styles.grid}>
        {aboutPrinciples.map((principle) => (
          <article key={principle.title}>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
