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
    chapters: [
      {
        period: '2024.05 - Present',
        title: 'Vuddy Android',
        summary: '신규 앱의 멀티모듈 구조를 설계하고 Sendbird 연동을 맡았습니다.',
        highlights: [
          '멀티모듈 구조 설계, MVI 적용과 Build-Logic 구성',
          'QA 빌드 배포, Google Play 정책 대응과 운영 장애 분석',
        ],
      },
      {
        period: '2026.02 - Present',
        title: 'AI 캐릭터 모델',
        summary: '사내 AI TF에서 캐릭터 대화 모델의 데이터 정제, 학습, 평가와 서빙을 맡았습니다.',
        highlights: [
          'LoRA 기반 SFT, 비교 조건을 고정한 내부 평가 도구와 vLLM 서빙',
          '유효하지 않은 실험 결과와 평가 방식의 한계, 중단 이유 기록',
        ],
      },
      {
        period: '2023.10 - 2024.05',
        title: 'Momentica Android',
        summary: '아티스트 영상 알람과 포토카드 도감 개발을 주도했습니다.',
        highlights: [
          '포토카드 도감의 퀵뷰와 3D 회전 구현',
          '불필요한 리컴포지션 제거, SceneView Bitmap 메모리 누수와 화면 이동 중 크래시 수정',
          'Room과 AlarmManager 기반 알람 저장과 예약, 재부팅 이후 복원',
          '실기기에서 화면 꺼짐, 잠금 화면과 재부팅 시나리오 검증',
        ],
      },
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Python', 'PyTorch', 'vLLM'],
    current: true,
  },
]
