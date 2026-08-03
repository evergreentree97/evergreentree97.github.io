export type WorkingMethod = {
  label: string
  title: string
  description: string
}

export const workingMethod: WorkingMethod[] = [
  {
    label: 'CONTEXT',
    title: 'SSOT',
    description: '저장소 구조, 코드 규칙과 결정 기록을 단일 작업 기준으로 관리합니다.',
  },
  {
    label: 'SCOPE',
    title: '완료 조건',
    description: '작업 범위와 검증 기준을 사전에 정의합니다.',
  },
  {
    label: 'REVIEW',
    title: '코드 리뷰',
    description: '생성된 코드가 기존 구조와 상태 흐름에 미치는 영향을 직접 검토합니다.',
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
  { step: 'STEP 2', title: 'Isolate', description: '별도 워크트리를 사용해 기존 변경과 작업 환경을 분리합니다.' },
  { step: 'STEP 3', title: 'Diagnose', description: '문제를 재현하고 원인과 영향 범위를 확인합니다.' },
  { step: 'STEP 4', title: 'Fix', description: '확인된 원인에 필요한 코드만 수정합니다.' },
  { step: 'STEP 5', title: 'Verify', description: '수정 사항과 기존 기능을 테스트하고 검증 결과를 티켓에 기록합니다.' },
]
