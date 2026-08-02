import { profile } from '../data/profile'
import { PixelIcon, type PixelIconName } from './PixelIcon'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './Contact.module.css'

const contactLinks: {
  label: string
  value: string
  href: string
  icon: PixelIconName
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
    value: 'LinkedIn 프로필',
    href: profile.linkedinUrl,
    icon: 'linkedin',
    external: true,
  },
  {
    label: '경력',
    value: '경력 보기',
    href: profile.careerUrl,
    icon: 'resume',
  },
]

export function Contact() {
  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title">
      <Reveal>
        <SectionTitle id="contact-title" index="08" eyebrow="CONTACT" title="연락처" />
        <div className={styles.layout}>
          <div>
            <h3>Android 개발자 채용이나 협업 제안은 아래 채널로 연락해 주세요.</h3>
            <p>
              프로젝트와 경력은 GitHub와 LinkedIn에서 볼 수 있습니다.
            </p>
          </div>
          <div className={styles.links}>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
              >
                <PixelIcon name={link.icon} />
                <span>
                  <small>{link.label}</small>
                  <strong>{link.value}</strong>
                </span>
                <PixelIcon name={link.external ? 'external' : 'arrow'} />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
