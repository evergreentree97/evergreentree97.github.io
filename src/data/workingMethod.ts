export type WorkingMethod = {
  label: string
  title: string
  description: string
}

export const workingMethod: WorkingMethod[] = [
  {
    label: 'CONTEXT',
    title: '맥락부터 공유',
    description: '저장소 구조, 코드 규칙과 결정 기록을 한곳에 두고 작업 전에 읽게 합니다.',
  },
  {
    label: 'ASSIGN',
    title: '작게 나눠 맡김',
    description: '서버 API 반영, 반복 구현, QA 준비처럼 완료 조건이 뚜렷한 작업부터 맡깁니다.',
  },
  {
    label: 'REVIEW',
    title: '코드는 직접 읽음',
    description: '변경된 코드를 읽고 기존 아키텍처와 상태 흐름을 지켰는지 확인합니다.',
  },
  {
    label: 'VERIFY',
    title: '실제로 돌려봄',
    description: '빌드와 테스트를 통과해도 끝내지 않습니다. 수정 전후 동작까지 확인합니다.',
  },
]
