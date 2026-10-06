import { readdir, readFile } from 'node:fs/promises'

const heroSource = await readFile(new URL('../src/components/Hero.tsx', import.meta.url), 'utf8')
const contentGuide = await readFile(new URL('../docs/portfolio/content.md', import.meta.url), 'utf8')
const siteStructure = await readFile(new URL('../docs/portfolio/structure.md', import.meta.url), 'utf8')
const projectsSource = await readFile(new URL('../src/data/projects.ts', import.meta.url), 'utf8')
const screenAssets = await readdir(new URL('../public/screens/', import.meta.url))
if (projectsSource.includes('/screens/smt-dashboard.jpg') || screenAssets.includes('smt-dashboard.jpg')) {
  throw new Error('내부 평가 대시보드를 공개 화면이나 배포 자산에 다시 넣지 마세요.')
}
const sideProjectsSource = await readFile(new URL('../src/data/sideProjects.ts', import.meta.url), 'utf8')
const howIWorkSource = [await readFile(new URL('../src/components/HowIWork.tsx', import.meta.url), 'utf8'), await readFile(new URL('../src/data/workEvidence.ts', import.meta.url), 'utf8')].join('\n')
const experienceSource = await readFile(new URL('../src/data/experience.ts', import.meta.url), 'utf8')
const appSource = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8')
const profileSource = await readFile(new URL('../src/data/profile.ts', import.meta.url), 'utf8')

const indexSource = await readFile(new URL('../index.html', import.meta.url), 'utf8')

if (!heroSource.includes('{profile.name}') || !heroSource.includes('{profile.englishName}')) {
  throw new Error('Keep the verified public identity in the first heading.')
}
if (!contentGuide.includes('Ricky Choi')) {
  throw new Error('Document the current public identity heading.')
}

const approvedIntroduction = ['Vuddy의 신규 Android 앱 구조와 공통 기반을 설계하고 핵심 기능 개발, QA 배포와 출시 후 운영을 담당했습니다.', '사내 AI TF에서 캐릭터 대화 모델을 개발한 뒤 해당 모델을 사용하는 Android 채팅 기능을 주도했습니다.']

for (const paragraph of approvedIntroduction) {
  if (![heroSource, contentGuide, indexSource].every((source) => source.includes(paragraph))) {
    throw new Error('첫 화면과 검색 소개를 승인된 소개 문구에 맞춰주세요.')
  }
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
    pattern: /Artist Top Ranker[^\n]*(LaunchedEffect|Crossfade|HorizontalPager)|TAKE HOME \/ 자동 전환과 탭 복귀 상태 보완/,
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
    message: '첫 화면과 별도로 소개 섹션을 추가하지 마세요.',
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
    pattern: /QA 티켓의 재현, 원인 분석|하나의 Agent Skill로 구성했습니다|기획과 디자인의 SSOT로 쓰고|규칙을 구성했습니다/,
    message: 'AI와 함께 개발하는 방식 섹션에 교체된 이전 문구를 다시 쓰지 마세요.',
  },
]

for (const { source, pattern, message } of copyChecks) {
  if (pattern.test(source)) {
    throw new Error(message)
  }
}

if (/85\/100/.test(`${projectsSource}\n${contentGuide}`)) {
  throw new Error('표시 보정이 포함된 내부 평가 점수를 새 공개 문구에 다시 넣지 마세요.')
}

