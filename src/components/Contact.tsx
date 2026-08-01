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
    value: 'Connect on LinkedIn',
    href: profile.linkedinUrl,
    icon: 'linkedin',
    external: true,
  },
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: 'mail',
  },
  {
    label: 'Career Log',
    value: 'View experience',
    href: profile.careerUrl,
    icon: 'resume',
  },
]

export function Contact() {
  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title">
      <Reveal>
        <SectionTitle id="contact-title" index="08" eyebrow="OPEN CHANNEL" title="Let's Connect" />
        <div className={styles.layout}>
          <div>
            <h3>Android와 AI 제품을 만드는 이야기를 나누고 싶습니다.</h3>
            <p>
              제품 개발, LLM 평가, 개발 도구에 관한 대화라면 편하게 연락해 주세요.
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
