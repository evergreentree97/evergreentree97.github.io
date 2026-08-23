export type ProjectLink = {
  label: string
  href: string
  external?: boolean
}

export type ProjectScreenshot = {
  src: string
  alt: string
  width: number
  height: number
}

export type FeaturedProject = {
  id: 'vuddy' | 'model-evaluation' | 'momentica'
  name: string
  eyebrow: string
  headline: string
  technologies: string[]
  highlights: string[]
  // Google Play 공식 스크린샷을 기본으로 쓴다. 사내 화면은 사용자가 게시를 결정한 것만 쓴다.
  screenshots: ProjectScreenshot[]
  links: ProjectLink[]
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'vuddy',
    name: 'Vuddy',
    eyebrow: 'ANDROID PRODUCT',
    headline: '신규 앱의 멀티모듈 구조 설계부터 실시간 채팅 개발, QA 배포와 출시 후 운영까지 담당했습니다.',
    technologies: ['Kotlin', 'Jetpack Compose', 'MVI', 'Sendbird', 'Media3'],
    highlights: [
      'Jetpack Compose 기반 신규 앱의 멀티모듈 구조와 MVI 상태 처리, Gradle Build Logic을 포함한 공통 개발 기준 설계',
      '출시 일정과 서버 개발 범위를 기준으로 자체 WebSocket 구현과 Sendbird를 비교하고 샘플 앱과 기술 문의로 주요 기능과 제한사항을 검증한 뒤 Sendbird 도입',
      '실시간 메시징은 Sendbird가 맡고 채팅방 정보, 검색, 입장 조건과 운영 정책은 Backend가 관리하도록 구성',
      '채팅 구조와 Sendbird 연동, 양방향 페이징과 미디어 메시지 담당 (채팅 화면은 동료와 분담)',
      '대규모 그룹 푸시 제한을 출시 전에 확인해 자체 푸시로 전환하고 채팅방 생성, 목록과 검색을 Backend API에 연동',
    ],
    screenshots: [
      { src: '/screens/vuddy-chat.jpg', alt: 'Vuddy 크리에이터와 팬의 1:1 채팅 화면', width: 405, height: 720 },
      { src: '/screens/vuddy-home.jpg', alt: 'Vuddy 홈의 크리에이터 굿즈 목록 화면', width: 405, height: 720 },
      { src: '/screens/vuddy-card.jpg', alt: 'Vuddy 버디카드 상세 화면', width: 405, height: 720 },
    ],
    links: [
      {
        label: 'Google Play에서 보기',
        href: 'https://play.google.com/store/apps/details?hl=ko&id=io.levvels.vuddy',
        external: true,
      },
    ],
  },
  {
    id: 'model-evaluation',
    name: '캐릭터 대화 모델과 AI 캐릭터 앱',
    eyebrow: 'AI MODEL & ANDROID PRODUCT',
    headline: '사내 AI TF에서 캐릭터 대화 모델의 데이터 정제, LoRA 기반 SFT, 자동 평가와 vLLM 서빙을 맡았고, 해당 모델을 사용하는 신규 AI 캐릭터 앱에서 SSE 기반 채팅, 결제와 광고를 주도했습니다.',
    technologies: ['Python', 'PyTorch', 'LoRA', 'vLLM', 'Kotlin', 'Jetpack Compose', 'SSE', 'Play Billing'],
    highlights: [
      'B200 GPU 환경에서 캐릭터 대화 모델의 데이터 구성과 학습 방식을 설계하고 데이터 정제, LoRA 기반 SFT, 자동 평가, vLLM 서빙과 내부 데모 담당',
      '내부 평가 85/100을 기록한 뒤 팀의 실제 대화 심사를 거쳐 프로덕션 적용 가능한 모델로 선정 (모델 구현은 단독, 심사와 선정은 팀이 공동 진행)',
      'TF에서 개발한 모델을 사용하는 SSE 기반 캐릭터 채팅 기능 개발 주도',
      'Google Play Billing 기반 구독과 단건 결제의 상품 조회, 구매, 완료, 취소와 복구를 Backend 구매 검증과 연결',
      'Firebase App Distribution, Sandbox QA, Playtest 빌드와 Play 비공개 트랙 배포 절차 자동화',
    ],
    // 대시보드 캡처는 사내 평가 스냅샷, 채팅 화면은 사내 Figma 시안 캡처다 (2026-08-23 사용자 게시 결정).
    screenshots: [
      { src: '/screens/smt-dashboard.jpg', alt: '캐릭터 대화 모델 평가 대시보드 화면', width: 1080, height: 810 },
      { src: '/screens/smt-chat.jpg', alt: 'AI 캐릭터 앱 채팅 화면 시안', width: 375, height: 812 },
      { src: '/screens/smt-chatlist.jpg', alt: 'AI 캐릭터 앱 채팅 목록 시안', width: 375, height: 812 },
    ],
    links: [],
  },
  {
    id: 'momentica',
    name: 'Momentica',
    eyebrow: 'ANDROID PRODUCT',
    headline: '포토카드 도감과 영상 알람 개발을 주도했습니다.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'AlarmManager'],
    highlights: [
      '포토카드 도감의 목록, 상세, 등록과 스캔 화면 개발. 길게 누른 카드를 화면 중앙으로 이동시키는 퀵뷰와 3D 회전을 구현하고 SceneView에 Bitmap을 설정하는 과정에서 발생한 메모리 누수 해결',
      'Room과 AlarmManager 기반 영상 알람 개발. 앱 종료와 화면 꺼짐 상태에서 알람을 실행하고 기기 재부팅 후 설정 복원과 잠금 화면 표시 개발',
      '앱 종료, 화면 잠금과 기기 재부팅 조건에서 알람 실행 확인',
    ],
    screenshots: [
      { src: '/screens/mmtc-scan.jpg', alt: 'MOMENTICA 포토카드 촬영 등록 화면', width: 405, height: 720 },
      { src: '/screens/mmtc-board.jpg', alt: 'MOMENTICA TAKE 도감 화면', width: 405, height: 720 },
      { src: '/screens/mmtc-unpack.jpg', alt: 'MOMENTICA TAKE 언팩 화면', width: 405, height: 720 },
    ],
    links: [
      {
        label: 'Google Play에서 보기',
        href: 'https://play.google.com/store/apps/details?hl=ko&id=io.levvels.mmtc',
        external: true,
      },
    ],
  },
]

export type MoreProject = {
  name: string
  eyebrow: string
  summary: string
  evidence: string
  technologies: string[]
  link: ProjectLink
}

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
