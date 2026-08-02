export type WorkingMethod = {
  label: string
  title: string
  description: string
}

export const workingMethod: WorkingMethod[] = [
  {
    label: 'CONTEXT',
    title: '맥락부터 공유',
    description: '저장소 구조와 코드 규칙, 결정 기록을 AI가 작업 전에 읽도록 정리합니다.',
  },
  {
    label: 'ASSIGN',
    title: '완료 기준부터 정함',
    description: '서버 API 반영과 반복 구현처럼 결과를 확인할 수 있는 단위로 작업을 맡깁니다.',
  },
  {
    label: 'REVIEW',
    title: '코드는 직접 읽음',
    description: '생성된 코드를 직접 읽고 기존 구조와 상태 흐름을 깨뜨리지 않았는지 확인합니다.',
  },
  {
    label: 'VERIFY',
    title: '실제로 돌려봄',
    description: '새 기능만 보지 않고 기존 기능까지 다시 테스트한 뒤 제품에 반영합니다.',
  },
]
