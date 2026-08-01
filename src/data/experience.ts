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
    summary: 'Android 제품 개발과 운영을 맡으며 LLM 데이터, 평가와 서빙까지 역할을 넓히고 있습니다.',
    highlights: [
      'Kotlin과 Jetpack Compose 기반 Android 제품 3개에서 기능 개발, 출시와 운영 담당',
      '신규 앱의 멀티모듈 구조, 실시간 채팅, 미디어, 결제와 광고 개발',
      '오픈소스 LLM 데이터 정제, LoRA 기반 SFT, 자동 평가와 vLLM 서빙',
      '저장소 규칙을 AI가 먼저 확인하고 코드 리뷰와 기존 기능 테스트로 결과 검증',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Python', 'PyTorch', 'vLLM'],
    current: true,
  },
]
