import { activities } from '../data/activities'
import { SectionTitle } from './SectionTitle'
import styles from './Activities.module.css'

export function Activities() {
  return (
    <section className={styles.section} id="activities" aria-labelledby="activities-title">
      <SectionTitle id="activities-title" title="대외 활동" />
      <div className={styles.grid}>
        {activities.map((activity) => (
          <article key={activity.organization}>
            <h3>{activity.organization}</h3>
            <p className={styles.meta}>{activity.period}</p>
            <p className={styles.summary}>{activity.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
