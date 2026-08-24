import { profile } from '../data/profile'
import { PixelIcon, type PixelIconName } from './PixelIcon'
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
    value: '최상록',
    href: profile.linkedinUrl,
    icon: 'linkedin',
    external: true,
  },
]

export function Contact() {
  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title">
      <SectionTitle id="contact-title" title="연락처" />
      <div className={styles.layout}>
        <div className={styles.workbenchReturn}>
          <picture>
            <source srcSet="/images/hero-product-developer-hand-hidden-480.avif" type="image/avif" />
            <img
              src="/images/hero-product-developer-hand-hidden.jpg"
              alt="창가 책상에서 노트북으로 작업하는 개발자의 도트 일러스트"
              width="480"
              height="320"
              loading="lazy"
            />
          </picture>
        </div>
        <div className={styles.contactBody}>
          <h3>채용과 협업 제안 모두 받습니다.</h3>
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
      </div>
    </section>
  )
}
