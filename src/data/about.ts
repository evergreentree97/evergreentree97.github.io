export type AboutPrinciple = {
  title: string
  description: string
}

export const aboutPrinciples: AboutPrinciple[] = [
  {
    title: '경계를 먼저 나누고 만듭니다.',
    description:
      'Vuddy에서 자체 소켓 서버와 Sendbird를 출시 일정과 서버 구현 범위로 비교했습니다. 실시간 메시징은 Sendbird에 남기고 채팅방 생성과 검색, 비즈니스 규칙과 운영은 Backend에 두도록 제안해 외부 SDK의 한계가 제품 요구사항을 좁히지 않게 했습니다.',
  },
  {
    title: '확인한 조건까지만 결과로 말합니다.',
    description:
      '캐릭터 대화 모델을 평가할 때 학습 데이터와 겹친 결과를 무효 처리하고 질문과 서빙 조건을 고정한 뒤 자동 평가를 실제 대화와 대조했습니다. Momentica 영상 알람은 앱 종료와 화면 잠금, 재부팅 뒤에도 실행되는지 확인하고서야 완료로 봤습니다.',
  },
  {
    title: '반복 작업은 팀이 쓰는 도구로 남깁니다.',
    description:
      'GitHub 기획서와 디자인 토큰 SSOT를 제안해 팀에 적용했습니다. Jetpack Compose 라이브러리 EasyShimmerCompose와 한국어 문체 교정 도구 K-Humanizer를 오픈소스로 공개했습니다.',
  },
]
