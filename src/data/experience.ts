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
    summary: 'Android 제품을 만들고 운영해왔고, 현재는 LLM 학습 데이터와 품질 평가, 모델 서빙까지 맡고 있습니다.',
    highlights: [
      'Android 제품 3개의 기능 개발, 출시와 운영',
      '신규 앱의 기능별 모듈 구조, 실시간 채팅, 미디어, 결제와 광고 개발',
      '오픈소스 LLM 학습 데이터 정제, LoRA 방식의 추가 학습, 자동 평가와 vLLM 서빙',
      'AI 도구에 저장소 맥락을 먼저 제공한 뒤 구현을 맡기고, 코드 리뷰와 기존 기능 테스트로 검증',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Python', 'PyTorch', 'vLLM'],
    current: true,
  },
]
