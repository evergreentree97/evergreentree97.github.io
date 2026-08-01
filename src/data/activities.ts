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
    summary: 'IT 연합동아리에서 밈 공유 앱을 만들고 Coroutines 스터디를 이끌었습니다.',
    highlights: ['Kotlin과 Jetpack Compose 기능 개발', 'Coroutines 스터디와 팀 기술 공유'],
  },
  {
    period: '2022.04 - 2023.12',
    organization: 'Duckie',
    role: 'Android Developer',
    summary: '팬덤 퀴즈 앱을 함께 만들며 Play Store 배포와 QA 운영을 경험했습니다.',
    highlights: ['Compose UI 개발과 기능별 모듈 분리', 'Play Store 배포, 코드 리뷰와 Notion QA 이슈 관리'],
  },
]
