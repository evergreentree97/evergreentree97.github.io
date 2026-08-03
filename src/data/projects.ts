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
    summary: '멀티모듈 구조를 설계하고 실시간 채팅, 사진과 영상 메시지를 구현',
    role: '멀티모듈 설계, Sendbird 연동, 미디어 메시지',
    outcomes: [
      '초기 멀티모듈 구조를 설계하고 공통 UI와 인증 흐름을 구성',
      '실시간 메시지는 Sendbird, 채팅방 생성과 검색, 신고와 삭제는 백엔드 API로 분리',
      'Android 개발자 2명이 채팅 구현을 분담했으며 Sendbird 연동, 양방향 페이징, 사진과 영상 메시지를 담당',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'MVI / MVVM', 'Sendbird', 'Media3'],
    image: {
      src: '/images/project-vuddy.jpg',
      alt: 'Android 채팅 화면과 실시간 메시징, 운영 API의 경계를 나타낸 도트 다이어그램',
    },
    caseStudy: {
      problem: '실시간 메시징과 운영 기능이 모두 Sendbird에 의존하면 제품 정책도 외부 SDK 제약에 종속될 위험이 있었습니다.',
      decision: '실시간 메시징은 Sendbird, 채팅방 생성과 검색, 신고와 삭제는 백엔드 API로 책임을 분리했습니다.',
      verification: '출시 전에 대규모 그룹 푸시 제약을 확인하여 자체 푸시로 전환했습니다. Sendbird 연동, 양방향 페이징, 사진과 영상 메시지를 담당했습니다.',
    },
    links: [
      {
        label: '앱 보기',
        href: 'https://play.google.com/store/apps/details?hl=ko&id=io.levvels.vuddy',
        external: true,
      },
    ],
  },
  {
    name: 'LLM 평가 체계',
    eyebrow: 'AI PRODUCT',
    summary: '질문과 채점 기준, 서빙 설정을 고정하여 동일한 조건에서 모델을 비교',
    role: '데이터 정제, LoRA 추가 학습, 평가와 vLLM 서빙',
    outcomes: [
      '질문과 채점 순서, 서빙 설정을 고정하고 모델 정보를 가린 상태에서 응답을 비교',
      '직접 구축한 LLM 채점 도구로 동일 입력 40건 비교, 종합 점수 76.96 → 82.28',
      '치명적 실패 4건 → 0건, 제품 규칙 위반 4건 → 1건. 재미와 상태 이해 점수는 하락',
      '자동 평가 결과를 실제 대화와 대조하고, 학습 데이터와 중복된 평가 문항을 폐기한 후 중복 검사 추가',
    ],
    technologies: ['Python', 'PyTorch', 'LoRA', 'LLM Evaluation', 'vLLM'],
    image: {
      src: '/images/project-llm-evaluation.jpg',
      alt: '동일한 평가 데이터로 두 모델을 비교하고 결과를 검증하는 도트 다이어그램',
    },
    caseStudy: {
      problem: '캐릭터 대화 품질은 평가 기준이 명확하지 않았고, 종합 점수 상승이 재미와 상태 이해 개선을 보장하지 않았습니다.',
      decision: '질문과 채점 순서, 서빙 설정을 고정하고 모델 정보를 가렸습니다. 응답 형식과 캐릭터 일관성, 상태 이해, 치명적 실패를 구분하여 채점하고 자동 평가 결과를 실제 대화와 대조했습니다.',
      verification: '동일 입력 40건에서 종합 점수 76.96 → 82.28, 치명적 실패 4건 → 0건, 제품 규칙 위반 4건 → 1건이었습니다. 재미와 상태 이해 점수는 낮아졌습니다.',
    },
    links: [],
  },
  {
    name: 'Momentica',
    eyebrow: 'ANDROID PRODUCT',
    summary: '영상 알람을 설계하고 앱 종료와 재부팅 이후에도 예약이 복원되도록 구현',
    role: '영상 알람, 포토카드 도감',
    outcomes: [
      'Room과 AlarmManager로 알람을 저장하고 앱 종료와 재부팅 이후 예약을 복원',
      '같은 영상 파일을 여러 알람이 공유해도 사용 중인 파일은 삭제되지 않도록 처리',
      '포토카드를 길게 누른 위치에서 화면 중앙으로 이동시키는 퀵뷰 구현',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'AlarmManager'],
    image: {
      src: '/images/project-momentica.jpg',
      alt: '알람 데이터 저장, 영상 파일, 재부팅 복원과 실행 흐름을 나타낸 도트 다이어그램',
    },
    caseStudy: {
      problem: '영상 알람은 휴대전화 재부팅과 잠금 화면을 처리해야 했고, 여러 알람이 같은 영상 파일을 공유할 수 있었습니다.',
      decision: '알람 데이터 저장과 실행 예약을 분리하고, 재부팅 복원과 파일 삭제 규칙을 별도로 정의했습니다.',
      verification: 'Android 14 기기에서 앱 종료와 재부팅 뒤 알람 복원, 잠금 화면 실행을 테스트 빌드로 확인했습니다.',
    },
    links: [
      {
        label: '앱 보기',
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
    summary: 'AI 문장의 번역투와 과도한 격식을 교정하는 오픈소스 한국어 도구',
    evidence: '검증 항목 110개, JSONL 검증 스크립트와 GitHub Actions 구성',
    technologies: ['Agent Skill', 'JSONL', 'GitHub Actions'],
    link: {
      label: 'GitHub 보기',
      href: 'https://github.com/EvergreenTree97/K-Humanizer',
      external: true,
    },
  },
]
