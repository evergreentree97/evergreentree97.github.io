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

export type ProjectPoint = {
  text: string
  emphasis?: string
  children?: ProjectPoint[]
}

type ProjectStory = {
  title: string
  points: ProjectPoint[]
}

export type FeaturedProject = {
  id: 'vuddy' | 'model-evaluation' | 'momentica'
  name: string
  eyebrow: string
  period: string
  headline: string
  contribution: { title: string; points: ProjectPoint[] }[]
  technologies: string[]
  highlightGroups: { title?: string; highlights: ProjectStory[] }[]
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
    headline: '서브컬쳐 커머스 앱의 Android 아키텍처 설계와 주요 기능 개발',
    contribution: [
      {
        title: 'Multi-Module 아키텍처 설계와 개발 자동화',
        points: [
          { text: 'Clean Architecture와 MVI 패턴을 기반으로 Feature 단위 Multi-Module 구조 초기 설계', children: [
            { text: 'Gradle Convention Plugin으로 모듈별 빌드 설정과 의존성 관리 일원화' },
          ] },
          { text: 'feature 모듈, MVI 템플릿, 디자인 토큰과 Analytics Event 코드 생성 자동화로 반복 작성 작업 축소' },
          { text: '시맨틱 컬러 토큰 구조를 체계화해 브랜드 리뉴얼 시 개별 화면 코드 수정 없이 토큰 매핑 변경만으로 앱 전반의 테마 색상 일괄 반영', emphasis: '개별 화면 코드 수정 없이' },
        ],
      },
      {
        title: '실시간 채팅',
        points: [
          { text: '출시 일정에 맞춰 채팅 기능을 제공하기 위해 Sendbird SDK 도입 제안', children: [
            { text: '샘플 앱과 기술 문의로 필수 기능과 대규모 채팅방의 푸시 제약 사전 검토' },
          ] },
          { text: '클라이언트 간 데이터 불일치를 해결하기 위해 채팅방 관리 로직을 Backend로 옮기도록 제안하고 데이터 스키마 정리', children: [
            { text: 'Android의 채팅방 생성, 목록 조회와 검색을 자체 Backend API로 전환' },
          ] },
          { text: 'Sendbird SDK 의존성을 도메인 인터페이스로 분리', children: [
            { text: 'API 전환 시 인터페이스의 구현체를 교체하고 기존 UI 레이어는 수정 없이 재사용', emphasis: '기존 UI 레이어는 수정 없이 재사용' },
          ] },
        ],
      },
      {
        title: '영상 플레이어',
        points: [
          { text: 'Media3 ExoPlayer 기반 HLS 영상 플레이어 초기 구현과 코어 모듈 설계' },
          { text: '일반 화면과 전체 화면 간 플레이어 인스턴스를 공유해 끊김 없는 재생 환경 제공', emphasis: '끊김 없는 재생 환경' },
          { text: '정확한 시청 통계 집계를 위해 재생 위치와 누적 시청 시간을 분리해 서버에 기록' },
        ],
      },
      {
        title: '이미지 컴포넌트와 Custom Lint',
        points: [
          { text: '여러 화면에서 이미지 크기를 일관되게 처리하도록 리사이징 컴포넌트 개발', children: [
            { text: '홈, 채널, 샵 등 20개 이상 파일에 적용' },
          ] },
          { text: 'Custom Lint로 Compose Image 사용 규칙을 자동 검사해 모듈별 이미지 처리 방식 통일' },
        ],
      },
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'MVI', 'Sendbird', 'Media3'],
    highlightGroups: [
      {
        highlights: [
          {
            title: 'Router 기반 화면 이동',
            points: [
              {
                text: '내비게이션 로직을 Router 인터페이스로 추상화해 Feature 모듈 간 의존성 격리',
                children: [{ text: 'Mock Router를 통해 UI 없이 화면 전환 흐름을 검증할 수 있는 테스트 환경 구축' }]
              },
            ]
          },
          {
            title: '인증과 Token Refresh',
            points: [
              {
                text: '여러 API 요청에서 인증이 동시에 만료될 때 발생하는 Access Token 중복 갱신 방지',
                children: [{ text: '갱신 요청을 동기화하고, 대기 중인 요청은 먼저 갱신된 토큰을 재사용하도록 설계' }]
              }
            ]
          },
          {
            title: '디자인 토큰과 Analytics Event',
            points: [
              {
                text: '화면이 실제 색상값 대신 역할별 시맨틱 토큰을 참조하도록 기초 색상 팔레트와 시맨틱 컬러 토큰 분리'
              },
              {
                text: 'GitHub Actions를 구축해 디자인 토큰 JSON을 Kotlin 코드로 변환하고 PR을 생성하는 워크플로우 자동화'
              },
              {
                text: 'Notion에 정의한 이벤트를 Analytics Event 코드로 생성해 반복 작성 작업 축소'
              }
            ]
          },
          {
            title: 'Sendbird 푸시 제약',
            points: [
              {
                text: '대규모 채팅방의 푸시 제약을 확인해 Sendbird 메시징과 자체 푸시 발송을 분리하는 구조 제안'
              },
            ]
          },
          {
            title: '답장 원문 탐색',
            points: [
              {
                text: '현재 목록 밖의 답장 원문도 탐색할 수 있도록 원문 작성 시점을 기준으로 양방향 페이징 적용'
              }
            ]
          },
          {
            title: '시청 이력과 이어보기',
            points: [
              {
                text: 'ViewModel에서 플레이어의 재생 상태와 생명주기를 관리해 화면 전환 중 상태를 유지하고 백그라운드에서 불필요한 자원 점유 방지'
              },
              {
                text: '서버에 기록한 마지막 재생 위치를 복원하는 이어보기 기능 구현'
              }
            ]
          }
        ]
      }
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
      { type: 'image', src: '/screens/vuddy-chat-figma.png', alt: 'Vuddy 공개 채팅 안에서 특정 사용자에게 답장하는 화면', caption: 'CHATTING / 특정 사용자에게 답장', width: 360, height: 800, featured: true, highlightIndex: 4 },
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
    period: '2026.04 - 현재',
    headline: '캐릭터 LLM 파인튜닝과 Android 앱 개발',
    contribution: [
      {
        title: '캐릭터 LLM 파인튜닝',
        points: [
          { text: '캐릭터 페르소나 데이터셋 구축과 LoRA 파인튜닝, 정량 및 정성 평가 진행', children: [
            { text: 'vLLM 기반으로 모델을 배포하고 Android 앱의 SSE 스트리밍 채팅과 연동' },
          ] },
          { text: '비개발 팀원이 모델과 직접 대화하고 비교할 수 있도록 웹 MVP 개발', children: [
            { text: '자동 평가 결과와 팀원들의 대화 피드백을 반영해 학습 데이터를 보완하고 어색한 응답 개선' },
          ] },
          { text: '개발한 모델이 서비스 적용 모델로 선정', emphasis: '서비스 적용 모델로 선정' },
        ],
      },
      {
        title: '실시간 채팅과 인앱 결제',
        points: [
          { text: '사내 AI 모델과 연동한 SSE 스트리밍 채팅 개발 주도', children: [
            { text: '네트워크 오류와 응답 지연에 대응하는 재시도 처리 적용' },
          ] },
          { text: 'Google Play Billing Library 기반 인앱 결제 및 정기 구독 연동', children: [
            { text: 'Backend 결제 검증 결과를 앱의 구독 상태에 반영' },
          ] },
          { text: '결제와 구독 화면에 Compose Preview Screenshot Test를 도입해 UI 변경 전후 비교 자동화' },
        ],
      },
    ],
    technologies: ['Python', 'PyTorch', 'LoRA / SFT', 'vLLM', 'Kotlin', 'Jetpack Compose', 'SSE', 'Play Billing'],
    highlightGroups: [],
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
    headline: '3D 포토카드와 영상 모닝콜 개발, 홈 콘텐츠 탐색 개선',
    contribution: [
      {
        title: '3D 포토카드',
        points: [
          { text: 'SceneView 라이브러리를 활용해 터치 제스처에 반응하는 3D 포토카드의 360도 회전과 플립 인터랙션 구현' },
          { text: 'Heap Dump 분석으로 SceneView의 Bitmap 메모리 누수 원인을 찾고, 화면 종료 시 자원이 해제되도록 개선', emphasis: 'Bitmap 메모리 누수' },
        ],
      },
      {
        title: '홈 콘텐츠 탐색',
        points: [
          { text: '아티스트와 판매 중인 포토카드를 탐색하는 헤드라인 배너와 관련 영역 개편. 아티스트별 팬 순위 카드의 가로 스와이프 구현' },
          { text: '팬 순위 진행률이 바뀔 때 이미지 캐시 처리가 반복되는 문제 확인', children: [
            { text: '이미지 Composable을 분리해 진행률 변경에 따른 불필요한 이미지 갱신 방지', emphasis: '불필요한 이미지 갱신 방지' },
          ] },
        ],
      },
      {
        title: '영상 모닝콜',
        points: [
          { text: '사용자가 선택한 아티스트 영상으로 지정한 요일과 시간에 울리는 알람 기능 개발' },
          { text: '기기 재부팅 후 알람 예약을 복원하고, 앱 종료와 락스크린에서도 실행되는지 검증' },
        ],
      },
    ],
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'AlarmManager'],
    highlightGroups: [
      {
        highlights: [
          {
            title: 'SceneView 메모리 관리',
            points: [
              {
                text: 'SceneView를 래핑해 Compose의 Composition 종료 시 Bitmap을 직접 해제하도록 변경'
              }
            ]
          },
          {
            title: '팬 순위 카드',
            points: [
              {
                text: '프로필 블러 이미지의 캐시 처리가 진행률 갱신마다 반복되지 않도록 이미지 Composable의 갱신 범위 분리'
              }
            ]
          },
          {
            title: '알람 예약과 복원',
            points: [
              {
                text: '요일별 반복 일정을 Room에 저장하고, 기기 재부팅 시 저장된 일정으로 AlarmManager의 알람을 다시 예약하도록 설계'
              }
            ]
          }
        ]
      }
    ],
    media: [
      { type: 'image', src: '/screens/mmtc-photocard-figma.png', alt: 'MOMENTICA 포토카드를 길게 눌러 SceneView 기반 3D 카드로 확인하는 화면', caption: 'SceneView 기반 포토카드 3D 감상', width: 360, height: 800, featured: true, highlightIndex: 0 },
      { type: 'image', src: '/screens/mmtc-take-home-figma.png', alt: 'MOMENTICA의 포토카드 이벤트와 아티스트별 팬 순위가 표시된 홈 화면', caption: '아티스트와 디지털 포토카드 탐색', width: 1080, height: 2400, highlightIndex: 1 },
      { type: 'image', src: '/screens/mmtc-alarm-figma.png', alt: 'MOMENTICA에서 선택한 아티스트 영상이 락스크린에서 재생되는 알람 화면', caption: '아티스트 영상으로 울리는 알람', width: 360, height: 800, highlightIndex: 2 },
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
    summary: 'Coil 이미지 로딩 상태에 맞춰 Shimmer 효과를 간편하게 적용할 수 있는 UI 라이브러리 개발 및 배포',
    link: {
      label: 'GitHub',
      href: 'https://github.com/EvergreenTree97/easy-shimmer-compose',
      external: true,
    },
  },
  {
    name: 'K-Humanizer',
    eyebrow: 'OPEN SOURCE',
    summary: 'LLM 생성 텍스트의 번역투를 자연스러운 한국어 실무 표현으로 교정하는 Agent Skill 개발 및 공개',
    link: {
      label: 'GitHub',
      href: 'https://github.com/EvergreenTree97/K-Humanizer',
      external: true,
    },
  },
]
