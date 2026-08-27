import { readFile } from 'node:fs/promises'

const heroSource = await readFile(new URL('../src/components/Hero.tsx', import.meta.url), 'utf8')
const contentGuide = await readFile(new URL('../docs/portfolio/content.md', import.meta.url), 'utf8')
const siteStructure = await readFile(new URL('../docs/portfolio/structure.md', import.meta.url), 'utf8')
const projectsSource = await readFile(new URL('../src/data/projects.ts', import.meta.url), 'utf8')
const sideProjectsSource = await readFile(new URL('../src/data/sideProjects.ts', import.meta.url), 'utf8')
const howIWorkSource = await readFile(new URL('../src/components/HowIWork.tsx', import.meta.url), 'utf8')
const experienceSource = await readFile(new URL('../src/data/experience.ts', import.meta.url), 'utf8')
const appSource = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8')
const profileSource = await readFile(new URL('../src/data/profile.ts', import.meta.url), 'utf8')

const lockedHeadline = ['제품을 만드는', '엔지니어입니다']

for (const line of lockedHeadline) {
  if (!heroSource.includes(`>${line}<`)) {
    throw new Error(`고정된 첫 화면 문구가 변경되었습니다: ${line}`)
  }
}

const documentedHeadline = `> ${lockedHeadline[0]}<br>\n> ${lockedHeadline[1]}`

if (!contentGuide.includes(documentedHeadline)) {
  throw new Error('콘텐츠 가이드의 고정된 첫 화면 문구가 변경되었습니다.')
}

const copyChecks = [
  {
    source: projectsSource,
    pattern: /ANDROID PRODUCT/,
    message: '프로젝트 분류 라벨에는 ANDROID PRODUCT를 쓰지 마세요.',
  },
  {
    source: sideProjectsSource,
    pattern: /컴포넌트\s+\d+종/,
    message: '컴포넌트 구현을 개수로만 줄이지 말고 기여 범위가 드러나는 이름을 써주세요.',
  },
  {
    source: sideProjectsSource,
    pattern: /Modifier 공개 범위/,
    message: '독자가 판단하기 어려운 Modifier 공개 범위 대신 실제로 검토한 동작을 써주세요.',
  },
  {
    source: projectsSource,
    pattern: /문서 용도별 교정 범위|검증 항목\s+\d+개|JSONL 검사와 GitHub Actions 구성|\d+개 예문|\uD3C9\uAC00 \uAE30\uC900 \uC81C\uACF5/,
    message: '구현 수단이나 검증 자료를 나열하지 말고 무엇을 다른 사람도 쓸 수 있게 공유했는지 써주세요.',
  },
  {
    source: projectsSource,
    pattern: /Artist Top Ranker:[^\n]*(LaunchedEffect|Crossfade|HorizontalPager)|TAKE HOME \/ 자동 전환과 탭 복귀 상태 보완/,
    message: 'Artist Top Ranker 공개 문구에 제외한 자동 전환을 되살리거나 헤드라인 배너 작업을 섞지 마세요.',
  },
  {
    source: `${projectsSource}\n${contentGuide}\n${siteStructure}`,
    pattern: /GACHA OPENING|CARD REVEAL|VIDEO PLAYER|화면 전환 후 재생 위치 유지|등급별 영상 분기와 프리로딩|PHOTOCARD QUICK VIEW|길게 눌러 카드 확대|1:1 REPLY|VUDDY CARD|잠금 ?화면/,
    message: '교체하거나 용어를 바꾼 예전 프로젝트 캡션과 알람 용어를 다시 넣지 마세요.',
  },
  {
    source: projectsSource,
    pattern: /\/screens\/vuddy-chat\.jpg/,
    message: 'Vuddy 채팅은 홍보용 합성 이미지 대신 사용자가 선택한 Figma 실제 화면을 사용하세요.',
  },
  {
    source: howIWorkSource,
    pattern: /Claude Code와 Codex에 반복 작업을 맡기고/,
    message: 'AI 도구 이름을 앞세운 이전 소개 대신 이력서 근거를 중심으로 써주세요.',
  },
  {
    source: `${appSource}\n${profileSource}`,
    pattern: /AboutMe|#about|label: '소개'/,
    message: '별도 소개 섹션을 되살리지 말고 경력 도입 문단을 사용하세요.',
  },
  {
    source: experienceSource,
    pattern: /초기 구축부터 Google Play 출시까지 참여한 신규 앱입니다|기존 앱의 구조를 유지한 채 기능을 추가하며 백그라운드 실행과 3D 렌더링을 다뤘습니다/,
    message: 'Vuddy와 Momentica 경력 요약에 교체된 이전 문구를 다시 쓰지 마세요.',
  },
  {
    source: projectsSource,
    pattern: /이미 운영 중인 글로벌 팬덤 서비스에 새 기능을 더한 프로젝트입니다|기존 구조 안에서 백그라운드 실행과 3D 렌더링 문제를 다뤘습니다/,
    message: 'Momentica 프로젝트 소개에 교체된 이전 문구를 다시 쓰지 마세요.',
  },
  {
    source: projectsSource,
    pattern: /크리에이터와 팬이 만나는 신규 팬 플랫폼 앱입니다|초기 구축부터 Google Play 출시와 운영까지 참여했습니다|사내 AI TF에서 캐릭터 대화 모델을 직접 파인튜닝했습니다|이어서 그 모델을 사용하는 신규 앱 개발에 참여했습니다/,
    message: 'Vuddy와 AI 프로젝트 소개에 교체된 이전 문구를 다시 쓰지 마세요.',
  },
  {
    source: experienceSource,
    pattern: /캐릭터 대화를 중심으로 한 신규 Android 앱|TF에 합류해 캐릭터 대화 모델 학습을 직접 맡았습니다/,
    message: 'AI 앱과 TF 경력 요약에 교체된 이전 문구를 다시 쓰지 마세요.',
  },
  {
    source: howIWorkSource,
    pattern: /재현부터 원인 분석|하나의 Agent Skill로 구성했습니다|기획과 디자인의 SSOT로 쓰고|규칙을 구성했습니다/,
    message: 'AI 활용과 검증 섹션에 교체된 이전 문구를 다시 쓰지 마세요.',
  },
]

