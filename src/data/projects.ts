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
    src: string
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
    summary: '신규 Android 앱의 구조 설계, 실시간 채팅과 미디어 개발, 출시 후 운영',
    role: '앱 구조, Sendbird 연동, 메시지 목록과 미디어',
    outcomes: [
      '기능별 멀티모듈 구조와 MVI/MVVM 화면 상태 관리 방식 설계',
      '실시간 메시지는 Sendbird, 채팅방 생성과 검색은 백엔드로 분리',
      '이전과 최신 메시지를 나눠 불러오는 목록, 사진과 영상 메시지 UI, 공용 플레이어 개발',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Sendbird', 'Media3'],
    image: {
      src: '/images/project-vuddy.jpg',
      alt: 'Android 채팅 화면과 실시간 메시징, 운영 API의 경계를 나타낸 도트 다이어그램',
    },
    caseStudy: {
      problem: '실시간 메시지와 운영 기능을 Sendbird에 모두 맡기면 제품 정책이 외부 채팅 SDK 제약에 묶일 수 있었습니다.',
      decision: '메시지 송수신은 Sendbird에 두고, 채팅방 생성과 검색, 운영 정책은 백엔드로 분리했습니다.',
      verification: 'Android 개발자 2명이 채팅을 나눠 개발했습니다. 저는 외부 SDK 연동 코드, 메시지 목록 로딩, 사진과 영상 메시지 UI를 맡았습니다.',
    },
    links: [
      {
        label: 'View app',
        href: 'https://play.google.com/store/apps/details?hl=ko&id=io.levvels.vuddy',
        external: true,
      },
    ],
  },
  {
    name: 'LLM Evaluation Harness',
    eyebrow: 'AI PRODUCT',
    summary: '같은 데이터와 조건으로 모델을 비교하고, 출시 여부를 판단할 수 있게 만든 평가 도구',
    role: '학습 데이터 검사, 평가 설계, vLLM 서빙',
    outcomes: [
      '학습에 쓰지 않은 질문을 두 모델에 동일하게 입력하는 비교 환경 구성',
      '학습에 쓰지 않은 질문 40건에서 핵심 품질 지표 1.25점 상승',
      '학습 데이터가 평가에 섞인 문제를 발견해 결과 무효 처리, 이후 자동 검사 추가',
    ],
    technologies: ['Python', 'PyTorch', 'LoRA', 'LLM Evaluation', 'vLLM'],
    image: {
      src: '/images/project-llm-evaluation.jpg',
      alt: '동일한 평가 데이터로 두 모델을 비교하고 결과를 검증하는 도트 다이어그램',
    },
    caseStudy: {
      problem: '학습 데이터나 평가 질문이 달라지면 점수가 오른 이유를 알 수 없었습니다.',
      decision: '학습에 쓰지 않은 질문을 두 모델에 넣어 비교하고, 학습 데이터와 겹치는 질문은 미리 걸러내도록 만들었습니다.',
      verification: '학습에 쓰지 않은 질문 40건을 Claude Opus가 같은 기준으로 채점한 결과, 핵심 품질 지표가 1.25점 올랐습니다.',
    },
    links: [],
  },
  {
    name: 'Momentica',
    eyebrow: 'ANDROID PRODUCT',
    summary: '운영 중인 Android 앱에서 포토카드 도감과 영상 알람을 개발',
    role: '기능 설계, QA와 배포',
    outcomes: [
      'Room과 AlarmManager를 사용한 영상 알람 모듈 개발',
      '재부팅 후 알람 복원, 잠금 화면 표시와 Android 14 대응',
      'Compose로 포토카드 도감과 퀵뷰, 수집 동선 구현',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'AlarmManager'],
    image: {
      src: '/images/project-momentica.jpg',
      alt: '알람 데이터 저장, 영상 파일, 재부팅 복원과 실행 흐름을 나타낸 도트 다이어그램',
    },
    caseStudy: {
      problem: '영상 알람은 휴대전화 재부팅과 잠금 화면을 처리해야 했고, 여러 알람이 같은 영상 파일을 공유할 수 있었습니다.',
      decision: '알람 데이터 저장과 실행 예약을 분리하고, 재부팅 복원과 파일 삭제 규칙을 따로 만들었습니다.',
      verification: 'Android 14 기기에서 재부팅 후 복원과 잠금 화면 동작을 테스트 빌드로 확인했습니다.',
    },
    links: [
      {
        label: 'View app',
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
    summary: 'Jetpack Compose에서 이미지 로딩 중 Shimmer 효과를 쉽게 붙이도록 만든 라이브러리',
    evidence: 'Compose Modifier API로 설계해 JitPack에 공개 배포',
    technologies: ['Kotlin', 'Jetpack Compose', 'Coil', 'JitPack'],
    link: {
      label: 'View GitHub',
      href: 'https://github.com/EvergreenTree97/easy-shimmer-compose',
      external: true,
    },
  },
  {
    name: 'K-Humanizer',
    eyebrow: 'OPEN SOURCE',
    summary: 'AI가 쓴 한국어의 번역투와 과한 격식을 줄이는 공개 Agent Skill',
    evidence: '110개 예문과 검증 스크립트, GitHub Actions 구성',
    technologies: ['Agent Skill', 'JSONL', 'GitHub Actions'],
    link: {
      label: 'View GitHub',
      href: 'https://github.com/EvergreenTree97/K-Humanizer',
      external: true,
    },
  },
]
