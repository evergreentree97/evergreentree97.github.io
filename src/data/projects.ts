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
    summary: '외부 SDK와 서버의 책임을 분리해 채팅 기능을 제품 정책에 맞게 운영할 수 있는 구조로 설계',
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
      verification: '대규모 그룹의 푸시 제약을 출시 전에 확인해 자체 푸시로 전환하고, 수신과 알림 이동 경로를 실기기에서 검증했습니다.',
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
    name: '캐릭터 대화 모델 학습과 평가',
    eyebrow: 'AI PRODUCT',
    summary: '캐릭터 대화 모델을 학습하고, 학습 데이터와 분리한 40개 대화로 운영 모델과 후보 모델의 응답을 비교',
    role: '대화 데이터 정제, LoRA 학습, LLM Judge 평가 도구 개발, vLLM 서빙',
    outcomes: [
      '판정 모델의 입력 길이 제한으로 채점 기준표가 잘리던 오류를 찾아 파싱 실패율 65~85% → 0%, 부풀려진 기준점 67.19 → 57.24로 정정',
      '평가용 대화 20건 중 19건이 신규 학습셋에 포함된 사실을 발견해 결과를 무효 처리하고, 중복 시 학습을 차단하도록 변경',
      '같은 대화 40건에서 종합 점수 76.96 → 82.28, 응답 형식 실패 4건 → 0건, 캐릭터 설정 위반 4건 → 1건. 재미 2.35점과 대화 상태 유지 0.35점 하락도 함께 기록',
    ],
    technologies: ['Python', 'PyTorch', 'LoRA', 'LLM Evaluation', 'vLLM'],
    image: {
      src: '/images/project-llm-evaluation.jpg',
      alt: '같은 대화 40건으로 운영 모델과 후보 모델을 비교하고 평가 오류를 검증하는 도트 다이어그램',
    },
    caseStudy: {
      problem: '평균 점수만으로는 사용자 행동 대필, 캐릭터 설정 위반, 응답 형식 실패가 가려졌습니다. 판정 입력이 잘리거나 평가 대화가 학습셋에 섞이면 점수 자체도 신뢰할 수 없었습니다.',
      decision: '판정 모델과 vLLM 설정을 고정하고, 모델 정보를 가린 채 학습 데이터와 겹치지 않는 같은 대화 40건을 비교했습니다. 종합 점수와 함께 응답 형식, 캐릭터 설정, 관계 상태, 사용자 행동 대필, 재미를 항목별로 기록했습니다.',
      verification: '종합 점수는 76.96에서 82.28로 상승했고, 응답 형식 실패는 4건에서 0건, 캐릭터 설정 위반은 4건에서 1건으로 줄었습니다. 재미와 상태 유지 등 4개 항목은 낮아졌고, 자동 승격 기준은 통과하지 못했습니다. 실제 대화를 추가로 확인한 뒤 후보 모델을 적용하고 하락 항목을 운영 과제로 남겼습니다.',
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
      src: '/images/project-momentica.jpg',
      alt: '알람 데이터 저장, 영상 파일, 재부팅 복원과 실행 흐름을 나타낸 도트 다이어그램',
    },
    caseStudy: {
      problem: '영상 알람은 휴대전화 재부팅과 잠금 화면을 처리해야 했고, 여러 알람이 같은 영상 파일을 공유할 수 있었습니다.',
      decision: '알람 데이터 저장과 실행 예약을 분리하고, 재부팅 복원과 파일 삭제 규칙을 별도로 정의했습니다.',
      verification: 'Android 알림 정책을 반영하고, 앱 종료와 재부팅 이후의 알람 복원, 잠금 화면 실행 등 주요 시나리오를 Android 14 실기기에서 검증했습니다.',
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
