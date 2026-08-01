export type WorkingMethod = {
  label: string
  title: string
  description: string
}

export const workingMethod: WorkingMethod[] = [
  {
    label: 'CONTEXT',
    title: '맥락을 먼저 제공',
    description: '저장소 구조, 코드 규칙과 결정 기록을 기준 문서로 관리하고 작업 전에 확인하도록 구성합니다.',
  },
  {
    label: 'ASSIGN',
    title: '맡길 범위를 좁힘',
    description: '서버 API 반영, 반복 구현과 QA 준비처럼 완료 조건이 분명한 작업을 AI에 맡깁니다.',
  },
  {
    label: 'REVIEW',
    title: '설계 경계를 직접 검토',
    description: '변경 내용을 읽고 기존 아키텍처와 상태 흐름을 지켰는지 코드 단위로 확인합니다.',
  },
  {
    label: 'VERIFY',
    title: '동작으로 확인',
    description: '빌드, 테스트와 수정 전후 동작 확인을 통과한 결과만 제품에 반영합니다.',
  },
]
