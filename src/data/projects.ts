export type ProjectLink = {
  label: string
  href: string
  external?: boolean
}

type ProjectMediaBase = {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
  featured?: boolean
  highlightIndex?: number
}

export type ProjectImage = ProjectMediaBase & {
  type: 'image'
}

export type ProjectVideo = ProjectMediaBase & {
  type: 'video'
  poster: string
  posterTime?: number
}

export type ProjectMedia = ProjectImage | ProjectVideo

export type FeaturedProject = {
  id: 'vuddy' | 'model-evaluation' | 'momentica'
  name: string
  eyebrow: string
  headline: string
  technologies: string[]
  highlightGroups: { title?: string; highlights: string[] }[]
  // Google Play 공식 스크린샷을 기본으로 쓴다. 사내 화면은 사용자가 게시를 결정한 것만 쓴다.
  media: ProjectMedia[]
  links: ProjectLink[]
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'vuddy',
    name: 'Vuddy',
    eyebrow: 'ANDROID',
    headline: '크리에이터와 팬이 채팅과 디지털 콘텐츠로 만나는 팬 플랫폼입니다. 앱의 공통 기반과 주요 기능을 개발하고 Google Play 출시 후 운영까지 맡았습니다.',
    technologies: ['Kotlin', 'Jetpack Compose', 'MVI', 'Sendbird', 'Media3'],
    highlightGroups: [
      {
        highlights: [
          '구조 설계와 화면 이동 테스트: Jetpack Compose 기반 멀티모듈 구조와 MVI 상태 처리 설계. 화면 이동을 Router 인터페이스로 분리해 feature 모듈 간 의존을 제거하고 mock Router로 UI 없이 이동 로직을 테스트로 검증',
          '토큰 갱신 동시성 제어: 여러 요청이 동시에 401을 받을 때 한 요청만 토큰을 갱신하고 나머지는 완료된 결과를 재사용하는 synchronized 기반 동시성 처리 구현. 네트워크 오류는 토큰을 유지한 채 전달하고 인증 만료는 로그인 흐름으로 연결했습니다. 갱신 후 다시 401이 발생하면 retry를 제한하도록 처리하고 Authenticator와 Refresher 단위 테스트로 검증',
          '채팅: Sendbird 연동 구조를 설계하고 답장 원문으로 이동할 때 앞뒤 메시지를 함께 불러오는 양방향 페이징과 사진 및 영상 메시지 구현',
          '푸시: 참여자가 많은 채팅방에 알림을 보낼 때 발생하는 Sendbird의 제약을 출시 전에 확인하고 채팅은 Sendbird로 처리하되 알림은 자체 발송하는 구조 제안',
          '채팅방 관리: 채팅방 정보를 클라이언트마다 다르게 해석하는 문제를 확인해 Backend에서 관리하도록 요청하고 채팅방 생성, 목록과 검색 API를 Android에 연동',
          '강의 플레이어: 공통 강의 플레이어의 재생 상태와 생명주기를 ViewModel 범위에서 관리하고 일반 화면과 전체 화면이 같은 ExoPlayer를 다시 연결하도록 구성해 화면 전환 후에도 재생 위치 유지',
        ],
      },
    ],
    media: [
      {
        type: 'image',
        src: '/screens/vuddy-home.jpg',
        alt: 'Vuddy 홈에서 크리에이터 굿즈를 탐색하는 Play Store 소개 화면',
        caption: 'HOME / 크리에이터 굿즈 탐색',
        width: 405,
        height: 720,
      },
      { type: 'image', src: '/screens/vuddy-chat-figma.png', alt: 'Vuddy 공개 채팅 안에서 특정 사용자에게 답장하는 화면', caption: 'CHATTING / 특정 사용자에게 답장', width: 360, height: 800, featured: true, highlightIndex: 2 },
      { type: 'image', src: '/screens/vuddy-card.jpg', alt: 'Vuddy 이미지, 영상과 음성을 전환하는 디지털 카드 상세 화면', caption: 'MEDIA / 디지털 카드 상세', width: 405, height: 720, highlightIndex: 5 },
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
    eyebrow: 'LLM FINE-TUNING / ANDROID',
    headline: '사내 AI TF에서 캐릭터 대화 모델의 데이터 구성부터 파인튜닝, 평가와 서빙을 맡았습니다. 해당 모델을 사용하는 Android 앱에서는 SSE 채팅과 Google Play 결제를 개발했습니다.',
    technologies: ['Python', 'PyTorch', 'LoRA / SFT', 'vLLM', 'Kotlin', 'Jetpack Compose', 'SSE', 'Play Billing'],
    highlightGroups: [
      {
        title: '모델 개발과 팀 검토',
        highlights: [
          '학습과 평가: 캐릭터 대화 모델의 데이터 구성과 학습 방식을 설계하고 데이터 정제, LoRA 기반 SFT와 자동 평가 구현. 개발한 모델은 팀의 실제 대화 검토를 거쳐 프로덕션 적용 가능한 모델로 선정',
          '모델 검토 도구와 피드백: 학습한 모델과 팀원이 직접 대화할 수 있도록 vLLM 서빙과 웹 MVP 구현. 팀원의 대화 피드백을 받아 학습 데이터를 수정하고 기능 실험에 반영',
        ],
      },
      {
        title: 'Android 채팅과 결제 개발',
        highlights: [
          'SSE 채팅과 예외 처리: 사내 AI 모델을 활용한 SSE 기반 캐릭터 채팅 개발 주도. 다양한 오류 상황에 대응하는 예외 처리와 재시도 로직을 구현하고 단위 테스트로 주요 동작 검증',
          '구독과 단건 결제: Google Play Billing의 상품 조회, 구매, 완료, 취소와 복구를 Backend 구매 검증과 연결. 단위 테스트로 결제 로직을 검증하고 스크린샷 테스트로 결제 화면 표시 결과 확인',
        ],
      },
    ],
    // 공개 자산 기록에 있는 이름과 제목을 가린 채팅 화면만 사용한다.
    media: [
      { type: 'image', src: '/screens/smt-chat-masked.png', alt: '캐릭터 이름을 마스킹한 AI 캐릭터 앱 채팅 화면 시안', caption: 'CHARACTER CHAT / AI 캐릭터 채팅', width: 375, height: 812, featured: true },
      { type: 'image', src: '/screens/smt-chatlist-masked.png', alt: '캐릭터 이름을 마스킹한 AI 캐릭터 앱 채팅 목록 시안', caption: 'CHAT LIST / 캐릭터 채팅 목록', width: 375, height: 812 },
    ],
    links: [],
  },
  {
    id: 'momentica',
    name: 'Momentica',
    eyebrow: 'ANDROID',
    headline: '글로벌 팬 플랫폼 Momentica에서 3D 포토카드와 영상 알람 기능을 개발했습니다.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'AlarmManager'],
    highlightGroups: [
      {
        highlights: [
          '3D 포토카드: SceneView 기반 3D 포토카드와 퀵뷰 구현. Android Profiler 힙 덤프로 SceneView 내부 Bitmap 메모리릭을 추적하고 Composition 종료 시 자원을 명시적으로 해제하도록 개선',
          '테이크 홈 개편: 헤드라인 배너, 진행 중인 아티스트와 판매 중인 테이크 구현. Artist Top Ranker는 Compose pointerInput API로 가로 스와이프를 구현하고 프로필 블러 이미지를 별도 Composable로 분리해 진행률 갱신 때 반복되던 이미지 캐시 초기화 문제 해결',
          '알람 기능: Room과 AlarmManager 기반 영상 알람 개발. 앱 종료와 락스크린 상태, 기기 재부팅 후에도 알람 실행을 확인하고 설정 복원과 락스크린 표시 구현',
        ],
      },
    ],
    media: [
      { type: 'image', src: '/screens/mmtc-photocard-figma.png', alt: 'MOMENTICA 포토카드를 길게 눌러 SceneView 기반 3D 카드로 확인하는 화면', caption: '3D PHOTOCARD / SceneView 기반', width: 360, height: 800, featured: true, highlightIndex: 0 },
      { type: 'image', src: '/screens/mmtc-take-home-figma.png', alt: 'MOMENTICA LIVE NOW와 Artist Top Ranker가 포함된 테이크 홈 개편 화면', caption: 'TAKE HOME / 홈 화면 개편', width: 1080, height: 2400, highlightIndex: 1 },
      { type: 'image', src: '/screens/mmtc-alarm-figma.png', alt: 'MOMENTICA 테이크 영상이 락스크린에서 재생되는 알람 화면', caption: 'TAKE ALARM / 락스크린 영상 알람', width: 360, height: 800, highlightIndex: 2 },
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
  technologies: string[]
  link: ProjectLink
}

export const moreProjects: MoreProject[] = [
  {
    name: 'EasyShimmerCompose',
    eyebrow: 'OPEN SOURCE',
    summary: '쉽게 스켈레톤 로딩을 사용할 수 있는 Jetpack Compose Shimmer 라이브러리를 오픈소스로 공개',
    technologies: ['Kotlin', 'Jetpack Compose', 'Coil'],
    link: {
      label: 'GitHub',
      href: 'https://github.com/EvergreenTree97/easy-shimmer-compose',
      external: true,
    },
  },
  {
    name: 'K-Humanizer',
    eyebrow: 'OPEN SOURCE',
    summary: 'AI 특유의 문체와 번역투를 자연스러운 한국어로 고치는 Agent Skill을 오픈소스로 공개',
    technologies: ['Agent Skill', 'Codex', 'Claude', 'Cursor'],
    link: {
      label: 'GitHub',
      href: 'https://github.com/EvergreenTree97/K-Humanizer',
      external: true,
    },
  },
]
