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
  highlights: string[]
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
    highlights: [
      '구조 설계: Jetpack Compose 기반 멀티모듈 구조와 MVI 상태 처리 설계, Gradle Build Logic 구성',
      '인증: 여러 요청이 동시에 401을 받을 때 한 요청만 토큰을 갱신하고 나머지는 완료된 결과를 재사용하는 synchronized 기반 동시성 처리 구현',
      '채팅: 자체 WebSocket과 Sendbird를 샘플 앱과 기술 문의로 비교 검증한 뒤 Sendbird 도입. Sendbird 연동 구조와 양방향 페이징, 미디어 메시지 구현',
      '푸시: 대규모 그룹 푸시 제한을 출시 전에 확인해 자체 푸시로 전환하고 채팅방 생성, 목록과 검색을 Backend API에 연동',
      '미디어: 재생 상태와 생명주기를 ViewModel 범위에서 관리하고 일반 화면과 전체 화면이 같은 ExoPlayer를 다시 연결하도록 구성해 화면 전환 후에도 재생 위치 유지',
    ],
    media: [
      {
        type: 'image',
        src: '/screens/vuddy-home.jpg',
        alt: 'Vuddy 홈에서 크리에이터 굿즈를 탐색하는 Play Store 소개 화면',
        caption: 'HOME / 크리에이터 굿즈 탐색',
        width: 405,
        height: 720,
        featured: true,
      },
      { type: 'image', src: '/screens/vuddy-chat-figma.png', alt: 'Vuddy 공개 채팅 안에서 특정 사용자에게 답장하는 화면', caption: 'CHATTING / 특정 사용자에게 답장', width: 360, height: 800 },
      { type: 'image', src: '/screens/vuddy-card.jpg', alt: 'Vuddy 이미지, 영상과 음성을 전환하는 디지털 카드 상세 화면', caption: 'MEDIA / 디지털 카드 상세', width: 405, height: 720 },
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
    headline: '사내 AI TF에서 캐릭터 대화 모델의 파인튜닝과 평가, 서빙을 맡았습니다. 이후 해당 모델을 적용한 신규 Android 앱 개발에 참여했습니다.',
    technologies: ['Python', 'PyTorch', 'LoRA / SFT', 'vLLM', 'Kotlin', 'Jetpack Compose', 'SSE', 'Play Billing'],
    highlights: [
      '파인튜닝: B200 GPU 환경에서 캐릭터 대화 모델의 데이터 구성과 학습 방식을 설계하고 데이터 정제부터 LoRA 기반 SFT까지 담당',
      '평가: 자동 평가에서 내부 평가 85/100을 기록하고 팀의 실제 대화 심사를 거쳐 제품에 적용할 모델로 선정',
      '서빙: vLLM 기반 모델 서빙과 내부 데모 담당',
      '채팅: TF에서 개발한 모델을 사용하는 SSE 기반 캐릭터 채팅 기능 개발 주도',
      '결제: Google Play Billing 기반 인앱 결제 흐름 구현 및 검증. 상품 조회, 구매 완료, 취소와 구매 복구를 Backend 구매 검증과 연결하고 결제 화면에 스크린샷 테스트 적용',
      '배포: Firebase App Distribution과 Play 비공개 트랙 배포 자동화',
    ],
    // 대시보드 캡처는 사내 평가 스냅샷, 채팅 화면은 사내 Figma 시안 캡처다 (2026-08-23 사용자 게시 결정).
    media: [
      { type: 'image', src: '/screens/smt-dashboard.jpg', alt: '캐릭터 대화 모델 평가 대시보드 화면', caption: 'MODEL EVALUATION / 대화 모델 평가', width: 1080, height: 810 },
      { type: 'image', src: '/screens/smt-chat-masked.png', alt: '캐릭터 이름을 마스킹한 AI 캐릭터 앱 채팅 화면 시안', caption: 'CHARACTER CHAT / AI 캐릭터 채팅', width: 375, height: 812 },
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
    highlights: [
      '3D 포토카드: 포토카드 목록, 상세, 등록과 스캔 화면 개발. 길게 누른 카드를 화면 중앙으로 이동시키는 퀵뷰와 3D 회전을 구현하고 SceneView에 Bitmap을 설정하는 과정에서 발생한 메모리 누수 해결',
      '테이크 홈 개편: 헤드라인 배너, 진행 중인 아티스트, 판매 중인 테이크와 Artist Top Ranker 구현',
      'Artist Top Ranker: Compose pointerInput API로 가로 스와이프를 구현하고 프로필 블러 이미지를 별도 Composable로 분리해 진행률 갱신 때 반복되던 이미지 캐시 초기화 문제 해결',
      '알람 기능: Room과 AlarmManager 기반 영상 알람 개발. 앱 종료와 락스크린 상태, 기기 재부팅 후에도 알람 실행을 확인하고 설정 복원과 락스크린 표시 구현',
    ],
    media: [
      { type: 'image', src: '/screens/mmtc-photocard-figma.png', alt: 'MOMENTICA 포토카드를 길게 눌러 SceneView 기반 3D 카드로 확인하는 화면', caption: '3D PHOTOCARD / SceneView 기반', width: 360, height: 800 },
      { type: 'image', src: '/screens/mmtc-take-home-figma.png', alt: 'MOMENTICA LIVE NOW와 Artist Top Ranker가 포함된 테이크 홈 개편 화면', caption: 'TAKE HOME / 홈 화면 개편', width: 1080, height: 2400 },
      { type: 'image', src: '/screens/mmtc-alarm-figma.png', alt: 'MOMENTICA 테이크 영상이 락스크린에서 재생되는 알람 화면', caption: 'TAKE ALARM / 락스크린 영상 알람', width: 360, height: 800 },
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
    eyebrow: 'OPEN SOURCE',
    summary: '이미지 로딩 상태에 Shimmer를 적용하는 Jetpack Compose 라이브러리',
    evidence: 'Compose Modifier API로 설계해 JitPack에 공개 배포',
    technologies: ['Kotlin', 'Jetpack Compose', 'Coil', 'JitPack'],
    link: {
      label: 'GitHub',
      href: 'https://github.com/EvergreenTree97/easy-shimmer-compose',
      external: true,
    },
  },
  {
    name: 'K-Humanizer',
    eyebrow: 'OPEN SOURCE',
    summary: '한국어 문서의 번역투와 과한 격식을 다듬는 문체 교정 도구',
    evidence: '한국어 문체 교정 노하우를 Codex, Claude와 Cursor에서 쓸 수 있는 Agent Skill로 공개',
    technologies: ['Agent Skill', 'Codex', 'Claude', 'Cursor'],
    link: {
      label: 'GitHub',
      href: 'https://github.com/EvergreenTree97/K-Humanizer',
      external: true,
    },
  },
]
