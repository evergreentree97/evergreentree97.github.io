export type Activity = {
  period: string
  organization: string
  role: string
  summary: string
  highlights: string[]
}

// TODO: 커뮤니티와 사이드 프로젝트 이력은 회사 경력과 분리해 갱신하세요.
export const activities: Activity[] = [
  {
    period: '2024.01 - 2024.12',
    organization: 'Mash-Up',
    role: 'Android Developer',
    summary: 'IT 연합동아리에서 밈 공유 앱 파밈을 개발했습니다.',
    highlights: ['Kotlin과 Jetpack Compose로 주요 화면 개발', 'Coroutines 스터디를 주도하고 실무 적용 사례 공유'],
  },
  {
    period: '2022.04 - 2023.12',
    organization: 'Duckie',
    role: 'Android Developer',
    summary: '팬덤 퀴즈 앱을 함께 개발해 Play Store에 출시했습니다.',
    highlights: ['Compose UI 개발과 기능 단위 모듈 분리', 'Play Store 배포, 코드 리뷰와 QA 이슈 관리'],
  },
]
