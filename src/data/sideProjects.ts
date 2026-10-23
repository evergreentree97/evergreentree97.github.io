export type SideProject = {
  period: string
  name: string
  summary: string
}

export const sideProjects: SideProject[] = [
  {
    period: '2022.04 - 2023.12',
    name: 'Duckie',
    summary: '팬들이 직접 퀴즈를 만들고 풀 수 있는 Android 앱, Play Store 출시',
  },
  {
    period: '2022.08 - 2022.11',
    name: '꽥꽥',
    summary: 'Duckie의 여러 화면에서 사용하는 Jetpack Compose 디자인 시스템',
  },
]
