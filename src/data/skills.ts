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
    description: '출시와 운영에 필요한 제품 기능',
    skills: ['Android CI/CD', 'Play Billing', 'Sendbird', 'Media3', 'Room / AlarmManager'],
  },
  {
    label: 'AI Product',
    description: '데이터 정제, 평가와 모델 서빙',
    skills: ['LLM Evaluation', 'LoRA / SFT', 'vLLM', 'Python / PyTorch'],
  },
  {
    label: 'Delivery & AI Tools',
    description: '반복 작업 자동화와 내부 도구 개발',
    skills: ['GitHub Actions', 'Claude Code', 'Codex', 'MCP', 'React / TypeScript'],
  },
]
