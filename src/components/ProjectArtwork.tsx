import styles from './ProjectArtwork.module.css'

type ProjectArtworkProps = {
  src: string
  alt: string
}

export function ProjectArtwork({ src, alt }: ProjectArtworkProps) {
  return (
    <div className={styles.artwork}>
      <img src={src} alt={alt} width="900" height="506" loading="lazy" decoding="async" />
    </div>
  )
}
