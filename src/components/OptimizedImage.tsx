import type { ImgHTMLAttributes } from 'react'
import imageSources from '../data/imageSources.json'
import styles from './OptimizedImage.module.css'

export function OptimizedImage({ src, ...props }: ImgHTMLAttributes<HTMLImageElement> & { src: string }) {
  const optimized = (imageSources as Record<string, string>)[src]
  if (!optimized) return <img src={src} {...props} />
  return (
    <picture className={styles.picture}>
      <source type="image/webp" srcSet={optimized} />
      <img src={src} {...props} />
    </picture>
  )
}
