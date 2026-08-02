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
    summary: '신규 앱에서 멀티모듈 구조와 채팅, 미디어 개발을 담당',
    role: '멀티모듈 구조, Sendbird 연동과 미디어',
    outcomes: [
      '초기 멀티모듈 구조를 설계하고 공통 UI와 인증 흐름을 구성',
      '실시간 메시지는 Sendbird, 채팅방 생성과 검색, 신고와 삭제는 백엔드 API로 분리',
      '채팅은 Android 개발자 2명이 나눠 구현했고 Sendbird 연동과 양방향 페이징, 미디어 메시지를 담당',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'MVI / MVVM', 'Sendbird', 'Media3'],
    image: {
      src: '/images/project-vuddy.jpg',
      alt: 'Android 채팅 화면과 실시간 메시징, 운영 API의 경계를 나타낸 도트 다이어그램',
    },
    caseStudy: {
      problem: '실시간 메시지와 운영 기능을 Sendbird에 모두 맡기면 제품 정책이 외부 채팅 SDK 제약에 묶일 수 있었습니다.',
      decision: '메시지 송수신은 Sendbird에 두고, 채팅방 생성과 검색, 신고와 삭제는 백엔드 API로 분리했습니다.',
      verification: '출시 전 대규모 그룹 푸시 제약을 확인해 자체 푸시로 전환했습니다. 저는 Sendbird 연동과 양방향 페이징, 사진과 영상 메시지를 맡았습니다.',
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
    summary: '질문과 채점 기준, 서빙 설정을 고정하고 같은 조건에서 모델을 비교',
    role: '데이터 정제, LoRA 추가 학습, 평가와 vLLM 서빙',
    outcomes: [
      '질문과 채점 순서, 서빙 설정을 고정하고 모델 이름을 가린 채 응답을 비교',
      '자체 구축한 LLM 채점 도구로 동일 입력 40건 비교, 종합 점수 76.96 → 82.28',
      '제품 규칙 위반 4건 → 1건, 재미와 상태 이해 점수는 하락',
      '채점 결과의 일관성을 따로 확인하고, 학습 데이터와 겹친 평가 문항은 폐기한 뒤 중복 검사 추가',
    ],
    technologies: ['Python', 'PyTorch', 'LoRA', 'LLM Evaluation', 'vLLM'],
    image: {
      src: '/images/project-llm-evaluation.jpg',
      alt: '동일한 평가 데이터로 두 모델을 비교하고 결과를 검증하는 도트 다이어그램',
    },
    caseStudy: {
      problem: '캐릭터 대화 품질은 기준이 모호했고, 평균 점수가 올라도 재미나 상태 이해가 나빠질 수 있었습니다.',
      decision: '질문과 채점 순서, 서빙 설정을 고정하고 모델 이름을 가렸습니다. 응답 형식과 캐릭터 일관성, 상태 이해, 치명적 실패를 나눠 채점했고 결과의 일관성도 따로 확인했습니다.',
      verification: '동일 입력 40건에서 종합 점수 76.96 → 82.28, 치명적 실패 4건 → 0건, 제품 규칙 위반 4건 → 1건이었습니다. 재미와 상태 이해 점수는 낮아졌습니다.',
    },
    links: [],
  },
  {
    name: 'Momentica',
    eyebrow: 'ANDROID PRODUCT',
    summary: '포토카드 도감과 영상 알람을 맡고, 알람이 앱 종료와 재부팅 뒤에도 실행되도록 설계',
    role: '포토카드 도감과 영상 알람',
    outcomes: [
      'Room과 AlarmManager로 알람을 저장하고 앱 종료와 재부팅 뒤에도 예약을 복원',
      '같은 영상 파일을 여러 알람이 공유해도 사용 중인 파일은 삭제되지 않도록 처리',
      '길게 누른 카드가 화면 중앙으로 이동하는 퀵뷰를 만들고 불필요한 리컴포지션을 줄임',
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'AlarmManager'],
    image: {
      src: '/images/project-momentica.jpg',
      alt: '알람 데이터 저장, 영상 파일, 재부팅 복원과 실행 흐름을 나타낸 도트 다이어그램',
    },
    caseStudy: {
      problem: '영상 알람은 휴대전화 재부팅과 잠금 화면을 처리해야 했고, 여러 알람이 같은 영상 파일을 공유할 수 있었습니다.',
      decision: '알람 데이터 저장과 실행 예약을 분리하고, 재부팅 복원과 파일 삭제 규칙을 따로 만들었습니다.',
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
    summary: '이미지 로딩 상태에 Shimmer를 쉽게 적용하도록 만든 Jetpack Compose 라이브러리',
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
    summary: 'AI가 만든 한국어 문장에서 번역투와 과한 격식을 줄이는 공개 문장 교정 도구',
    evidence: '검증 항목 110개, JSONL 검증 스크립트와 GitHub Actions 구성',
    technologies: ['Agent Skill', 'JSONL', 'GitHub Actions'],
    link: {
      label: 'GitHub 보기',
      href: 'https://github.com/EvergreenTree97/K-Humanizer',
      external: true,
    },
  },
]
