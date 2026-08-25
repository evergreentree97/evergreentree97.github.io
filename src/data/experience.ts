export type ExperienceChapter = {
  period: string
  title: string
  href: string
  summary: string
}

export type Experience = {
  period: string
  organization: string
  intro: string
  role: string
  chapters: ExperienceChapter[]
  current?: boolean
}

export const careerIntroduction = [
  '3년차 Android Engineer 최상록입니다. 신규 앱의 구조 설계부터 Google Play 출시와 운영까지 맡아 왔습니다.',
  'Vuddy와 Momentica에서 팬 플랫폼을 개발했고 사내 AI TF에서는 캐릭터 대화 모델의 데이터 구성과 파인튜닝, 평가와 서빙을 맡았습니다. 현재는 해당 모델을 사용하는 신규 Android 앱을 개발하고 있습니다.',
] as const

// 리멤버 프로필(2026-08-21 기준본)과 evidence-master의 기간 확인을 따른다.
export const experiences: Experience[] = [
  {
    period: '2023.10 - Present',
    organization: 'Levvels (Dunamu & HYBE)',
    intro: '팬 플랫폼 Vuddy와 Momentica를 만드는 회사',
    role: 'Android Developer',
    chapters: [
      {
        period: '2026.06 - Present',
        title: 'TF 모델을 적용한 신규 AI 캐릭터 앱',
        href: '#model-evaluation',
        summary: 'SSE 기반 캐릭터 채팅과 Google Play 인앱 결제 개발을 맡았습니다.',
      },
      {
        period: '2026.02 - 2026.08',
        title: '사내 AI TF 캐릭터 대화 모델 파인튜닝',
        href: '#model-evaluation',
        summary: '캐릭터 대화 모델의 데이터 구성과 파인튜닝, 평가와 서빙을 맡았습니다.',
      },
      {
        period: '2024.05 - Present',
        title: 'Vuddy Android',
        href: '#vuddy',
        summary: 'Jetpack Compose 기반 멀티모듈 구조를 설계하고 인증, 미디어와 실시간 채팅 기능을 개발했습니다.',
      },
      {
        period: '2023.10 - 2024.05',
        title: 'Momentica Android',
        href: '#momentica',
        summary: 'SceneView로 3D 포토카드를 구현하고 Room과 AlarmManager 기반 영상 알람을 개발했습니다.',
      },
    ],
    current: true,
  },
]
