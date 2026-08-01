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
    summary: 'IT 연합동아리에서 밈 공유 앱을 개발하고 팀 안에서 학습 내용을 나눴습니다.',
    highlights: ['Kotlin과 Jetpack Compose 기반 기능 개발', 'Coroutines 스터디 주도와 기술 공유'],
  },
  {
    period: '2022.04 - 2023.12',
    organization: 'Duckie',
    role: 'Android Developer',
    summary: '팬덤 퀴즈 앱을 공동 개발하고 출시와 QA 운영에 참여했습니다.',
    highlights: ['Compose UI와 Clean Architecture 모듈화', 'Play Store 배포, 코드 리뷰와 Notion QA Board 운영'],
  },
]
