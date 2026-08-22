export type SideProject = {
  period: string
  name: string
  summary: string
  takeaway: string
  highlights: string[]
}

export const sideProjects: SideProject[] = [
  {
    period: '2022.04 - 2023.12',
    name: 'Duckie',
    summary: '팬덤 퀴즈 앱을 함께 개발해 Play Store에 출시했습니다.',
    takeaway: '기능 개발을 배포와 QA 운영까지 이어가는 습관을 만들었습니다.',
    highlights: [
      'feature 간 의존 문제를 navigator 인터페이스와 Hilt 주입으로 해결',
      'Jetpack Compose 기반 퀴즈 출제, 풀이와 랭킹 기능 개발',
      'Play Store 배포와 QA Board 운영',
    ],
  },
  {
    period: '2022.08 - 2022.11',
    name: '꽥꽥',
    summary: 'Duckie에서 쓰는 Compose 디자인 시스템을 만들었습니다.',
    takeaway: '여럿이 쓰는 코드의 공개 범위를 판단하는 기준을 세웠습니다.',
    highlights: [
      'Modifier 공개 범위와 Compose stability 검토',
      'Compose 컴포넌트 4종과 KDoc 작성',
    ],
  },
]
