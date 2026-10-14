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
            ['Clean Architecture와 MVI 패턴 기반 Feature 단위 Multi-Module 구조 초기 설계'],
            ['주요 화면과 인증, 채팅, 미디어 플레이어 등 앱 전반의 기능 개발'],
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
              ['캐릭터 페르소나 데이터셋 구축, LoRA 파인튜닝과 평가, vLLM 서빙 환경 구축'],
              ['개발한 모델이 서비스 적용 모델로 선정'],
            ],
          },
          {
            period: '2026.06 - 현재',
            title: 'AI 캐릭터 앱',
            href: '#model-evaluation',
            bullets: [
              ['SSE 스트리밍 채팅과 Google Play Billing 기반 인앱 결제 및 정기 구독 개발'],
              ['Backend 결제 검증과 구독 상태 동기화, 단위 테스트와 스크린샷 테스트 적용'],
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
            ['SceneView 기반 3D 포토카드와 영상 모닝콜 반복 알림 구현'],
            ['홈 콘텐츠 탐색 영역 개편, ', 'Bitmap 메모리 누수와 불필요한 이미지 갱신 해결'],
          ],
        }],
      },
    ],
  },
]
