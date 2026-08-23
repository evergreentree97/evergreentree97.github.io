export type Activity = {
  period: string
  organization: string
  role: string
  summary: string
  takeaway: string
  highlights: string[]
}

export const activities: Activity[] = [
  {
    period: '2024.01 - 2024.12',
    organization: 'Mash-Up',
    role: 'Android Developer',
    summary: 'IT 연합동아리에서 밈 공유 앱 파밈을 함께 개발했습니다.',
    takeaway: '배운 것을 팀 밖으로 공유하는 활동이었습니다.',
    highlights: [
      'Kotlin Coroutines 스터디를 주도하고 실무 적용 사례 공유',
      'Kotlin과 Jetpack Compose로 주요 화면 개발',
    ],
  },
  {
    period: '2022.10 - 2023.02',
    organization: 'YAPP 21기',
    role: 'Android Developer',
    summary: '팀 프로젝트 관리 앱 티미티미를 두 명이 분담해 개발했습니다.',
    takeaway: '직군 사이의 약속을 문서로 맞추는 방식을 배웠습니다.',
    highlights: [
      'Android와 WebView가 주고받는 메서드와 파라미터를 문서로 정리',
      'Clean Architecture 기반 모듈 구조와 공통 디자인 시스템 개발',
      'Effective Kotlin과 알고리즘 스터디 참여',
    ],
  },
  {
    period: '2022.07 - 2022.08',
    organization: 'Nexters 21기',
    role: 'Android Developer',
    summary: '클라이밍 모임 출석 앱 홀디를 두 명이 분담해 개발하고 Play Store에 출시했습니다.',
    takeaway: '앱 코드 밖의 문제까지 보는 시야를 얻었습니다.',
    highlights: [
      '서버 응답을 공통 형식으로 맞추도록 제안',
      '릴리스 빌드에서만 발생한 Proguard 문제 해결',
      '출시 후 유지보수까지 담당',
    ],
  },
]
