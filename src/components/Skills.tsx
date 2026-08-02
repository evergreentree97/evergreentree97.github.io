import { skillGroups } from '../data/skills'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './Skills.module.css'

export function Skills() {
  return (
    <section className={styles.skills} id="skills" aria-labelledby="skills-title">
      <Reveal>
        <SectionTitle id="skills-title" index="02" eyebrow="TOOLKIT" title="기술" />
        <p className={styles.note}>제품에서 사용한 기술을 분야별로 묶었습니다.</p>
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
      </Reveal>
    </section>
  )
}
