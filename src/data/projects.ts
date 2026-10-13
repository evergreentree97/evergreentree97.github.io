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
  period: string
  headline?: string
  contribution: { text: string; emphasis?: string }[]
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
    eyebrow: 'Android',
    period: '2024.05 - 현재',
    headline: '크리에이터와 팬이 대화하고 디지털 콘텐츠를 즐기는 앱입니다.',
    contribution: [
      { text: 'Jetpack Compose 기반 멀티모듈 구조를 설계하고 인증, 채팅, 미디어 재생을 개발했습니다.', emphasis: '멀티모듈 구조' },
      { text: '동시 토큰 갱신을 제어하고, 답장 원문 이동에 양방향 페이징을 적용했습니다. 전체 화면 전환 후에도 미디어 재생 상태를 유지하도록 구현했습니다.', emphasis: '동시 토큰 갱신' },
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'MVI', 'Sendbird', 'Media3'],
    highlightGroups: [
      {
        highlights: [
          '멀티모듈 구조와 화면 이동: Jetpack Compose 기반 멀티모듈 구조와 MVI 상태 처리를 설계했습니다. feature 모듈이 서로를 직접 참조하지 않도록 화면 이동을 Router 인터페이스로 분리했습니다. UI를 띄우지 않고 mock Router로 화면 이동 로직을 테스트했습니다.',
          '토큰 갱신 동시성 제어: 여러 API 요청이 동시에 401 응답을 받아도 토큰 갱신이 중복되지 않도록 synchronized로 제어했습니다. 먼저 들어온 요청이 토큰을 갱신하면 대기 중인 요청은 갱신된 토큰을 재사용하도록 구현했습니다.',
          '채팅과 양방향 페이징: Sendbird 연동 구조를 설계하고 사진과 영상 메시지를 구현했습니다. 답장 원문으로 이동했을 때 해당 메시지의 앞뒤 대화도 확인할 수 있도록 양방향 페이징을 적용했습니다.',
          '채팅과 푸시 발송 분리 제안: 참여자가 많은 채팅방에 알림을 보낼 때 발생하는 Sendbird의 제약을 출시 전에 확인했습니다. 채팅은 Sendbird로 처리하고 알림은 자체 발송하는 구조를 제안했습니다.',
          '채팅방 API 연동: 클라이언트마다 채팅방 정보를 다르게 해석하는 문제를 확인했습니다. Backend에서 채팅방 정보를 관리하도록 요청하고, Android 앱의 채팅방 생성, 목록 조회와 검색을 해당 API와 연동했습니다.',
          'ExoPlayer 재생 상태와 생명주기 관리: 재생 상태와 생명주기를 ViewModel에서 관리했습니다. 일반 화면과 전체 화면에서 같은 ExoPlayer를 다시 연결해 화면 전환 후에도 재생 위치를 유지했습니다.',
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
    eyebrow: 'LLM fine-tuning / Android',
    period: '2026.02 - 현재',
    contribution: [
      { text: '대화 데이터셋 구축, LoRA 파인튜닝과 vLLM 서빙을 맡았습니다.', emphasis: 'LoRA 파인튜닝과 vLLM 서빙' },
      { text: 'Android 앱의 SSE 스트리밍 채팅과 구독, 인앱 상품 결제를 개발했습니다.', emphasis: 'SSE 스트리밍 채팅' },
    ],
    technologies: ['Python', 'PyTorch', 'LoRA / SFT', 'vLLM', 'Kotlin', 'Jetpack Compose', 'SSE', 'Play Billing'],
    highlightGroups: [
      {
        title: '모델 학습과 평가',
        highlights: [
          '데이터셋 구축과 LoRA 파인튜닝: 캐릭터 대화 모델의 학습 데이터를 구성하고 학습 방식을 설계했습니다. 데이터 정제, LoRA 기반 SFT와 자동 평가를 구현했습니다. 개발한 모델은 팀의 대화 테스트를 거쳐 서비스에 사용할 모델로 선정됐습니다.',
          '대화 테스트용 웹 MVP: 학습한 모델을 vLLM으로 서빙하고 팀원이 직접 대화하며 검토할 수 있는 웹 MVP를 만들었습니다. 팀원의 대화 피드백을 받아 학습 데이터를 수정하고 기능 실험에 반영했습니다.',
        ],
      },
      {
        title: 'Android 채팅과 결제 개발',
        highlights: [
          'SSE 스트리밍 채팅: 사내 AI 모델의 답변을 SSE로 수신하는 Android 캐릭터 채팅을 개발했습니다. 예외 처리와 재시도 로직을 구현하고 단위 테스트로 주요 동작을 확인했습니다.',
          '구독과 인앱 결제 연동: Google Play Billing으로 구독과 인앱 상품의 조회, 구매, 결제 완료, 취소와 복원 처리를 구현하고 Backend 구매 검증과 연동했습니다. 결제 로직은 단위 테스트로, 결제 UI는 스크린샷 테스트로 검증했습니다.',
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
    eyebrow: 'Android',
    period: '2023.10 - 2024.05',
    headline: '디지털 포토카드를 즐기는 글로벌 팬 플랫폼입니다.',
    contribution: [
      { text: 'SceneView 기반 3D 포토카드와 테이크 홈, 영상 알람을 개발했습니다.', emphasis: '3D 포토카드' },
      { text: 'Heap Dump로 Bitmap 메모리 누수를 추적하고, 이미지 캐시가 반복 초기화되는 문제를 해결했습니다.', emphasis: 'Bitmap 메모리 누수' },
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'AlarmManager'],
    highlightGroups: [
      {
        highlights: [
          '3D 포토카드: SceneView로 3D 포토카드 화면과 퀵뷰를 구현했습니다. Android Profiler의 Heap Dump로 SceneView 내부 Bitmap 메모리 누수를 추적하고 Composable이 Composition에서 제거될 때 자원을 명시적으로 해제하도록 수정했습니다.',
          '테이크 홈 개편: 헤드라인 배너, 진행 중인 아티스트와 판매 중인 테이크 영역을 구현했습니다. Artist Top Ranker는 Compose pointerInput API로 가로 스와이프를 구현했습니다. 프로필 블러 이미지를 별도 Composable로 분리해 진행률이 갱신될 때마다 이미지 캐시가 초기화되는 문제를 해결했습니다.',
          '영상 알람: 사용자가 고른 테이크 영상으로 알람이 울리도록 Room에 설정을 저장하고 AlarmManager로 알람을 예약했습니다. 앱 종료 후, 락스크린 상태와 기기 재부팅 후에도 알람 동작을 확인했습니다. 설정 복원과 락스크린 표시도 구현했습니다.',
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
  link: ProjectLink
}

export const moreProjects: MoreProject[] = [
  {
    name: 'EasyShimmerCompose',
    eyebrow: 'OPEN SOURCE',
    summary: '이미지가 로딩되는 동안 Shimmer 효과를 표시하는 Jetpack Compose 라이브러리를 공개했습니다. Coil의 이미지 로딩 상태와 연동해 사용할 수 있습니다.',
    link: {
      label: 'GitHub',
      href: 'https://github.com/EvergreenTree97/easy-shimmer-compose',
      external: true,
    },
  },
  {
    name: 'K-Humanizer',
    eyebrow: 'OPEN SOURCE',
    summary: 'AI 특유의 문체와 번역투를 자연스러운 한국어로 다듬는 Agent Skill입니다. Codex, Claude, Cursor에서 사용할 수 있도록 공개했습니다.',
    link: {
      label: 'GitHub',
      href: 'https://github.com/EvergreenTree97/K-Humanizer',
      external: true,
    },
  },
]
