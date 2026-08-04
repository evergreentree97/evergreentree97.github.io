export type SkillGroup = {
  label: string
  description: string
  skills: string[]
}

// TODO: 기술 목록은 실제 제품에서 연결해 본 범위에 맞춰 갱신하세요.
export const skillGroups: SkillGroup[] = [
  {
    label: 'Core Android',
    description: '앱 구조, UI와 비동기 상태 관리',
    skills: ['Kotlin', 'Jetpack Compose', 'Coroutines / Flow', 'Clean Architecture', 'Multi Module'],
  },
  {
    label: 'Product & Platform',
    description: '결제, 메시징, 미디어와 출시 자동화',
    skills: ['Android CI/CD', 'Play Billing', 'Sendbird', 'Media3', 'Room / AlarmManager'],
  },
  {
    label: 'AI Product',
    description: '학습 데이터 정제, 모델 비교와 서빙',
    skills: ['LLM Evaluation', 'LoRA / SFT', 'vLLM', 'Python / PyTorch'],
  },
  {
    label: 'Tools & Automation',
    description: '개발 도구와 자동화',
    skills: ['Claude Code / Codex', 'GitHub Actions', 'KSP', 'React / TypeScript'],
  },
]
