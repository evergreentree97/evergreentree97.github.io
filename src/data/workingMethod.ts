export type WorkingMethod = {
  label: string
  title: string
  description: string
}

export const workingMethod: WorkingMethod[] = [
  {
    label: 'CONTEXT',
    title: '판단에 필요한 맥락을 제공',
    description: '저장소 구조와 코드 규칙, 결정 기록을 먼저 읽게 해 같은 기준에서 작업하도록 합니다.',
  },
  {
    label: 'SCOPE',
    title: '확인 가능한 일을 맡김',
    description: '서버 API 반영이나 QA 준비처럼 완료 조건과 테스트 범위를 정할 수 있는 작업을 맡깁니다.',
  },
  {
    label: 'DECIDE',
    title: '제품 기준으로 판단',
    description: '작업 범위와 구조 선택, 제품 반영 여부는 사용자 흐름과 운영 조건을 보고 판단합니다.',
  },
  {
    label: 'VERIFY',
    title: '코드와 동작을 검증',
    description: '생성된 코드를 직접 리뷰하고 빌드와 기존 기능 테스트를 통과한 결과만 반영합니다.',
  },
]