for (const { source, pattern, message } of copyChecks) {
  if (pattern.test(source)) {
    throw new Error(message)
  }
}

const requiredProjectCopy = [
  "eyebrow: 'LLM FINE-TUNING / ANDROID'",
  "headline: '크리에이터와 팬이 채팅과 디지털 콘텐츠로 만나는 팬 플랫폼입니다. 앱의 공통 기반과 주요 기능을 개발하고 Google Play 출시 후 운영까지 맡았습니다.'",
  "headline: '사내 AI TF에서 캐릭터 대화 모델의 파인튜닝과 평가, 서빙을 맡았습니다. 이후 해당 모델을 적용한 신규 Android 앱 개발에 참여했습니다.'",
  'Artist Top Ranker: Compose pointerInput API로 가로 스와이프를 구현하고',
  '프로필 블러 이미지를 별도 Composable로 분리해 진행률 갱신 때 반복되던 이미지 캐시 초기화 문제 해결',
  "caption: 'TAKE HOME / 홈 화면 개편'",
  "caption: '3D PHOTOCARD / SceneView 기반'",
  "caption: 'TAKE ALARM / 락스크린 영상 알람'",
  "caption: 'HOME / 크리에이터 굿즈 탐색'",
  "caption: 'CHATTING / 특정 사용자에게 답장'",
  "caption: 'MEDIA / 디지털 카드 상세'",
  "caption: 'MODEL EVALUATION / 대화 모델 평가'",
  "caption: 'CHARACTER CHAT / AI 캐릭터 채팅'",
  "caption: 'CHAT LIST / 캐릭터 채팅 목록'",
  "headline: '글로벌 팬 플랫폼 Momentica에서 3D 포토카드와 영상 알람 기능을 개발했습니다.'",
  '/screens/mmtc-photocard-figma.png',
  '/screens/mmtc-take-home-figma.png',
  '/screens/mmtc-alarm-figma.png',
  '/screens/vuddy-home.jpg',
  '/screens/vuddy-chat-figma.png',
]

