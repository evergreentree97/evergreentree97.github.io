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
    summary: 'Android 제품을 만들고 운영해왔고, 지금은 LLM 학습, 평가와 서빙도 맡고 있습니다.',
    highlights: [
      'Android 제품 3개에서 신규 기능 개발부터 출시 후 운영까지 담당',
      '신규 앱의 구조 설계와 실시간 채팅, 미디어, 결제와 광고 개발',
      '오픈소스 LLM의 학습 데이터 준비부터 LoRA 추가 학습, 자동 평가와 vLLM 서빙까지 담당',
      'AI 도구에 저장소 맥락과 완료 조건을 제공하고, 코드 리뷰와 기존 기능 테스트로 결과 검증',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Python', 'PyTorch', 'vLLM'],
    current: true,
  },
]
