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

export type QuestStep = {
  step: string
  title: string
  description: string
}

export const questSteps: QuestStep[] = [
  { step: 'STEP 1', title: '접수', description: '티켓을 읽고 상태를 In Progress로 바꿉니다.' },
  { step: 'STEP 2', title: '격리', description: '워크트리를 만들어 진행 중인 코드와 분리합니다.' },
  { step: 'STEP 3', title: '분석', description: '재현 조건과 원인을 먼저 정리합니다. 이 단계에서는 수정하지 않습니다.' },
  { step: 'STEP 4', title: '수정', description: '원인이 확인된 뒤에 코드를 고칩니다.' },
  { step: 'STEP 5', title: '검증', description: '기존 기능까지 테스트하고 결과를 티켓에 남깁니다.' },
]
