export type WorkingMethod = {
  label: string
  title: string
  description: string
}

export const workingMethod: WorkingMethod[] = [
  {
    label: 'CONTEXT',
    title: 'SSOT',
    description: 'Repository 구조와 코드 규칙, 결정 기록을 한곳에 유지해 작업마다 동일한 맥락을 제공합니다.',
  },
  {
    label: 'SCOPE',
    title: '완료 조건',
    description: '변경 범위와 통과해야 할 빌드, 테스트 항목을 구현 전에 정의합니다.',
  },
  {
    label: 'REVIEW',
    title: '코드 리뷰',
    description: '생성된 diff를 직접 읽고 기존 구조와 상태 흐름에 미치는 영향을 검토합니다.',
  },
  {
    label: 'TEST',
    title: '기존 기능 확인',
    description: '수정 기능과 영향 범위에 포함된 기존 기능을 함께 테스트합니다.',
  },
]

export type QuestStep = {
  step: string
  title: string
  description: string
}

export const questSteps: QuestStep[] = [
  { step: 'STEP 1', title: 'Review', description: '티켓에 명시된 재현 조건과 기대 결과를 확인합니다.' },
  { step: 'STEP 2', title: 'Isolate', description: '기존 작업과 충돌하지 않도록 별도 워크트리에서 수정 범위를 격리합니다.' },
  { step: 'STEP 3', title: 'Diagnose', description: '문제를 재현하고 원인과 영향 범위를 확인합니다.' },
  { step: 'STEP 4', title: 'Fix', description: '확인된 원인에 필요한 코드만 수정합니다.' },
  { step: 'STEP 5', title: 'Verify', description: '수정 사항과 기존 기능을 테스트하고 검증 결과를 티켓에 기록합니다.' },
]
