export type ExperienceText = (string | { emphasis: string })[]

export type ExperienceProject = {
  period: string
  title: string
  href: string
  featured?: boolean
  intro?: string
  summary?: ExperienceText
  bullets?: ExperienceText[]
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
          intro: '초기 설계부터 출시 및 운영에 참여한 프로젝트입니다.',
          bullets: [
            [{ emphasis: 'Jetpack Compose 기반 멀티모듈 구조' }, ' 설계'],
            ['인증, 실시간 채팅, 미디어 재생 기능 개발'],
          ],
        }],
      },
      {
        title: '사내 AI TF',
        description: '대화 모델 학습·서빙 및 연동 Android 앱 개발',
        projects: [
          {
            period: '2026.02 - 2026.08',
            title: '캐릭터 대화 모델',
            href: '#model-evaluation',
            bullets: [
              ['캐릭터 대화 데이터셋 구축 및 ', { emphasis: 'LoRA 파인튜닝' }],
              ['모델 자동 평가 및 ', { emphasis: 'vLLM 서빙 환경' }, ' 구축'],
            ],
          },
          {
            period: '2026.06 - 현재',
            title: 'AI 캐릭터 앱',
            href: '#model-evaluation',
            bullets: [
              [{ emphasis: 'SSE 기반 실시간 스트리밍 채팅' }, ' UI 구현'],
              [{ emphasis: 'Google Play 결제(구독 및 인앱 상품)' }, ' 연동 및 구현'],
            ],
          },
        ],
      },
      {
        projects: [{
          period: '2023.10 - 2024.05',
          title: 'Momentica Android',
          href: '#momentica',
          summary: [
            'SceneView로 ',
            { emphasis: '3D 포토카드' },
            '를 만들고 ',
            { emphasis: '테이크 홈을 개편' },
            '했습니다. Room과 AlarmManager를 사용한 ',
            { emphasis: '영상 알람' },
            '도 개발했습니다.',
          ],
        }],
      },
    ],
  },
]
