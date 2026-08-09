export type ExperienceChapter = {
  period: string
  title: string
  summary: string
  highlights: string[]
}

export type Experience = {
  period: string
  organization: string
  role: string
  summary: string
  chapters: ExperienceChapter[]
  technologies: string[]
  current?: boolean
}

// TODO: 최신 경력은 검증된 역할과 본인 기여 범위 안에서 교체하세요.
export const experiences: Experience[] = [
  {
    period: '2023.10 - Present',
    organization: 'Levvels (Dunamu & HYBE)',
    role: 'Android Developer',
    summary:
      '팬덤 서비스의 Android 앱을 개발해 왔습니다. 기존 앱의 기능 개발부터 신규 앱의 초기 구조, 출시와 운영까지 담당했습니다.',
    chapters: [
      {
        period: '2024.05 - Present',
        title: 'Vuddy Android',
        summary: '신규 앱의 초기 구조와 공통 기반을 설계하고 채팅, 미디어, 인증과 결제 기능을 출시하고 운영했습니다.',
        highlights: [
          '멀티모듈 Clean Architecture와 MVI/MVVM 기준, Build-Logic 구성',
          'Sendbird 실시간 메시징과 백엔드 운영 기능을 분리하고 양방향 페이징과 미디어 메시지 구현',
          'QA 빌드 배포 자동화, Google Play 정책 대응과 운영 장애 분석',
        ],
      },
      {
        period: '2026.02 - Present',
        title: 'AI 캐릭터 모델',
        summary: '오픈소스 대화 모델을 제품에서 비교할 수 있도록 데이터부터 학습, 평가와 서빙까지 하나의 흐름으로 구성했습니다.',
        highlights: [
          '대화 데이터 정제와 LoRA 기반 SFT, 고정 조건 평가 도구 개발',
          'vLLM 서빙과 내부 시연 화면 구성, 자동 평가 결과를 실제 대화와 함께 검토',
        ],
      },
      {
        period: '2023.10 - 2024.05',
        title: 'Momentica Android',
        summary: '운영 중인 앱에 합류해 포토카드 도감과 아티스트 영상 알람을 주도했습니다.',
        highlights: [
          'Room과 AlarmManager 기반 알람 저장과 예약, 앱 종료와 재부팅 이후 복원',
          '포토카드 도감과 퀵뷰 구현, Android 14 실기기에서 주요 알람 시나리오 검증',
        ],
      },
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Python', 'PyTorch', 'vLLM'],
    current: true,
  },
]
