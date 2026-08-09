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
  outcomes: string[]
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
    summary: '외부 SDK와 서버의 책임을 분리해 채팅 기능을 제품 정책에 맞게 운영할 수 있는 구조로 설계',
    role: '멀티모듈 설계, Sendbird 연동, 미디어 메시지',
    outcomes: [
      '초기 멀티모듈 구조를 설계하고 공통 UI와 인증 흐름을 구성',
      '실시간 메시지는 Sendbird, 채팅방 생성과 검색, 신고와 삭제는 백엔드 API로 분리',
      'Android 개발자 2명이 채팅 구현을 분담했으며 Sendbird 연동, 양방향 페이징, 사진과 영상 메시지를 담당',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'MVI / MVVM', 'Sendbird', 'Media3'],
    image: {
      artwork: 'vuddy',
      alt: '대화 카드가 중앙 장치로 모이는 도트 비네트',
    },
    caseStudy: {
      problem: '실시간 메시징과 운영 기능이 모두 Sendbird에 의존하면 제품 정책도 외부 SDK 제약에 종속될 위험이 있었습니다.',
      decision: '실시간 메시징은 Sendbird, 채팅방 생성과 검색, 신고와 삭제는 백엔드 API로 책임을 분리했습니다.',
      verification: '대규모 그룹의 푸시 제약을 출시 전에 확인해 자체 푸시로 전환하고, 수신과 알림 이동 경로를 실기기에서 검증했습니다.',
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
    eyebrow: 'AI PRODUCT',
    summary: '학습 데이터를 다듬어 다시 학습한 모델을 기존 모델과 같은 질문으로 비교',
    role: '대화 데이터 정제, LoRA 학습, LLM Judge 평가 도구 개발, vLLM 서빙',
    outcomes: [
      '질문과 채점 순서, 서빙 설정을 고정하고 모델 정보를 가린 상태에서 응답을 비교',
      '내부 자동 평가의 종합 점수 76.96 → 82.28, 캐릭터 설정 위반 4건 → 1건',
      '종합 점수와 달리 재미와 상태 이해 점수는 하락해 실제 대화를 함께 확인',
      '자동 평가 결과를 실제 대화와 대조하고, 학습 데이터와 중복된 평가 문항을 폐기한 후 중복 검사 추가',
    ],
    technologies: ['Python', 'PyTorch', 'LoRA', 'LLM Evaluation', 'vLLM'],
    image: {
      artwork: 'llm',
      alt: '같은 입력으로 두 모델의 응답 패턴을 비교하는 도트 비네트',
    },
    caseStudy: {
      problem: '캐릭터 대화 품질은 평가 기준이 명확하지 않았고, 종합 점수 상승이 재미와 상태 이해 개선을 보장하지 않았습니다.',
      decision: '질문과 채점 순서, 서빙 설정을 고정하고 모델 이름을 가렸습니다. 응답 형식과 캐릭터 일관성, 상태 이해를 나눠 채점하고 자동 점수는 실제 대화와 대조했습니다.',
      verification: '같은 질문 40건의 내부 자동 평가에서 종합 점수는 76.96에서 82.28로 상승했고 캐릭터 설정 위반은 4건에서 1건으로 줄었습니다. 재미와 상태 이해 점수는 낮아져 실제 대화를 함께 확인했습니다.',
    },
    links: [],
  },
  {
    name: 'Momentica',
    eyebrow: 'ANDROID PRODUCT',
    summary: '알림 정책과 사용자 시나리오를 반영해 앱 종료와 재부팅 이후에도 동작하는 영상 알람을 설계',
    role: '영상 알람, 포토카드 도감',
    outcomes: [
      'Room과 AlarmManager로 알람을 저장하고 앱 종료와 재부팅 이후 예약을 복원',
      '같은 영상 파일을 여러 알람이 공유해도 사용 중인 파일은 삭제되지 않도록 처리',
      '포토카드를 길게 누른 위치에서 화면 중앙으로 이동시키는 퀵뷰 구현',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'AlarmManager'],
    image: {
      artwork: 'momentica',
      alt: '영상 알람과 운동 가방, 클라이밍 벽을 연결한 도트 비네트',
    },
    caseStudy: {
      problem: '영상 알람은 휴대전화 재부팅과 잠금 화면을 처리해야 했고, 여러 알람이 같은 영상 파일을 공유할 수 있었습니다.',
      decision: '알람 데이터 저장과 실행 예약을 분리하고, 재부팅 복원과 파일 삭제 규칙을 별도로 정의했습니다.',
      verification: 'Android 알림 정책을 반영하고, 앱 종료와 재부팅 이후의 알람 복원, 잠금 화면 실행 등 주요 시나리오를 Android 14 실기기에서 검증했습니다.',
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
    summary: 'AI 문장의 번역투와 과한 격식을 교정하는 오픈소스 스킬',
    evidence: '검증 항목 110개, JSONL 검증 스크립트와 GitHub Actions 구성',
    technologies: ['Agent Skill', 'JSONL', 'GitHub Actions'],
    link: {
      label: 'GitHub 보기',
      href: 'https://github.com/EvergreenTree97/K-Humanizer',
      external: true,
    },
  },
]
