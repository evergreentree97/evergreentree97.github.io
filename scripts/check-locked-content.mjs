import { readFile } from 'node:fs/promises'

const heroSource = await readFile(new URL('../src/components/Hero.tsx', import.meta.url), 'utf8')
const contentGuide = await readFile(new URL('../docs/portfolio-content.md', import.meta.url), 'utf8')

const lockedHeadline = ['AI에 일을 맡기고,', '제품을 만듭니다.']

for (const line of lockedHeadline) {
  if (!heroSource.includes(`>${line}<`)) {
    throw new Error(`고정된 첫 화면 문구가 변경되었습니다: ${line}`)
  }
}

const documentedHeadline = `> ${lockedHeadline[0]}<br>\n> ${lockedHeadline[1]}`

if (!contentGuide.includes(documentedHeadline)) {
  throw new Error('콘텐츠 가이드의 고정된 첫 화면 문구가 변경되었습니다.')
}

console.log('고정된 첫 화면 문구를 확인했습니다.')
