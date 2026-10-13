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
            <div className={styles.identity}>
              <h3>{activity.organization}</h3>
              <p className={styles.meta}>{activity.period}<span>{activity.role}</span></p>
            </div>
            <div className={styles.copy}>
              <p>{activity.summary}</p>
              {activity.highlights.length > 0 && (
                <ul>{activity.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
