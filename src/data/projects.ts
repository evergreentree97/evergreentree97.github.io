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
    summary: '신규 Android 앱을 구조 설계부터 출시까지 만들고, 실시간 채팅과 미디어 기능을 운영',
    role: '앱 구조, 실시간 채팅과 미디어',
    outcomes: [
      '채팅 기능을 모듈로 분리해 Android 개발자 2명이 영역을 나눠 개발',
      '메시지 송수신과 운영 기능을 분리해 제품 정책이 Sendbird에 묶이지 않도록 설계',
      '과거와 최신 메시지를 이어서 탐색할 수 있는 목록과 사진, 영상 메시지 UI 개발',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'MVI / MVVM', 'Sendbird', 'Media3'],
    image: {
      src: '/images/project-vuddy.jpg',
      alt: 'Android 채팅 화면과 실시간 메시징, 운영 API의 경계를 나타낸 도트 다이어그램',
    },
    caseStudy: {
      problem: '실시간 메시지와 운영 기능을 Sendbird에 모두 맡기면 제품 정책이 외부 채팅 SDK 제약에 묶일 수 있었습니다.',
      decision: '메시지 송수신은 Sendbird에 두고, 채팅방 생성과 검색, 운영 정책은 백엔드로 분리했습니다.',
      verification: '저는 Sendbird 연동 코드, 과거와 최신 메시지 로딩, 사진과 영상 메시지 UI를 맡았습니다.',
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
    summary: '모델을 같은 질문으로 비교해 출시 판단에 쓸 수 있는 평가 하네스 구축',
    role: '학습 데이터 검증, 자동 평가와 vLLM 서빙',
    outcomes: [
      '두 모델에 같은 질문을 넣어 답변 차이만 비교할 수 있는 평가 환경 구축',
      '동일한 40개 질문 비교에서 종합 품질 점수 6.9% 상승',
      '치명적 실패 100% 감소, 제품 규칙 위반 75% 감소',
      '학습 데이터와 평가 질문의 중복을 발견해 잘못된 결과를 폐기하고 자동 검사 추가',
    ],
    technologies: ['Python', 'PyTorch', 'LoRA', 'LLM Evaluation', 'vLLM'],
    image: {
      src: '/images/project-llm-evaluation.jpg',
      alt: '동일한 평가 데이터로 두 모델을 비교하고 결과를 검증하는 도트 다이어그램',
    },
    caseStudy: {
      problem: '평균 점수가 올라도 치명적 실패가 남거나 학습 데이터가 평가 질문에 섞이면 출시 판단을 믿을 수 없었습니다.',
      decision: '같은 질문과 채점 기준으로 두 모델을 비교하고, 치명적 실패와 데이터 중복을 별도 기준으로 검사했습니다.',
      verification: '동일한 질문 40개 비교에서 종합 품질 점수가 6.9% 올랐고 치명적 실패는 4건에서 0건, 제품 규칙 위반은 4건에서 1건으로 줄었습니다. 일부 품질 회귀 4건은 운영 과제로 남겼습니다.',
    },
    links: [],
  },
  {
    name: 'Momentica',
    eyebrow: 'ANDROID PRODUCT',
    summary: '운영 중인 Android 앱에 포토카드 도감과 영상 알람을 추가하고 Android 14까지 대응',
    role: '사용 흐름, 알람 안정성, QA와 배포',
    outcomes: [
      '앱이 종료돼도 정해진 시간에 영상을 재생하는 알람 기능 개발',
      '휴대전화 재부팅 후 알람 복원과 잠금 화면 표시를 Android 14에서 검증',
      '수집한 포토카드를 한눈에 확인하고 바로 감상하는 도감과 퀵뷰 구현',
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
    summary: '이미지 로딩 상태에 Shimmer를 쉽게 적용하도록 만든 Jetpack Compose 라이브러리',
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
    evidence: '110개 예문과 자동 검증 스크립트, GitHub Actions 구성',
    technologies: ['Agent Skill', 'JSONL', 'GitHub Actions'],
    link: {
      label: 'View GitHub',
      href: 'https://github.com/EvergreenTree97/K-Humanizer',
      external: true,
    },
  },
]
