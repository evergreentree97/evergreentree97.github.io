export type SkillGroup = {
  label: string
  skills: {
    name: string
    context: string
  }[]
}

// TODO: 기술 목록은 실제 제품에서 연결해 본 범위에 맞춰 갱신하세요.
export const skillGroups: SkillGroup[] = [
  {
    label: 'Core Android',
    skills: [
      { name: 'Kotlin', context: 'Vuddy, Momentica' },
      { name: 'Jetpack Compose', context: 'Vuddy, Momentica' },
      { name: 'Coroutines / Flow', context: 'Vuddy의 비동기 상태와 미디어' },
      { name: 'Multi Module', context: 'Vuddy의 초기 앱 구조' },
    ],
  },
  {
    label: 'Product & Platform',
    skills: [
      { name: 'Sendbird', context: 'Vuddy의 실시간 메시징' },
      { name: 'Media3', context: 'Vuddy의 미디어 플레이어' },
      { name: 'Room / AlarmManager', context: 'Momentica 영상 알람' },
      { name: 'Android CI/CD', context: 'QA 빌드와 출시 운영' },
      { name: 'Play Billing', context: 'Android 제품의 결제 기능' },
    ],
  },
  {
    label: 'AI Product',
    skills: [
      { name: 'Python / PyTorch', context: '캐릭터 대화 모델 학습' },
      { name: 'LoRA / SFT', context: '대화 모델 파인튜닝' },
      { name: 'LLM Evaluation', context: '고정 조건의 모델 비교' },
      { name: 'vLLM', context: '모델 비교용 서빙' },
    ],
  },
  {
    label: 'Tools & Automation',
    skills: [
      { name: 'Claude Code / Codex', context: '구현 위임과 직접 검증' },
      { name: 'GitHub Actions', context: '빌드, 배포와 오픈소스 검사' },
      { name: 'KSP', context: 'Android 코드 생성' },
      { name: 'React / TypeScript', context: 'AI 모델 시연과 평가 도구' },
    ],
  },
]
