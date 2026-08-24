export type SkillGroup = {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Core Android',
    skills: ['Kotlin', 'Jetpack Compose', 'Coroutines / Flow', 'Multi Module'],
  },
  {
    label: 'Product & Platform',
    skills: ['Sendbird', 'Media3', 'Room / AlarmManager', 'Android CI/CD', 'Play Billing'],
  },
  {
    label: 'AI Product',
    skills: ['Python / PyTorch', 'LoRA / SFT', 'LLM Evaluation', 'vLLM'],
  },
  {
    label: 'Tools & Automation',
    skills: ['Claude Code / Codex', 'GitHub Actions', 'KSP', 'React / TypeScript'],
  },
]
