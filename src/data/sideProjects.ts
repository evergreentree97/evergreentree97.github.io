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
    summary: '팬들이 직접 퀴즈를 만들고 풀 수 있는 Android 앱',
    highlights: [
      'Navigator 인터페이스와 Hilt 주입으로 feature 모듈 간 화면 이동의 의존성 문제 해결',
      'Jetpack Compose 기반 퀴즈 출제, 풀이와 랭킹 기능 개발. Play Store 출시',
    ],
  },
  {
    period: '2022.08 - 2022.11',
    name: '꽥꽥',
    summary: 'Duckie의 여러 화면에서 사용하는 Jetpack Compose 디자인 시스템',
    highlights: [
      '불필요한 recomposition을 줄이기 위한 Compose stability 검토',
      '버튼, 태그 목록과 메뉴 컴포넌트를 개발하고 KDoc으로 사용 방법 문서화',
    ],
  },
]
