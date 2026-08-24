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
            <div className={styles.meta}>
              <span>{activity.period}</span>
              <small>{activity.role}</small>
            </div>
            <h3>{activity.organization}</h3>
            <p>{activity.summary}</p>
            <ul>
              {activity.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