const requiredProjectCopy = [
  'Router 인터페이스로 분리해 feature 모듈 간 의존을 제거하고 mock Router로 UI 없이 이동 로직을 테스트로 검증',
  "title: '모델 개발과 팀 검토'",
  "title: 'Android 채팅과 결제 개발'",
  '예외 처리와 재시도 로직을 구현하고 단위 테스트로 주요 동작 검증',
  '팀원의 대화 피드백을 받아 학습 데이터를 수정하고 기능 실험에 반영',
  "eyebrow: 'LLM FINE-TUNING / ANDROID'",
  "headline: '크리에이터와 팬이 채팅과 디지털 콘텐츠로 만나는 팬 플랫폼입니다. 앱의 공통 기반과 주요 기능을 개발하고 Google Play 출시 후 운영까지 맡았습니다.'",
  "headline: '사내 AI TF에서 캐릭터 대화 모델의 데이터 구성부터 파인튜닝, 평가와 서빙을 맡았습니다. 해당 모델을 사용하는 Android 앱에서는 SSE 채팅과 Google Play 결제를 개발했습니다.'",
  'Artist Top Ranker는 Compose pointerInput API로 가로 스와이프를 구현하고',
  '프로필 블러 이미지를 별도 Composable로 분리해 진행률 갱신 때 반복되던 이미지 캐시 초기화 문제 해결',
  "caption: 'TAKE HOME / 홈 화면 개편'",
  "caption: '3D PHOTOCARD / SceneView 기반'",
  "caption: 'TAKE ALARM / 락스크린 영상 알람'",
  "caption: 'HOME / 크리에이터 굿즈 탐색'",
  "caption: 'CHATTING / 특정 사용자에게 답장'",
  "caption: 'MEDIA / 디지털 카드 상세'",
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
  'Vuddy의 디자인 토큰을 Kotlin 코드로 변환하고 PR을 생성하도록 자동화했습니다.',
  '브랜드 색상 개편 시 시맨틱 토큰을 사용하는 화면은 화면 코드 수정 없이 토큰 값 변경으로 새 색상을 반영했습니다.',
  'AI에 반복 작업을 맡기고 코드와 동작을 직접 확인합니다.',
  'QA 티켓에 기록된 문제의 재현부터 원인 분석, 코드 수정과 테스트, PR과 배포 상태 동기화까지 Agent Skill 하나로 묶었습니다.',
  'Android Studio에서 확인하기 불편했던 SSE 트래픽을 PC 브라우저에서 볼 수 있도록 디버그 앱 전용 네트워크 검사 도구를 구현했습니다.',
  'AI가 구현한 화면과 기능은 Compose Stable 검사, 스크린샷 테스트와 코드 리뷰로 확인합니다. 결제와 미디어 같은 핵심 모듈은 테스트 코드로도 검증합니다.',
  '새 AI 프로젝트의 기획과 디자인 문서를 GitHub에서 관리하고 AI가 개발 전에 최신 내용을 확인하도록 했습니다.',
]

const requiredExperienceSummaries = [
  'SSE 기반 캐릭터 채팅과 Google Play 인앱 결제 개발을 맡았습니다.',
  '캐릭터 대화 모델의 데이터 구성과 파인튜닝, 평가와 서빙을 맡았습니다.',
  'Jetpack Compose 기반 멀티모듈 구조를 설계하고 인증, 미디어와 실시간 채팅 기능을 개발했습니다.',
  'SceneView로 3D 포토카드를 구현하고 Room과 AlarmManager 기반 영상 알람을 개발했습니다.',
]

for (const summary of requiredExperienceSummaries) {
  if (!experienceSource.includes(summary)) {
    throw new Error(`사용자가 선택한 경력 요약이 빠졌습니다: ${summary}`)
  }
}

for (const evidence of requiredHowIWorkEvidence) {
  if (!howIWorkSource.includes(evidence)) {
    throw new Error(`AI와 함께 개발하는 방식 섹션의 근거가 빠졌습니다: ${evidence}`)
  }
}

if (/MOMENTICA Figma 목업은 여전히 게시 금지|사내 Figma 화면\(참고 전용\)/.test(siteStructure)) {
  throw new Error('사이트 구조 문서가 포트폴리오 콘텐츠 가이드의 화면별 승인 기록과 충돌합니다.')
}

console.log('공개 이름, 경력 근거와 자산 승인을 확인했습니다.')
