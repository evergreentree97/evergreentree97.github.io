export type Experience = {
  period: string
  organization: string
  role: string
  summary: string
  highlights: string[]
  technologies: string[]
  current?: boolean
}

// TODO: 최신 경력은 검증된 역할과 본인 기여 범위 안에서 교체하세요.
export const experiences: Experience[] = [
  {
    period: '2023.10 - Present',
    organization: 'Levvels (Dunamu & HYBE)',
    role: 'Android Developer',
    summary: 'Kotlin과 Jetpack Compose로 Android 앱을 개발하고 있습니다.',
    highlights: [
      'Momentica의 영상 알람과 포토카드 도감을 구현하고, Vuddy의 초기 멀티모듈 구조와 채팅, 미디어 기능 설계',
      '신규 앱에 Google Play 결제와 광고 SDK를 연동하고, QA 빌드 배포 자동화',
      '오픈소스 LLM의 학습 데이터 정제부터 LoRA 추가 학습, 고정 조건 평가와 vLLM 서빙까지 담당',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Python', 'PyTorch', 'vLLM'],
    current: true,
  },
]
