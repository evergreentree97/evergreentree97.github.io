export type Activity = {
  period: string
  organization: string
  role: string
  summary: string
  highlights: string[]
}

export const activities: Activity[] = [
  {
    period: '2024.01 - 2024.12',
    organization: 'Mash-Up',
    role: 'Android Developer',
    summary: '밈 아카이빙 서비스 파밈 Android 앱 개발',
    highlights: [],
  },
  {
    period: '2022.10 - 2023.02',
    organization: 'YAPP 21기',
    role: 'Android Developer',
    summary: '팀 프로젝트 관리 앱 티미티미 개발',
    highlights: [
      'Android와 WebView 간 연동 메서드와 파라미터 문서화',
      'Clean Architecture 기반 모듈 구조와 공통 디자인 시스템 개발',
    ],
  },
  {
    period: '2022.07 - 2022.08',
    organization: 'Nexters 21기',
    role: 'Android Developer',
    summary: '클라이밍 모임 출석 앱 홀디 개발과 Play Store 출시',
    highlights: [],
  },
]
