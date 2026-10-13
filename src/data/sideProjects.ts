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
    summary: '팬들이 직접 퀴즈를 만들고 풀 수 있는 앱입니다.',
    highlights: [
      'feature 모듈 간 화면 이동에서 발생한 의존성 문제를 Navigator 인터페이스와 Hilt 주입으로 해결했습니다.',
      'Jetpack Compose로 퀴즈 출제, 풀이와 랭킹 기능을 개발하고 Play Store에 출시했습니다.',
    ],
  },
  {
    period: '2022.08 - 2022.11',
    name: '꽥꽥',
    summary: 'Duckie의 여러 화면에서 재사용하는 Jetpack Compose 디자인 시스템입니다.',
    highlights: [
      '불필요한 리컴포지션을 줄이기 위해 Compose 안정성을 검토했습니다.',
      'FloatingActionButton, Toggle, TagRow와 ModalDrawer를 구현하고 KDoc을 작성했습니다.',
    ],
  },
]
