import { readdir, readFile } from 'node:fs/promises'

const root = new URL('../', import.meta.url)
const [heroSource, contentGuide, projectsSource, contactSource, indexSource, screenAssets, imageAssets] = await Promise.all([
  readFile(new URL('src/components/Hero.tsx', root), 'utf8'),
  readFile(new URL('docs/portfolio/content.md', root), 'utf8'),
  readFile(new URL('src/data/projects.ts', root), 'utf8'),
  readFile(new URL('src/components/Contact.tsx', root), 'utf8'),
  readFile(new URL('index.html', root), 'utf8'),
  readdir(new URL('public/screens/', root)),
  readdir(new URL('public/images/', root)),
])

const introductionSection = contentGuide.split('## Approved introduction\n')[1]?.split('\n## ')[0]
const approvedIntroduction = [...(introductionSection ?? '').matchAll(/^> (.+)$/gm)].map((match) => match[1])
if (approvedIntroduction.length !== 4) {
  throw new Error('콘텐츠 가이드에 승인된 첫 문장, 이름과 두 문단을 기록해 주세요.')
}

const normalizedHero = heroSource.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ')
for (const paragraph of approvedIntroduction) {
  if (!normalizedHero.includes(paragraph)) {
    throw new Error('첫 화면에 사용자가 선택한 소개 문안을 유지해 주세요. 문안 변경 요청이 있으면 콘텐츠 가이드도 함께 갱신하세요.')
  }
}

const metadata = [...indexSource.matchAll(/<meta\s+(?:name|property)="(description|og:description|twitter:description)"\s+content="([^"]*)"/g)]
if (metadata.length !== 3 || metadata.some((match) => !match[2].includes(approvedIntroduction[0]))) {
  throw new Error('검색과 소셜 소개에 현재 첫 문장을 반영해 주세요.')
}

const approvedAssets = [
  'mmtc-photocard-figma.png',
  'mmtc-take-home-figma.png',
  'mmtc-alarm-figma.png',
  'vuddy-chat-figma.png',
  'smt-chat-masked.png',
  'smt-chatlist-masked.png',
]
for (const asset of approvedAssets) {
  if (!screenAssets.includes(asset) || !projectsSource.includes(`/screens/${asset}`) || !contentGuide.includes(`\`${asset}\``)) {
    throw new Error(`공개 화면과 파일별 승인 기록을 확인해 주세요: ${asset}`)
  }
}

if (projectsSource.includes('/screens/vuddy-chat.jpg')) {
  throw new Error('Vuddy 채팅은 사용자가 선택한 Figma 실제 화면을 사용하세요.')
}
if (/smt-dashboard/i.test(projectsSource) || screenAssets.some((asset) => /smt-dashboard/i.test(asset))) {
  throw new Error('내부 평가 대시보드는 공개 화면이나 배포 자산에 넣지 마세요.')
}
if (/85\/100/.test(`${projectsSource}\n${contentGuide}`)) {
  throw new Error('표시 보정이 포함된 내부 평가 점수는 공개하지 마세요.')
}

const removedIllustration = 'hero-product-developer-hand-hidden'
if ([heroSource, contactSource, indexSource].some((source) => source.includes(removedIllustration)) || imageAssets.some((asset) => asset.includes(removedIllustration))) {
  throw new Error('사용자가 제외한 개발자 일러스트를 페이지나 배포 자산에 복원하지 마세요.')
}

console.log('현재 소개 문안과 공개 자산을 확인했습니다.')
