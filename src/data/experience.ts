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
    summary: 'Android 개발이 주 업무입니다. 사내 AI TF에서는 오픈소스 LLM의 데이터를 정제하고 추가 학습하며, 평가 도구와 vLLM 서빙 환경을 만들고 있습니다.',
    highlights: [
      'Momentica에서는 포토카드 도감과 영상 알람, Vuddy에서는 초기 구조와 채팅, 미디어를 담당',
      '신규 AI 캐릭터 앱에서는 Google Play 결제와 광고, QA 배포 자동화를 담당',
      '오픈소스 LLM의 데이터 정제, LoRA 추가 학습, 평가 도구 개발과 vLLM 서빙을 담당',
      '서버 API 반영과 QA 준비는 저장소 규칙과 완료 조건을 준 뒤 AI 도구에 맡김. 생성된 코드는 직접 리뷰하고, 기존 구조와 사용자 흐름을 테스트한 뒤 반영',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Python', 'PyTorch', 'vLLM'],
    current: true,
  },
]
