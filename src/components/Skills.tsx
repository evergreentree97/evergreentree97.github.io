import { skillGroups } from '../data/skills'
import { SectionTitle } from './SectionTitle'
import styles from './Skills.module.css'

export function Skills() {
  return (
    <section className={styles.skills} id="skills" aria-labelledby="skills-title">
      <SectionTitle id="skills-title" title="기술" />
      <div className={styles.groups}>
        {skillGroups.map((group) => (
          <section className={styles.group} key={group.label} aria-labelledby={`skill-${group.label}`}>
            <div className={styles.groupHeading}>
              <h3 id={`skill-${group.label}`}>{group.label}</h3>
              <p>{group.description}</p>
            </div>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}
