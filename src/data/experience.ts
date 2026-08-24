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
        summary: 'TF에서 학습한 모델을 실제 제품으로 연결한 신규 앱입니다.',
      },
      {
        period: '2026.02 - 2026.08',
        title: '사내 AI TF 캐릭터 대화 모델 파인튜닝',
        href: '#model-evaluation',
        summary: 'Android 개발자로 TF에 합류해 캐릭터 대화 모델 학습을 직접 맡았습니다.',
      },
      {
        period: '2024.05 - Present',
        title: 'Vuddy Android',
        href: '#vuddy',
        summary: '초기 구축부터 Google Play 출시까지 참여한 신규 앱입니다.',
      },
      {
        period: '2023.10 - 2024.05',
        title: 'Momentica Android',
        href: '#momentica',
        summary: '기존 앱의 구조를 유지한 채 기능을 추가하며 백그라운드 실행과 3D 렌더링을 다뤘습니다.',
      },
    ],
    current: true,
  },
]
