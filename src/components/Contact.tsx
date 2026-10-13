import { profile } from '../data/profile'
import { Icon, type IconName } from './Icon'
import { SectionTitle } from './SectionTitle'
import styles from './Contact.module.css'

const contactLinks: {
  label: string
  value: string
  href: string
  icon: IconName
  external?: boolean
}[] = [
  {
    label: 'GitHub',
    value: '@EvergreenTree97',
    href: profile.githubUrl,
    icon: 'github',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: '최상록',
    href: profile.linkedinUrl,
    icon: 'linkedin',
    external: true,
  },
]

export function Contact() {
  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title">
      <div className={styles.layout}>
        <SectionTitle id="contact-title" title="연락처" />
        <div className={styles.links}>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              aria-label={`${link.label} ${link.value}`}
            >
              <Icon name={link.icon} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
