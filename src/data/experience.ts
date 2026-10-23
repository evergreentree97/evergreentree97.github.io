export type ExperienceText = (string | { emphasis: string })[]

export type ExperienceProject = {
  period: string
  title: string
  href: string
  featured?: boolean
  intro?: string
  bullets: ExperienceText[]
}

export type ExperienceChapter = {
  title?: string
  description?: string
  projects: ExperienceProject[]
}

export type Experience = {
  period: string
  organization: string
  affiliation: string
  intro: string
  role: string
  chapters: ExperienceChapter[]
}

// 리멤버 프로필(2026-08-21 기준본)과 evidence-master의 기간 확인을 따른다.
export const experiences: Experience[] = [
  {
    period: '2023.10 - 현재',
    organization: 'Levvels',
    affiliation: 'Dunamu & HYBE',
    intro: '팬 플랫폼 Vuddy와 Momentica를 만드는 회사',
    role: 'Android Developer',
    chapters: [
      {
        projects: [{
          period: '2024.05 - 현재',
          title: 'Vuddy Android',
          href: '#vuddy',
          featured: true,
          bullets: [
            ['신규 Android 앱의 초기 아키텍처와 핵심 기능 개발을 이끌고 런칭 주도'],
          ],
        }],
      },
      {
        title: '사내 AI TF',
        description: '캐릭터 대화 모델과 이를 사용하는 Android 앱 개발',
        projects: [
          {
            period: '2026.04 - 2026.08',
            title: '캐릭터 대화 모델',
            href: '#model-evaluation',
            bullets: [
              ['캐릭터 대화 모델 개발을 주도하고, 데이터 구축과 학습, 평가 및 서빙을 앱 적용으로 연결'],
            ],
          },
          {
            period: '2026.06 - 현재',
            title: 'AI 캐릭터 앱',
            href: '#model-evaluation',
            bullets: [
              ['AI 캐릭터 앱의 핵심 채팅과 결제 개발을 주도하고 주요 사용자 흐름의 안정성 확보'],
            ],
          },
        ],
      },
      {
        projects: [{
          period: '2023.10 - 2024.05',
          title: 'Momentica Android',
          href: '#momentica',
          bullets: [
            ['기존 팬 플랫폼의 핵심 기능을 확장하고 메모리 누수와 화면 갱신 문제 개선'],
          ],
        }],
      },
    ],
  },
]
