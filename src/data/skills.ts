export type SkillGroup = {
  label: string
  skills: string[]
}

// TODO: 기술 목록은 실제 제품에서 연결해 본 범위에 맞춰 갱신하세요.
export const skillGroups: SkillGroup[] = [
  {
    label: 'Core Android',
    skills: ['Kotlin', 'Jetpack Compose', 'Coroutines / Flow', 'Clean Architecture', 'Multi Module'],
  },
  {
    label: 'Product & Platform',
    skills: ['Android CI/CD', 'Play Billing', 'Sendbird', 'Media3', 'Room / AlarmManager'],
  },
  {
    label: 'AI Product',
    skills: ['LLM Evaluation', 'LoRA / SFT', 'vLLM', 'Python / PyTorch'],
  },
  {
    label: 'Tools & Automation',
    skills: ['Claude Code / Codex', 'GitHub Actions', 'KSP', 'React / TypeScript'],
  },
]
