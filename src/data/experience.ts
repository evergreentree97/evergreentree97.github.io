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
      'Momentica의 포토카드 도감과 영상 알람, Vuddy의 초기 구조, 채팅과 미디어 기능 담당',
      '신규 앱의 Google Play 결제, 광고와 QA 배포 자동화 담당',
      '오픈소스 LLM의 학습 데이터 정제, LoRA 추가 학습, 평가 도구 구축과 vLLM 서빙 담당',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Python', 'PyTorch', 'vLLM'],
    current: true,
  },
]
