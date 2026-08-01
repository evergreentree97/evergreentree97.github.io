export type SkillGroup = {
  label: string
  description: string
  skills: string[]
}

// TODO: 기술 목록은 실제 제품에서 연결해 본 범위에 맞춰 갱신하세요.
export const skillGroups: SkillGroup[] = [
  {
    label: 'Core Android',
    description: '제품 구조와 화면, 비동기 상태 관리',
    skills: ['Kotlin', 'Jetpack Compose', 'Coroutines / Flow', 'Clean Architecture', 'Multi Module'],
  },
  {
    label: 'Product & Platform',
    description: '기능 구현부터 출시와 운영까지',
    skills: ['Android CI/CD', 'Play Billing', 'Sendbird', 'Media3', 'Room / AlarmManager'],
  },
  {
    label: 'AI Product',
    description: '데이터부터 평가와 서빙까지',
    skills: ['LLM Evaluation', 'LoRA / SFT', 'vLLM', 'Python / PyTorch'],
  },
  {
    label: 'Delivery & AI Tools',
    description: '반복 작업, 검증과 내부 데모 개발',
    skills: ['GitHub Actions', 'Claude Code', 'Codex', 'MCP', 'React / TypeScript'],
  },
]