for (const copy of requiredProjectCopy) {
  if (!projectsSource.includes(copy)) {
    throw new Error(`사용자가 선택한 프로젝트 문구 또는 자산이 빠졌습니다: ${copy}`)
  }
}

const approvedAssetRecords = [
  '| `mmtc-photocard-figma.png` | `oRjaTCCd3IGJqNjGPc2tnk`, `3102:12200` | 가이드 레이어를 제외한 화면에 카드의 얇은 오른쪽·아래쪽 면만 더한 현재 파생 이미지 |',
  '| `mmtc-alarm-figma.png` | `oRjaTCCd3IGJqNjGPc2tnk`, `755:4673` |',
  '| `mmtc-take-home-figma.png` | `QKAiwvU5PTqFXcFtebdz9U`, `2038:6766` |',
  '| `vuddy-chat-figma.png` | `iwSPjT5T4wEA6TNIltsuRT`, `4526:42051` |',
]

for (const record of approvedAssetRecords) {
  if (!contentGuide.includes(record)) {
    throw new Error(`공개 자산의 파일별 승인 기록이 빠졌습니다: ${record}`)
  }
}

const requiredHowIWorkEvidence = [
  '아키텍처와 개발 규칙은 Markdown으로 관리하고 반복 작업은 Agent Skill로 만들어 재사용합니다.',
  'QA 티켓의 재현, 원인 분석, 코드 수정, 테스트, PR과 배포 상태 동기화를 Agent Skill 하나로 묶었습니다.',
  'SSE',
  '네트워크 인스펙터',
  'Compose Stable',
  '스크린샷 테스트',
  '결제와 미디어',
  '새 AI 프로젝트에서는 GitHub를 기획과 디자인의 SSOT로 삼고 개발 전에 최신 문서를 확인하도록 했습니다.',
]

const requiredCareerIntroduction = [
  '3년차 Android Engineer 최상록입니다. 신규 앱의 구조 설계부터 Google Play 출시와 운영까지 맡아 왔습니다.',
  'Vuddy와 Momentica에서 팬 플랫폼을 개발했고 사내 AI TF에서는 캐릭터 대화 모델의 데이터 구성과 파인튜닝, 평가와 서빙을 맡았습니다. 현재는 해당 모델을 사용하는 신규 Android 앱을 개발하고 있습니다.',
]

const requiredExperienceSummaries = [
  'SSE 기반 캐릭터 채팅과 Google Play 인앱 결제 개발을 맡았습니다.',
  '캐릭터 대화 모델의 데이터 구성과 파인튜닝, 평가와 서빙을 맡았습니다.',
  'Jetpack Compose 기반 멀티모듈 구조를 설계하고 인증, 미디어와 실시간 채팅 기능을 개발했습니다.',
  'SceneView로 3D 포토카드를 구현하고 Room과 AlarmManager 기반 영상 알람을 개발했습니다.',
]

for (const paragraph of requiredCareerIntroduction) {
  if (!experienceSource.includes(paragraph)) {
    throw new Error(`경력 섹션에 통합한 소개 문단이 빠졌습니다: ${paragraph}`)
  }
}

for (const summary of requiredExperienceSummaries) {
  if (!experienceSource.includes(summary)) {
    throw new Error(`사용자가 선택한 경력 요약이 빠졌습니다: ${summary}`)
  }
}

for (const evidence of requiredHowIWorkEvidence) {
  if (!howIWorkSource.includes(evidence)) {
    throw new Error(`AI 활용과 검증 섹션의 이력서 근거가 빠졌습니다: ${evidence}`)
  }
}

if (/MOMENTICA Figma 목업은 여전히 게시 금지|사내 Figma 화면\(참고 전용\)/.test(siteStructure)) {
  throw new Error('사이트 구조 문서가 포트폴리오 콘텐츠 가이드의 화면별 승인 기록과 충돌합니다.')
}

console.log('고정된 첫 화면 문구와 포트폴리오 표현을 확인했습니다.')
