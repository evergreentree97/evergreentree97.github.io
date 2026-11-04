import type { ComponentType } from 'react'
import type { FeaturedProject } from '../../data/projects'

// Each demo loads in its own chunk, only when its cover nears the viewport.
export const demoLoaders: Record<FeaturedProject['id'], () => Promise<{ default: ComponentType }>> = {
  vuddy: () => import('./VuddyDemo'),
  'model-evaluation': () => import('./AiDemo'),
  momentica: () => import('./MomenticaDemo'),
}
