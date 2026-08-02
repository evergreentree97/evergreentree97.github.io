export type WorkingMethod = {
  label: string
  title: string
  description: string
}

export const workingMethod: WorkingMethod[] = [
  {
    label: 'CONTEXT',
    title: '저장소부터 읽게 함',
    description: '구조와 코드 규칙, 결정 기록을 먼저 읽게 합니다.',
  },
  {
    label: 'SCOPE',
    title: '범위가 분명한 일을 맡김',
    description: '서버 API 연동이나 QA 준비처럼 완료 조건이 분명한 일을 맡깁니다.',
  },
  {
    label: 'REVIEW',
    title: '코드는 직접 봄',
    description: '생성된 코드를 읽고 기존 구조와 상태 흐름을 깨뜨리지 않았는지 확인합니다.',
  },
  {
    label: 'TEST',
    title: '기존 기능까지 테스트',
    description: '새 기능만 보지 않고 기존 기능까지 테스트한 뒤 반영합니다.',
  },
]
