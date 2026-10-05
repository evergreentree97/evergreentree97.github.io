import test from 'node:test'
import assert from 'node:assert/strict'
import { inspectCopy } from './copy-rules.mjs'

test('rejects the user-supplied anti-reference and spacing variants', () => {
  for (const text of ['구조가 한눈에 보입니다.', '문제를 풉니다.', '어느 판을 봤는지까지 남습니다.', '한눈에 이어집니다.', '한 눈에 이해됩니다.', '문제를 해결합니다.']) {
    assert.ok(inspectCopy(text).length > 0, text)
  }
})

test('preserves concrete technical facts and necessary labels', () => {
  for (const text of ['토큰 갱신 동시성 제어', '화면 이동을 Router 인터페이스로 분리했습니다.', '네트워크 오류는 토큰을 유지한 채 전달합니다.', '동시에 401을 받은 요청이 같은 토큰 갱신 결과를 재사용하도록 수정했습니다.']) {
    assert.deepEqual(inspectCopy(text), [], text)
  }
})
