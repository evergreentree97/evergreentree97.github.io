import styles from './ProjectArtwork.module.css'

type ArtworkKind = 'vuddy' | 'llm' | 'momentica'

type ProjectArtworkProps = {
  kind: ArtworkKind
  alt: string
  href?: string
  linkLabel?: string
  external?: boolean
}

function VuddyVignette() {
  return (
    <g>
      <path className={styles.line} d="M62 92H112M208 92H258M160 116V136" />
      <rect className={styles.paper} x="104" y="66" width="112" height="54" />
      <rect className={styles.ink} x="116" y="78" width="28" height="8" />
      <rect className={styles.mid} x="150" y="78" width="52" height="8" />
      <rect className={styles.muted} x="116" y="94" width="50" height="8" />
      <rect className={styles.amber} x="174" y="94" width="28" height="8" />
      <rect className={styles.ink} x="36" y="70" width="24" height="24" />
      <rect className={styles.ink} x="28" y="98" width="40" height="34" />
      <rect className={styles.ink} x="260" y="70" width="24" height="24" />
      <rect className={styles.ink} x="252" y="98" width="40" height="34" />
      <rect className={styles.ink} x="148" y="136" width="24" height="20" />
      <rect className={styles.mid} x="140" y="160" width="40" height="16" />
      <rect className={styles.amber} x="156" y="52" width="8" height="8" />
    </g>
  )
}

function LlmVignette() {
  return (
    <g>
      <rect className={styles.ink} x="28" y="56" width="104" height="88" />
      <rect className={styles.paper} x="40" y="68" width="80" height="56" />
      <rect className={styles.ink} x="188" y="56" width="104" height="88" />
      <rect className={styles.paper} x="200" y="68" width="80" height="56" />
      <rect className={styles.mid} x="48" y="78" width="22" height="8" />
      <rect className={styles.muted} x="76" y="78" width="34" height="8" />
      <rect className={styles.amber} x="48" y="94" width="38" height="8" />
      <rect className={styles.ink} x="92" y="94" width="18" height="8" />
      <rect className={styles.mid} x="208" y="78" width="34" height="8" />
      <rect className={styles.muted} x="248" y="78" width="22" height="8" />
      <rect className={styles.amber} x="208" y="94" width="50" height="8" />
      <rect className={styles.ink} x="264" y="94" width="6" height="8" />
      <rect className={styles.ink} x="48" y="110" width="14" height="6" />
      <rect className={styles.mid} x="68" y="110" width="42" height="6" />
      <rect className={styles.mid} x="208" y="110" width="54" height="6" />
      <rect className={styles.amber} x="268" y="110" width="2" height="6" />
      <rect className={styles.muted} x="146" y="42" width="28" height="12" />
      <rect className={styles.paper} x="146" y="58" width="28" height="12" />
      <rect className={styles.muted} x="146" y="74" width="28" height="12" />
      <path className={styles.line} d="M160 88V110M160 110H132M160 110H188" />
      <rect className={styles.ink} x="68" y="148" width="24" height="8" />
      <rect className={styles.ink} x="228" y="148" width="24" height="8" />
    </g>
  )
}

function MomenticaVignette() {
  return (
    <g>
      <rect className={styles.ink} x="26" y="50" width="64" height="112" />
      <rect className={styles.paper} x="36" y="62" width="44" height="72" />
      <rect className={styles.amber} x="48" y="76" width="20" height="20" />
      <rect className={styles.mid} x="44" y="108" width="28" height="8" />
      <rect className={styles.muted} x="52" y="144" width="12" height="6" />
      <path className={styles.line} d="M96 108H128M192 108H226" />
      <rect className={styles.ink} x="126" y="90" width="68" height="52" />
      <rect className={styles.mid} x="138" y="76" width="44" height="18" />
      <rect className={styles.paper} x="138" y="104" width="44" height="22" />
      <path className={styles.ink} d="M228 56H294V158H228z" />
      <path className={styles.paper} d="M240 70H282V144H240z" />
      <rect className={styles.mid} x="242" y="118" width="14" height="14" />
      <rect className={styles.amber} x="264" y="90" width="14" height="14" />
      <rect className={styles.ink} x="222" y="160" width="36" height="8" />
      <rect className={styles.ink} x="268" y="160" width="30" height="8" />
    </g>
  )
}

export function ProjectArtwork({
  kind,
  alt,
  href,
  linkLabel = '서비스 보기',
  external = false,
}: ProjectArtworkProps) {
  const vignette = (
    <svg
      className={styles.vignette}
      viewBox="0 0 320 210"
      role={href ? undefined : 'img'}
      aria-label={href ? undefined : alt}
      aria-hidden={href ? true : undefined}
      shapeRendering="crispEdges"
    >
      {kind === 'vuddy' ? <VuddyVignette /> : null}
      {kind === 'llm' ? <LlmVignette /> : null}
      {kind === 'momentica' ? <MomenticaVignette /> : null}
    </svg>
  )

  return (
    <div className={styles.artwork}>
      {href ? (
        <a
          className={styles.artworkLink}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer' : undefined}
          aria-label={`${linkLabel}: ${alt}`}
        >
          {vignette}
        </a>
      ) : (
        vignette
      )}
    </div>
  )
}
