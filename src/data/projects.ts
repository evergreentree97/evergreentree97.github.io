export type ProjectLink = {
  label: string
  href: string
  external?: boolean
}

export type ProjectCase = {
  problem: string
  decision: string
  verification?: string
}

export type ProjectSceneStep = {
  label: string
  title: string
  copy: string
}

export type FeaturedProject = {
  id: 'vuddy' | 'model-evaluation' | 'momentica'
  name: string
  indexName: string
  eyebrow: string
  headline: string
  role: string
  technologies: string[]
  caseStudy: ProjectCase
  sceneSteps: ProjectSceneStep[]
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

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'vuddy',
    name: 'Vuddy',
    indexName: 'Vuddy',
    eyebrow: 'ANDROID PRODUCT',
    headline: '출시 일정과 구현 범위를 함께 보고, 실시간 메시징과 제품 로직의 경계를 나눴습니다.',
    role: '신규 앱의 초기 구조와 Sendbird 연동을 주도했습니다. 채팅 화면은 동료와 분담했고 양방향 페이징과 사진 및 영상 메시지를 맡았습니다.',
    technologies: ['Kotlin', 'Jetpack Compose', 'MVI', 'Sendbird', 'Media3'],
    caseStudy: {
      problem: '자체 소켓 서버 구축과 Sendbird 사용을 비교했습니다. 출시 일정과 서버 구현 범위를 함께 고려해야 했습니다.',
      decision: '출시 일정과 서버 구현 범위를 고려해 자체 소켓 대신 Sendbird를 선택했습니다. 실시간 메시징은 Sendbird에 남기고 채팅방 생성과 검색, 비즈니스 규칙, 자체 푸시와 운영은 Backend가 맡도록 제안했습니다.',
      verification: '대규모 그룹 푸시와 채널별 금칙어 설정이 요구사항을 충족하지 못한다는 점을 출시 전에 확인했습니다.',
    },
    sceneSteps: [
      {
        label: '담당',
        title: '신규 Android 앱의 구조와 Sendbird 연동',
        copy: '채팅은 동료와 나눠 만들었고, 양방향 페이징과 사진 및 영상 메시지를 맡았습니다.',
      },
      {
        label: '문제',
        title: '직접 만들 것인가, SDK를 선택할 것인가',
        copy: '자체 소켓과 Sendbird를 출시 일정, 서버 구현 범위와 함께 비교했습니다.',
      },
      {
        label: '판단',
        title: '실시간 메시지는 Sendbird에, 제품 규칙은 Backend에',
        copy: '출시 일정 안에서 안정적으로 구현할 수 있는 Sendbird를 선택하고, 채팅방 생성과 검색, 비즈니스 규칙, 자체 푸시와 운영은 Backend가 맡도록 제안했습니다.',
      },
      {
        label: '확인',
        title: 'SDK 선택 뒤에도 실패 조건을 확인했습니다',
        copy: '대규모 그룹 푸시와 채널별 금칙어 설정이 요구사항을 충족하지 못한다는 점을 출시 전에 확인하고, 바꿔야 하는 운영 규칙을 Backend 경계에 두었습니다.',
      },
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
    name: '캐릭터 대화 모델',
    indexName: 'Model Evaluation',
    eyebrow: 'MODEL EVALUATION',
    headline: '모델 점수를 만드는 것보다, 비교할 수 있는 평가 조건을 먼저 만들었습니다.',
    role: '사내 AI TF에서 데이터 정제, LoRA 학습, 내부 자동 평가 도구와 vLLM 서빙을 맡았습니다.',
    technologies: ['Python', 'PyTorch', 'LoRA', 'LLM Evaluation', 'vLLM'],
    caseStudy: {
      problem: '하나의 답변이 여러 부분으로 저장될 때 앞부분만 남고 나머지가 누락되고 있었습니다. 평가용 대화가 학습 데이터와 겹친 결과도 있어 기존 점수를 그대로 비교할 수 없었습니다.',
      decision: '응답 형식, 캐릭터 일관성, 재미와 상태 유지를 따로 평가했습니다. 질문과 서빙 조건을 고정하고 모델 이름을 가렸습니다. 답변 순서를 바꿔 자동 평가 결과를 실제 대화와 대조했습니다.',
      verification: '내부 평가 85/100을 기록한 뒤 팀의 실제 대화 심사를 거쳐 프로덕션 적용 가능한 모델로 선정됐습니다.',
    },
    sceneSteps: [
      {
        label: '문제',
        title: '점수보다 먼저 데이터 결함을 찾았습니다',
        copy: '여러 부분으로 저장된 답변은 앞부분만 남고 나머지가 누락됐고, 평가용 대화가 학습 데이터와 겹친 결과도 있었습니다.',
      },
      {
        label: '정리',
        title: '결함이 섞인 결과는 비교 기준에서 뺐습니다',
        copy: '전처리 결함이 포함된 이전 실험을 제외하고, 겹친 결과는 무효 처리한 뒤 학습 전에 중복 여부를 확인하도록 바꿨습니다.',
      },
      {
        label: '조건',
        title: '하나의 점수를 네 가지 질문으로 나눴습니다',
        copy: '응답 형식, 캐릭터 일관성, 재미와 상태 유지를 따로 평가하고, 질문과 서빙 조건을 고정한 뒤 모델 이름을 가리고 답변 순서를 바꿨습니다.',
      },
      {
        label: '확인',
        title: '자동 결과를 실제 대화와 나란히 봤습니다',
        copy: '내부 평가 85/100과 팀의 실제 대화 심사를 함께 확인해 프로덕션 적용 가능한 모델을 선정했습니다.',
      },
    ],
    links: [],
  },
  {
    id: 'momentica',
    name: 'Momentica',
    indexName: 'Momentica',
    eyebrow: 'ANDROID PRODUCT',
    headline: '앱 프로세스와 화면 상태가 달라져도 사용자가 설정한 영상 알람은 실행돼야 했습니다.',
    role: '영상 알람을 주도했습니다.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'AlarmManager'],
    caseStudy: {
      problem: '영상 알람은 앱 프로세스 종료, 화면 꺼짐과 잠금 화면, 휴대전화 재부팅 뒤에도 실행돼야 했습니다.',
      decision: 'Room의 알람 데이터와 AlarmManager의 실행 예약을 분리하고, 재부팅 시 저장된 알람을 다시 예약했습니다.',
      verification: '앱 종료, 화면 잠금, 기기 재부팅 이후에도 영상 알람이 정상 실행되는지 확인했습니다.',
    },
    sceneSteps: [
      {
        label: '요구',
        title: '앱이 없어도 알람은 실행돼야 했습니다',
        copy: '앱 프로세스 종료, 화면 꺼짐과 잠금 화면, 휴대전화 재부팅 뒤에도 영상 알람이 실행돼야 했습니다.',
      },
      {
        label: '판단',
        title: '저장과 예약을 다른 책임으로 나눴습니다',
        copy: '알람 데이터는 Room에 저장하고 실행 예약은 AlarmManager에 두어, 사용자가 정한 상태를 앱 프로세스와 분리했습니다.',
      },
      {
        label: '복원',
        title: '재부팅으로 사라진 예약을 되살렸습니다',
        copy: '재부팅되면 AlarmManager 예약이 사라지므로, Room에 남은 설정을 읽어 다음 실행을 다시 예약했습니다.',
      },
      {
        label: '확인',
        title: '세 가지 실제 조건에서 실행을 확인했습니다',
        copy: '앱 종료, 화면 잠금과 기기 재부팅 뒤에 영상 알람이 실행되는지 확인했습니다.',
      },
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
