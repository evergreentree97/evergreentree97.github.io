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
    summary: 'Kotlin과 Jetpack Compose 기반 Android 앱 개발과 오픈소스 LLM 학습 및 평가를 담당하고 있습니다.',
    highlights: [
      'Momentica의 영상 알람과 포토카드 도감을 구현하고, Vuddy의 초기 멀티모듈 구조와 채팅, 미디어 기능 설계',
      '신규 앱에 Google Play 결제와 광고 SDK를 연동하고, QA 빌드 배포 자동화',
      '오픈소스 LLM의 학습 데이터 정제부터 LoRA 추가 학습, 고정 조건 평가와 vLLM 서빙까지 담당',
      'Repository 구조와 코드 규칙, 변경 범위, 완료 조건을 먼저 제공하고, 생성된 diff를 리뷰한 뒤 빌드와 실기기 테스트를 통과한 코드만 반영',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Python', 'PyTorch', 'vLLM'],
    current: true,
  },
]
