import type { FeaturedProject } from './projects'

export type CaseContext = { implementation?: string; context?: string; choice?: string; verified?: string; boundary?: string }
export type ProjectReading = {
  shortName: string
  service: string
  contribution: string
  role: string
  periods: { label: string; value: string }[]
  scope: string
  summaryMedia: number
  detailMedia: number[]
  summaryTechnologies: string[]
  cases: CaseContext[]
}

export const projectReading: Record<FeaturedProject['id'], ProjectReading> = {
  vuddy: {
    shortName: 'Vuddy',
    service: '크리에이터와 팬이 채팅과 디지털 콘텐츠로 만나는 팬 플랫폼입니다.',
    contribution: 'Router로 feature 모듈의 화면 이동을 분리했습니다.',
    role: 'Android 구조 설계, 핵심 기능 개발과 출시 후 운영',
    periods: [{ label: '개발 기간', value: '2024.05 - 현재' }],
    scope: '신규 Android 앱의 공통 기반과 주요 기능, QA 배포와 출시 후 운영을 맡았습니다. 채팅은 다른 Android 개발자와 기능을 나눠 개발했습니다. Sendbird 연동, 양방향 페이징과 미디어 메시지를 맡고 Backend 개발자와 채팅방 API 규격을 맞췄습니다.',
    summaryMedia: 0,
    detailMedia: [2],
    summaryTechnologies: ['Jetpack Compose', 'MVI', 'Sendbird'],
    cases: [
      { implementation: 'Jetpack Compose 기반 멀티모듈 구조와 MVI 상태 처리를 설계했습니다. mock Router로 UI 없이 화면 이동 로직을 테스트했습니다.', context: 'feature 모듈 사이의 화면 이동을 직접 의존 없이 연결하고, UI를 띄우지 않고 이동 로직을 검증해야 했습니다.', choice: '화면 이동을 Router 인터페이스 뒤로 분리했습니다. feature가 다른 feature의 구현을 참조하지 않고, 테스트에서는 mock Router를 주입할 수 있도록 구성했습니다.' },
      { implementation: '네트워크 오류는 토큰을 유지한 채 전달하고 인증 만료는 로그인으로 연결했습니다. 갱신한 요청이 다시 401을 받으면 priorResponse 개수로 retry를 중단하도록 했습니다.', verified: 'Authenticator와 Refresher 단위 테스트로 오류 처리와 토큰 갱신 동작을 검증했습니다.', context: '여러 API 요청이 동시에 401을 받으면 토큰 갱신 요청도 겹칠 수 있었습니다.', choice: 'synchronized로 갱신 구간을 제한하고, 다른 요청이 먼저 갱신한 토큰이 있으면 대기 중인 요청이 그 토큰을 재사용하도록 했습니다.' },
      { implementation: '답장 원문으로 이동할 때 앞뒤 메시지를 함께 불러오는 양방향 페이징과 사진, 영상 메시지를 구현했습니다.', context: '크리에이터의 공개 일정과 서버 인력을 고려하면 자체 소켓 서버 구축이 어려웠습니다. 답장 원문이 현재 메시지 목록 밖에 있는 경우도 처리해야 했습니다.', choice: '실시간 메시징은 Sendbird를 사용하고, 이후 이관에 대비해 SDK 호출을 도메인 인터페이스 뒤로 분리했습니다.', boundary: '삭제됐거나 현재 사용자에게 보이지 않는 답장 원문에는 이동하지 않고 안내합니다.' },
      { implementation: '출시 전에 대규모 그룹의 알림 발송 제약을 확인하고 채팅과 알림의 역할을 나누는 구조를 제안했습니다.', context: '참여자가 많은 그룹 채팅방에 알림을 발송할 때 Sendbird의 제약을 확인했습니다.', choice: '채팅 코어는 Sendbird에 유지하고 푸시는 자체 발송하도록 역할을 나누는 안을 제안했습니다.', boundary: '담당 범위는 제약 확인과 구조 제안, Android 연동입니다. 서버 구현은 Backend 개발자가 맡았습니다.' },
      { implementation: 'Android에서 Backend API로 채팅방을 생성하고 응답의 channelUrl로 Sendbird 채널과 연결했습니다. 채팅방 목록과 검색도 Backend API로 연동했습니다.', context: 'Sendbird 채널의 메타데이터를 클라이언트마다 다르게 해석하는 문제가 있었습니다.', choice: '필드와 타입을 정리해 Backend 중심 관리를 요청하고, Android의 채팅방 생성과 목록, 검색을 자체 API로 전환했습니다.', boundary: '실시간 메시징은 Sendbird가 처리합니다. API 규격 정리와 Android 연동을 맡았고, 서버 구현은 Backend 개발자가 담당했습니다.' },
      { implementation: '일반 화면과 전체 화면이 ViewModel에서 관리하는 같은 ExoPlayer를 다시 연결하도록 구현했습니다. 화면 전환 후에도 재생 위치가 유지되도록 했습니다.', context: '일반 화면과 전체 화면을 전환할 때 플레이어의 재생 상태를 유지해야 했습니다.', choice: '플레이어의 생명주기를 화면에서 분리하고 ViewModel 범위에서 관리했습니다.' },
    ],
  },
  'model-evaluation': {
    shortName: 'AI 캐릭터 앱',
    service: '사내에서 개발한 캐릭터 대화 모델을 사용하는 Android 채팅 앱입니다.',
    contribution: 'LoRA 학습과 vLLM 서빙, SSE 채팅을 구현했습니다.',
    role: '캐릭터 모델 개발, Android 채팅과 결제',
    periods: [{ label: '모델 개발', value: '2026.04 - 2026.08' }, { label: 'Android 앱', value: '2026.06 - 현재' }],
    scope: '사내 AI TF에서 데이터 구성과 파인튜닝, 평가와 서빙을 구현했습니다. 모델의 실제 대화 검토와 선정은 팀이 진행했습니다. Android 앱에서는 SSE 채팅과 Google Play 결제를 맡고 Backend 구매 검증을 연동했습니다.',
    summaryMedia: 1,
    detailMedia: [0],
    summaryTechnologies: ['LoRA / SFT', 'SSE', 'Play Billing'],
    cases: [
      { implementation: '캐릭터 대화 모델의 데이터 구성과 학습 방식을 설계하고 데이터 정제, LoRA 기반 SFT와 자동 평가를 구현했습니다. 개발한 모델은 팀의 실제 대화 검토를 거쳐 프로덕션 적용 가능한 모델로 선정됐습니다.' },
      { implementation: '팀원이 웹 MVP로 모델과 대화하게 하고, 대화 피드백에 따라 학습 데이터를 수정해 기능 실험에 반영했습니다.', context: '팀원이 학습한 모델과 직접 대화하고 피드백을 남길 수 있는 검토 도구가 필요했습니다.', choice: 'vLLM으로 모델을 서빙하고, 팀원이 모델과 대화할 웹 MVP를 구현했습니다.', boundary: '팀원이 모델과 직접 대화하고 피드백을 남기는 내부 검토 도구입니다.' },
      { implementation: '사내 AI 모델을 활용한 SSE 기반 캐릭터 채팅 개발을 주도했습니다. 예외 처리와 retry 로직을 구현했습니다.', verified: '단위 테스트로 채팅의 주요 예외 처리와 retry 동작을 검증했습니다.' },
      { implementation: 'Android에서 Google Play Billing의 상품 조회, 구매, 완료, 취소와 복구를 처리했습니다. Backend의 구매 검증과 결제 상태 동기화를 연동했습니다.', verified: '단위 테스트로 결제 로직을 검증하고, 스크린샷 테스트로 구독 관리와 결제 내역 화면의 표시를 확인했습니다.' },
    ],
  },
  momentica: {
    shortName: 'Momentica',
    service: '아티스트의 디지털 포토카드를 수집하고 감상하는 글로벌 팬 플랫폼입니다.',
    contribution: 'Bitmap 자원 해제와 재부팅 후 알람 복원을 구현했습니다.',
    role: 'Android 3D 포토카드, 테이크 홈과 영상 알람',
    periods: [{ label: '개발 기간', value: '2023.10 - 2024.05' }],
    scope: '운영 중인 Android 앱에서 3D 포토카드와 퀵뷰, 테이크 홈 개편과 영상 알람을 담당했습니다. 기존 앱의 아키텍처 위에 기능을 구현하고 QA와 출시 대응을 진행했습니다.',
    summaryMedia: 1,
    detailMedia: [0, 2],
    summaryTechnologies: ['SceneView', 'Room', 'AlarmManager'],
    cases: [
      { implementation: 'SceneView 기반 3D 포토카드와 퀵뷰를 구현했습니다. Composition 종료 시 Bitmap 자원을 명시적으로 해제하도록 개선했습니다.', context: '3D 포토카드의 Composition이 종료된 뒤에도 SceneView 내부 Bitmap이 해제되지 않았습니다.', choice: 'Android Profiler 힙 덤프로 원인을 추적하고, 라이브러리 API를 감싸 Composition 종료 시 자원을 명시적으로 해제하도록 했습니다.' },
      { implementation: '헤드라인 배너, 진행 중인 아티스트와 판매 중인 테이크를 구현했습니다. Artist Top Ranker는 pointerInput API로 가로 스와이프를 처리하고, 블러 이미지 Composable 분리로 반복되던 캐시 초기화 문제를 수정했습니다.', context: 'Artist Top Ranker의 진행률이 갱신될 때 블러 이미지 캐시도 반복해서 초기화됐습니다.', choice: '프로필 블러 이미지를 별도 Composable로 분리해 진행률 갱신 때 반복되던 이미지 캐시 초기화 문제를 수정했습니다. 가로 스와이프는 Compose pointerInput으로 구현했습니다.' },
      { implementation: '앱 종료와 락스크린 상태, 기기 재부팅 후에도 알람이 실행되는지 확인했습니다. 설정 복원과 락스크린 표시를 구현했습니다.', context: '앱 종료와 락스크린 상태에서도 영상 알람이 실행되고, 기기 재부팅 후 예약을 복원해야 했습니다.', choice: '알람 설정은 Room에 저장하고 실행 예약은 AlarmManager로 처리했습니다. 재부팅 후 저장된 설정으로 예약을 복원하도록 구성했습니다.' },
    ],
  },
}
