export type ProjectLink = {
  label: string
  href: string
  external?: boolean
}

export type ProjectCase = {
  problem: string
  decision: string
  verification: string
}

export type FeaturedProject = {
  name: string
  eyebrow: string
  summary: string
  role: string
  technologies: string[]
  image: {
    artwork: 'vuddy' | 'llm' | 'momentica'
    alt: string
  }
  caseStudy: ProjectCase
  links: ProjectLink[]
}

export type MoreProject = {
  name: string
  eyebrow: string
  summary: string
  evidence: string
  technologies: string[]
  link: ProjectLink
}

// TODO: 공개 가능한 프로젝트명, 검증 조건과 링크만 유지하세요.
export const featuredProjects: FeaturedProject[] = [
  {
    name: 'Vuddy',
    eyebrow: 'ANDROID PRODUCT',
    summary: '외부 SDK의 제한사항을 확인한 뒤 실시간 메시징과 제품 운영의 책임을 나누는 채팅 구조를 제안했습니다.',
    role: '신규 앱의 초기 구조와 Sendbird 연동을 주도했습니다. 채팅 화면은 동료와 분담했고 양방향 페이징과 사진 및 영상 메시지를 맡았습니다.',
    technologies: ['Kotlin', 'Jetpack Compose', 'MVI / MVVM', 'Sendbird', 'Media3'],
    image: {
      artwork: 'vuddy',
      alt: '대화 카드가 중앙 장치로 모이는 도트 비네트',
    },
    caseStudy: {
      problem: '자체 소켓 서버 구축과 Sendbird 사용을 대안으로 비교했습니다. Sendbird는 실시간 메시징 기반을 제공했지만 대규모 그룹 푸시와 채널별 금칙어 설정은 요구사항을 충족하지 못했습니다.',
      decision: '출시 일정과 서버 구현 범위를 고려해 자체 소켓 대신 Sendbird를 선택했습니다. 실시간 메시징은 Sendbird에 남기고 채팅방 생성과 검색, 비즈니스 규칙, 자체 푸시와 운영은 Backend가 맡도록 제안했습니다.',
      verification: '채널별 금칙어는 Backend의 룰 기반 정책으로, 대규모 푸시는 자체 발송 구조로 처리하는 방안을 제안했습니다. 외부 SDK의 기능 범위에 맞춰 요구사항을 줄이지 않고 운영 정책을 Backend에서 변경할 수 있도록 책임 범위를 정리했습니다.',
    },
    links: [
      {
        label: 'Google Play에서 보기',
        href: 'https://play.google.com/store/apps/details?hl=ko&id=io.levvels.vuddy',
        external: true,
      },
    ],
  },
  {
    name: '캐릭터 대화 모델 학습과 평가',
    eyebrow: 'MODEL EVALUATION',
    summary: '학습과 평가의 입력을 검사하고, 모델을 비교할 수 있는 조건과 판단 기준을 만들었습니다.',
    role: '사내 AI TF에서 데이터 정제, LoRA 학습, 내부 자동 평가 도구와 vLLM 서빙을 맡았습니다. 학습과 평가 기록을 관리했고 최종 모델 선택은 팀이 함께 결정했습니다.',
    technologies: ['Python', 'PyTorch', 'LoRA', 'LLM Evaluation', 'vLLM'],
    image: {
      artwork: 'llm',
      alt: '같은 입력으로 두 모델의 응답 패턴을 비교하는 도트 비네트',
    },
    caseStudy: {
      problem: '하나의 답변이 여러 부분으로 저장될 때 앞부분만 남고 나머지가 누락되고 있었습니다. 평가용 대화가 학습 데이터와 겹친 결과도 있어 기존 점수를 그대로 비교할 수 없었습니다.',
      decision: '응답 형식, 캐릭터 일관성, 재미와 상태 유지를 분리해 평가했습니다. 질문과 서빙 조건을 고정하고 모델 정보를 가린 뒤 답변 순서를 바꿨으며, 자동 평가를 실제 대화와 대조했습니다.',
      verification: '학습용 응답 27,128턴을 점검해 누락된 뒷부분을 복구했습니다. 결함이 섞인 이전 실험 19건은 비교 기준에서 제외하고 평가 데이터 중복을 막는 검사를 추가했습니다. 이후 비교 결과와 실제 대화를 함께 검토해 최종 모델은 팀에서 결정했습니다.',
    },
    links: [],
  },
  {
    name: 'Momentica',
    eyebrow: 'ANDROID PRODUCT',
    summary: '앱이 실행 중이지 않거나 휴대전화가 재부팅된 뒤에도 동작해야 하는 영상 알람의 저장과 예약을 분리했습니다.',
    role: '영상 알람을 주도했습니다.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'AlarmManager'],
    image: {
      artwork: 'momentica',
      alt: '휴대전화의 영상 알람을 나타낸 도트 비네트',
    },
    caseStudy: {
      problem: '영상 알람은 앱 프로세스 종료, 화면 꺼짐과 잠금 화면, 휴대전화 재부팅 뒤에도 실행돼야 했습니다.',
      decision: 'Room의 알람 데이터와 AlarmManager의 실행 예약을 분리하고, 재부팅 시 저장된 알람을 다시 예약했습니다.',
      verification: 'Android 14 실기기에서 앱 프로세스 종료, 화면 꺼짐과 잠금 화면 실행, 재부팅 후 예약 복원을 검증했습니다.',
    },
    links: [
      {
        label: 'Google Play에서 보기',
        href: 'https://play.google.com/store/apps/details?hl=ko&id=io.levvels.mmtc',
        external: true,
      },
    ],
  },
]

export const moreProjects: MoreProject[] = [
  {
    name: 'EasyShimmerCompose',
    eyebrow: 'ANDROID OSS',
    summary: '이미지 로딩 상태에 Shimmer를 적용하는 Jetpack Compose 라이브러리',
    evidence: 'Compose Modifier API로 설계해 JitPack에 공개 배포',
    technologies: ['Kotlin', 'Jetpack Compose', 'Coil', 'JitPack'],
    link: {
      label: 'GitHub 보기',
      href: 'https://github.com/EvergreenTree97/easy-shimmer-compose',
      external: true,
    },
  },
  {
    name: 'K-Humanizer',
    eyebrow: 'OPEN SOURCE',
    summary: '한국어 문서의 번역투와 과한 격식을 다듬는 문체 교정 도구',
    evidence: '문서 용도별 교정 범위, 검증 항목 110개, JSONL 검사와 GitHub Actions 구성',
    technologies: ['문체 규칙', 'JSONL', 'GitHub Actions'],
    link: {
      label: 'GitHub 보기',
      href: 'https://github.com/EvergreenTree97/K-Humanizer',
      external: true,
    },
  },
]
