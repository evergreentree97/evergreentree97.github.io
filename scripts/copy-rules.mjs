export const rejectedPatterns = [
  { pattern: /한\s?눈에/, reason: 'State the actual object and action, not a promise about readability.' },
  { pattern: /어느\s?판/, reason: 'Name the actual version, screen or record instead of an unexplained metaphor.' },
  { pattern: /(?:^|[.?!]\s*)문제를\s*(?:풉니다|해결합니다)(?:[.!]|$)/, reason: 'Name the failing behavior and the change.' },
  { pattern: /구조가\s*(?:잘\s*)?보입니다/, reason: 'Name the structure and the implementation, or remove layout commentary.' },
]

export function inspectCopy(text) {
  return rejectedPatterns.filter(({ pattern }) => pattern.test(text)).map(({ reason }) => reason)
}

export const reviewPattern = /직관적|혁신적|원활한|더 나은|가치를 (?:만들|제공)|경험을 (?:선사|혁신)|단순히.{0,30}(?:넘어|아니라)/
