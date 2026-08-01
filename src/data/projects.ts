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
    summary: '신규 Android 제품의 초기 구조부터 실시간 채팅, 미디어와 출시 후 운영까지 담당',
    role: 'Android 아키텍처, SDK 연동, 페이징과 미디어',
    outcomes: [
      '멀티모듈 Clean Architecture와 MVI/MVVM 기반 구조 설계',
      'Sendbird 실시간 메시징과 백엔드 운영 규칙의 책임 분리',
      '채팅 페이징, 미디어 버블, 인증과 공통 플레이어 개발',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Sendbird', 'Media3'],
    image: {
      src: '/images/project-vuddy.jpg',
      alt: 'Android 채팅 화면과 실시간 메시징, 운영 API의 경계를 나타낸 도트 다이어그램',
    },
    caseStudy: {
      problem: '실시간 메시징과 운영 규칙을 한 SDK에 묶으면 기능 확장과 장애 대응의 경계가 흐려졌습니다.',
      decision: 'Sendbird는 실시간 메시징을, 백엔드는 생성과 검색, 운영 정책을 맡도록 책임을 나눴습니다.',
      verification: 'Android 개발자 2명이 채팅을 나눠 구현했고, SDK 연동 레이어와 페이징, 미디어 버블을 맡았습니다.',
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
    summary: '데이터와 평가 조건을 고정해 모델 결과를 비교하고, 출시 판단의 근거를 남기는 평가 체계',
    role: '데이터 검증, 평가 설계, 모델 서빙',
    outcomes: [
      'Clean holdout과 동일 입력 A/B 비교 구성',
      'Holdout 40건 비교에서 핵심 품질 지표 1.25점 상승 확인',
      '평가 데이터 누출을 발견해 해당 결과를 무효 처리하고 사전 검사로 전환',
    ],
    technologies: ['Python', 'PyTorch', 'LoRA', 'LLM as a Judge', 'vLLM'],
    image: {
      src: '/images/project-llm-evaluation.jpg',
      alt: '동일한 평가 데이터로 두 모델을 비교하고 결과를 검증하는 도트 다이어그램',
    },
    caseStudy: {
      problem: '학습 데이터와 평가 조건이 달라지면 모델 점수의 변화 원인을 비교할 수 없었습니다.',
      decision: 'Clean holdout, 동일 입력 비교와 데이터 누출 검사를 하나의 평가 하네스로 묶었습니다.',
      verification: 'Claude Opus가 채점한 holdout 40건 단일 변수 비교에서 핵심 품질 지표가 1.25점 올랐습니다.',
    },
    links: [],
  },
  {
    name: 'Momentica',
    eyebrow: 'ANDROID PRODUCT',
    summary: '운영 중인 Android 앱에서 포토카드 도감과 영상 알람 기능을 모듈 단위로 개발',
    role: 'Android 기능 설계, QA와 배포',
    outcomes: [
      'Room과 AlarmManager 기반 알람 모듈 신설',
      '재부팅 후 복원, 잠금 화면 표시와 SDK 34 대응',
      'Compose 기반 도감, 퀵뷰와 수집 동선 구현',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'AlarmManager'],
    image: {
      src: '/images/project-momentica.jpg',
      alt: '알람 데이터 저장, 영상 파일, 재부팅 복원과 실행 흐름을 나타낸 도트 다이어그램',
    },
    caseStudy: {
      problem: '영상 알람은 재부팅과 잠금 화면, 여러 알람이 공유하는 미디어 파일까지 함께 다뤄야 했습니다.',
      decision: 'Room 스키마와 AlarmManager 스케줄링을 나누고 복원과 파일 정리 규칙을 설계했습니다.',
      verification: '재부팅 후 복원, 잠금 화면 표시와 SDK 34 동작을 QA 빌드에서 확인했습니다.',
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
    summary: 'Jetpack Compose에서 이미지 로딩 Shimmer 효과를 간단히 적용하는 공개 라이브러리',
    evidence: 'Modifier 확장 API 설계와 JitPack 배포',
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
    summary: 'AI가 쓴 한국어의 번역투와 과한 격식을 줄이는 오픈소스 Agent Skill',
    evidence: '110개 예문, 검증 스크립트와 GitHub Actions 구성',
    technologies: ['Agent Skill', 'JSONL', 'GitHub Actions'],
    link: {
      label: 'View GitHub',
      href: 'https://github.com/EvergreenTree97/K-Humanizer',
      external: true,
    },
  },
]
