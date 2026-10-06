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
      '기능 모듈 사이의 화면 이동에서 발생한 의존 문제를 Navigator 인터페이스와 Hilt 주입으로 해결했습니다.',
      'Jetpack Compose로 퀴즈 출제, 풀이와 랭킹 기능을 개발했습니다.',
      'Play Store 배포와 QA 이슈 관리를 맡았습니다.',
    ],
  },
  {
    period: '2022.08 - 2022.11',
    name: '꽥꽥',
    summary: 'Duckie에서 사용하는 Compose 디자인 시스템을 함께 개발했습니다.',
    highlights: [
      '불필요한 리컴포지션을 줄이기 위해 Compose 안정성을 검토했습니다.',
      'FloatingActionButton, Toggle, TagRow와 ModalDrawer를 구현하고 KDoc을 작성했습니다.',
    ],
  },
]
