export type SideProject = {
  period: string
  name: string
  summary: string
  highlights: string[]
}

export const sideProjects: SideProject[] = [
  {
    period: '2022.04 - 2023.12',
    name: 'Duckie',
    summary: '팬덤 퀴즈 앱을 함께 개발해 Play Store에 출시했습니다.',
    highlights: [
      '기능 모듈 간 의존 문제를 Navigator 인터페이스와 Hilt 주입으로 해결',
      'Jetpack Compose 기반 퀴즈 출제, 풀이와 랭킹 기능 개발',
      'Play Store 배포와 QA 이슈 관리',
    ],
  },
  {
    period: '2022.08 - 2022.11',
    name: '꽥꽥',
    summary: 'Duckie에서 사용하는 Compose 디자인 시스템을 함께 개발했습니다.',
    highlights: [
      'Modifier 공개 범위와 Compose 안정성 검토',
      'Compose 컴포넌트 4종과 KDoc 작성',
    ],
  },
]
