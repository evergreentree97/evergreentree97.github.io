# 포트폴리오 리디자인 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** evergreentree97.github.io의 문구를 사람이 쓴 전문적인 한국어로 다듬고, 3단 그린 팔레트와 게임스러운 모션을 입힌다.

**Architecture:** 기존 React + Vite + CSS Modules 구조를 그대로 쓴다. 콘텐츠는 `src/data/*.ts`, 스타일 토큰은 `src/styles/global.css`, 모션은 CSS 애니메이션과 IntersectionObserver로만 구현한다. 새 라이브러리는 추가하지 않는다.

**Tech Stack:** React 19, TypeScript, Vite, CSS Modules. 테스트 프레임워크 없음. 검증은 `npm run check`(eslint + tsc + vite build)와 렌더 확인.

**Spec:** `docs/superpowers/specs/2026-08-03-portfolio-redesign-design.md`

## Global Constraints

- 새 npm 의존성 금지. CSS와 IntersectionObserver만으로 모션 구현.
- 문구에 U+2014(—)와 U+00B7(·) 금지. "A부터 B까지", "A하다가 B합니다" 같은 대구법 금지. 번역투 금지.
- 기여 등급을 넘는 문장 금지: 이 계획에 적힌 문구를 그대로 쓰고, 임의로 성과 표현을 강화하지 않는다.
- 수치에는 채점 조건을 함께 적는다. LLM 평가 수치는 자체 LLM 채점 도구 결과임을 유지한다.
- 모든 모션은 `prefers-reduced-motion: reduce`에서 꺼져야 한다. global.css의 기존 전역 규칙이 animation/transition을 0.01ms로 줄이므로, JS로 도는 모션(카운트업)만 별도 분기한다.
- 각 태스크 끝에 `npm run check` 통과 후 커밋. 커밋 메시지는 한국어, 기존 스타일(`포트폴리오 문구를 간결하게 정리`)을 따른다.
- push는 하지 않는다. 사용자가 별도 승인한다.

---

### Task 1: Hero와 섹션 도입 문구 교체

**Files:**
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/Projects.tsx`
- Modify: `src/components/Experience.tsx`
- Modify: `src/components/Skills.tsx`

**Interfaces:**
- Produces: Hero h1은 두 줄 텍스트를 `<span className={styles.line}>` 두 개로 나눠 렌더링한다(Task 3의 타이핑 모션이 이 구조를 쓴다).

- [x] **Step 1: Hero 문구 교체**

`src/components/Hero.tsx`의 h1과 description을 다음으로 교체한다. 기존 `<strong>`, `mobileBreak` 구조는 제거하고 line span 구조로 바꾼다.

```tsx
<h1 id="hero-title">
  <span className={styles.line}>채팅 앱 만들던 사람이</span>
  <br />
  <span className={styles.line}>왜 모델을 학습하냐면요<span className={styles.cursor}>_</span></span>
</h1>
<p className={styles.description}>
  Levvels에서 Android 앱을 만듭니다. Vuddy의 실시간 채팅과 미디어,
  Momentica의 포토카드 도감과 영상 알람을 개발했고,
  사내 AI TF에서 LLM 학습과 평가를 맡고 있습니다.
</p>
```

messageBox 문구는 `앱을 만들고 운영합니다.` 에서 `PRESS START TO SCROLL`로 바꾼다(게임 HUD 톤, Task 3에서 스타일 적용).

- [x] **Step 2: 섹션 도입 한 줄 추가**

처음 온 사람이 섹션 목적을 알 수 있게 SectionTitle 아래 안내문을 넣는다.

`src/components/Projects.tsx`: SectionTitle 바로 아래에 추가.

```tsx
<p className={styles.sectionNote}>각 프로젝트는 문제, 선택, 결과 순서로 정리했습니다. 수치에는 측정 조건을 함께 적었습니다.</p>
```

`Projects.module.css`에 `.sectionNote` 스타일을 추가한다(Skills의 `.note`와 동일한 룩: `color: var(--text-secondary); margin-bottom: 28px;` 수준이면 된다. 기존 `.note` 스타일을 Skills.module.css에서 확인해 맞춘다).

`src/components/Experience.tsx`: 같은 방식으로 SectionTitle 아래 추가.

```tsx
<p className={styles.sectionNote}>회사 경력입니다. 담당한 범위 기준으로 적었습니다.</p>
```

`src/components/Skills.tsx`: 기존 note 문구를 교체.

```tsx
<p className={styles.note}>제품에서 직접 써본 기술만 적었습니다.</p>
```

- [x] **Step 3: 검증과 커밋**

Run: `npm run check`
Expected: lint, build 모두 통과.

```bash
git add src/components/Hero.tsx src/components/Projects.tsx src/components/Projects.module.css src/components/Experience.tsx src/components/Experience.module.css src/components/Skills.tsx
git commit -m "히어로와 섹션 도입 문구를 대화형 훅과 안내문으로 교체"
```

---

### Task 2: 본문 데이터 문구 다듬기

**Files:**
- Modify: `src/data/projects.ts`
- Modify: `src/data/experience.ts`
- Modify: `src/components/About.tsx`

**Interfaces:**
- Consumes: 없음. Task 1과 독립.
- Produces: 없음(문구만 교체, 타입과 구조 불변).

- [x] **Step 1: projects.ts summary를 읽히는 문장으로 교체**

세 featured 프로젝트의 `summary`만 다음으로 교체한다. outcomes와 caseStudy는 이미 검증된 문구이므로 건드리지 않는다.

```ts
// Vuddy
summary: '신규 소셜 앱의 멀티모듈 구조를 잡고, 실시간 채팅과 미디어 메시지를 구현했습니다.',
// LLM 평가 체계
summary: '질문, 채점 기준, 서빙 설정을 고정해 같은 조건에서 모델을 비교하는 평가 체계를 만들었습니다.',
// Momentica
summary: '포토카드 도감과 영상 알람을 맡아, 앱 종료와 재부팅 뒤에도 알람이 실행되게 설계했습니다.',
```

- [x] **Step 2: experience.ts summary 다듬기**

```ts
summary: 'Kotlin과 Jetpack Compose로 Android 앱을 개발합니다. 사내 AI TF에서는 오픈소스 LLM의 데이터 정제와 LoRA 추가 학습, 평가 도구, vLLM 서빙을 맡고 있습니다.',
```

- [x] **Step 3: About 문단 다듬기**

`src/components/About.tsx`의 h3와 첫 문단을 교체한다. 나머지 두 문단은 유지.

```tsx
<h3>화면을 만들다가 모델까지 내려간 이유</h3>
<p>
  Vuddy에서 초기 멀티모듈 구조와 실시간 채팅, 미디어를 맡았고
  Momentica에서 포토카드 도감과 영상 알람을 개발했습니다.
  회사에 AI TF가 생기면서 LLM 학습과 평가로 일의 범위가 넓어졌습니다.
</p>
```

- [x] **Step 4: 검증과 커밋**

Run: `npm run check` 그리고 `grep -rn $'—\|·' src/` (결과 없어야 함)
Expected: 통과.

```bash
git add src/data/projects.ts src/data/experience.ts src/components/About.tsx
git commit -m "프로젝트와 경력 요약을 읽히는 문장으로 다듬기"
```

---

### Task 2b: HowIWork 섹션을 프로세스 해부로 재구성

**Files:**
- Modify: `src/data/workingMethod.ts`
- Modify: `src/components/HowIWork.tsx`
- Modify: `src/components/HowIWork.module.css`

**Interfaces:**
- Produces: `workingMethod.ts`에 `questSteps: QuestStep[]` export 추가. `type QuestStep = { step: string; title: string; description: string }`.
- Consumes: Task 5의 Reveal stagger(이 섹션은 이미 stagger 대상), Task 3의 `--hud-dark` 토큰. **실행 순서는 Task 3 다음에 둔다.** Task 3보다 먼저 하면 `--hud-dark: #14231a;`를 global.css에 먼저 추가한다.

**의도:** "AI가 만든 산출물이 내 의도와 맞는지 구조적으로 검증한다"가 섹션의 중심 주장이다. QA 티켓 스킬을 대표 사례로, 절차를 게임 퀘스트 로그 UI로 보여준다.

- [x] **Step 1: workingMethod.ts에 퀘스트 데이터 추가**

기존 `workingMethod` 배열은 유지하고 아래를 추가한다.

```ts
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
```

- [x] **Step 2: HowIWork.tsx 재구성**

도입 문구를 교체하고, 4원칙 그리드 위에 퀘스트 로그 블록을 넣는다.

```tsx
import { questSteps, workingMethod } from '../data/workingMethod'
import { PixelIcon } from './PixelIcon'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import styles from './HowIWork.module.css'

export function HowIWork() {
  return (
    <section className={styles.section} id="how-i-work" aria-labelledby="how-i-work-title">
      <Reveal stagger>
        <SectionTitle id="how-i-work-title" index="03" eyebrow="PROCESS" title="AI와 일하는 방식" />
        <div className={styles.intro}>
          <p>AI가 만든 산출물이 제 의도와 맞는지 구조적으로 검증합니다.</p>
          <span>
            <PixelIcon name="code" /> 절차를 스킬로 만들어 저장소에 둡니다
          </span>
        </div>
        <p className={styles.introDetail}>
          필요한 정보를 한 번에 다 주지 않습니다. 절차를 나누고,
          단계마다 그때 필요한 컨텍스트와 명령만 쓰게 합니다.
          대표 사례가 QA 티켓 처리 스킬입니다.
        </p>

        <div className={styles.quest} role="group" aria-label="QA 티켓 처리 절차">
          <div className={styles.questHeading}>
            <span className={styles.questLabel}>QUEST LOG</span>
            <h3>QA 티켓 처리</h3>
            <p>티켓 URL 하나를 주면 이 순서로 움직입니다.</p>
          </div>
          <ol className={styles.questSteps}>
            {questSteps.map((quest) => (
              <li key={quest.step}>
                <span className={styles.questCheck} aria-hidden="true" />
                <small>{quest.step}</small>
                <strong>{quest.title}</strong>
                <p>{quest.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <ol className={styles.method}>
          {workingMethod.map((item, index) => (
            <li key={item.label}>
              <div className={styles.marker} aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
              <small>{item.label}</small>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>

        <div className={styles.cases} role="group" aria-label="산출물 검증 방식">
          <span className={styles.casesLabel}>VERIFY / 코드 밖에서 확인합니다</span>
          <ul>
            <li>
              <strong>기기에서 직접 조작</strong>
              <p>코드 리뷰로 끝내지 않습니다. adb 명령으로 실제 기기에서 시나리오를 재현해 동작을 확인합니다.</p>
            </li>
            <li>
              <strong>화면을 증거로 남김</strong>
              <p>스크린샷과 영상 녹화를 스킬로 자동화해, 확인한 동작을 PR과 QA 티켓에 그대로 첨부합니다.</p>
            </li>
            <li>
              <strong>기존 앱과 나란히 비교</strong>
              <p>수정본을 별도 이름의 테스트 빌드로 설치해, 기존 버전과 같은 기기에서 나란히 비교합니다.</p>
            </li>
          </ul>
        </div>

        <p className={styles.outro}>
          서버 API 반영, PR 생성과 커밋 분리도 같은 방식으로 절차를 만들어 씁니다.
          얼마나 빨라졌는지는 측정한 것만 말합니다.
        </p>
      </Reveal>
    </section>
  )
}
```

- [x] **Step 3: 퀘스트 로그 스타일**

`HowIWork.module.css`에 추가한다. 픽셀 게임 퀘스트 창 느낌: 다크 HUD 프레임에 단계별 체크박스, Reveal 진입 시 체크가 순서대로 켜진다.

```css
.introDetail {
  max-width: 62ch;
  margin-top: 18px;
  color: var(--text-secondary);
}

.quest {
  margin-top: 34px;
  border: 3px solid var(--hud-dark);
  background: var(--surface);
  box-shadow: 6px 6px 0 var(--hud-dark);
}

.questHeading {
  padding: 20px 24px;
  border-bottom: 1px solid var(--border);
  background: var(--hud-dark);
  color: var(--surface);
}

.questLabel {
  color: var(--pixel-green);
  font-family: var(--font-pixel);
  font-size: 0.62rem;
  letter-spacing: 0.08em;
}

.questHeading h3 {
  margin-top: 6px;
  font-size: 1.15rem;
}

.questHeading p {
  margin-top: 4px;
  color: rgb(251 253 248 / 72%);
  font-size: 0.88rem;
}

.questSteps {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  list-style: none;
}

.questSteps li {
  position: relative;
  min-width: 0;
  padding: 22px 20px 24px;
}

.questSteps li + li {
  border-left: 1px solid var(--border);
}

.questCheck {
  display: block;
  width: 16px;
  height: 16px;
  margin-bottom: 14px;
  border: 2px solid var(--accent-dark);
  background: var(--surface);
}

.questSteps li small {
  color: var(--accent-dark);
  font-family: var(--font-pixel);
  font-size: 0.58rem;
}

.questSteps li strong {
  display: block;
  margin-top: 6px;
  font-size: 1.02rem;
}

.questSteps li p {
  margin-top: 10px;
  color: var(--text-secondary);
  font-size: 0.88rem;
  line-height: 1.65;
}

.cases {
  margin-top: 34px;
  padding: 24px;
  border: 1px solid var(--border);
  background: var(--surface);
}

.casesLabel {
  color: var(--accent-dark);
  font-family: var(--font-pixel);
  font-size: 0.62rem;
  letter-spacing: 0.08em;
}

.cases ul {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin-top: 16px;
  list-style: none;
}

.cases li strong {
  display: block;
  font-size: 0.98rem;
}

.cases li p {
  margin-top: 8px;
  color: var(--text-secondary);
  font-size: 0.88rem;
  line-height: 1.65;
}

@media (max-width: 900px) {
  .cases ul {
    grid-template-columns: 1fr;
  }
}

.outro {
  max-width: 62ch;
  margin-top: 28px;
  color: var(--text-secondary);
}

@media (max-width: 900px) {
  .questSteps {
    grid-template-columns: 1fr;
  }

  .questSteps li + li {
    border-top: 1px solid var(--border);
    border-left: 0;
  }
}
```

체크 켜짐 모션: Reveal의 `visible` 상태를 CSS Modules 안에서 직접 알 수 없으므로, 부모 `.quest`가 stagger 대상 컨테이너 안에 있음을 이용한다. Reveal.module.css의 stagger 규칙(Task 5)이 `article`과 `ol > li`를 잡으므로 questSteps li도 순차 등장한다. 체크박스 채움은 등장 후 켜지도록 각 li의 `questCheck`에 지연 애니메이션을 준다.

```css
.questSteps li .questCheck {
  animation: checkFill 200ms steps(2, end) both;
}

.questSteps li:nth-child(1) .questCheck { animation-delay: 500ms; }
.questSteps li:nth-child(2) .questCheck { animation-delay: 700ms; }
.questSteps li:nth-child(3) .questCheck { animation-delay: 900ms; }
.questSteps li:nth-child(4) .questCheck { animation-delay: 1100ms; }
.questSteps li:nth-child(5) .questCheck { animation-delay: 1300ms; }

@keyframes checkFill {
  from { background: var(--surface); }
  to { background: var(--pixel-green); }
}
```

스크롤 진입 전에 체크가 미리 채워지는 문제가 보이면(뷰포트 밖에서 애니메이션이 이미 끝나는 경우), `.quest`를 감싸는 별도 `<Reveal>`로 분리해 visible 클래스 하위에서만 애니메이션이 돌게 조정한다.

- [x] **Step 4: 검증과 커밋**

Run: `npm run check`, `npm run dev`에서 퀘스트 로그 렌더와 체크 순차 켜짐, 모바일(375px) 세로 배치 확인.

```bash
git add src/data/workingMethod.ts src/components/HowIWork.tsx src/components/HowIWork.module.css
git commit -m "AI 활용 섹션을 QA 티켓 절차 중심의 퀘스트 로그로 재구성"
```

---

### Task 3: 3단 그린 팔레트와 CRT 텍스처

**Files:**
- Modify: `src/styles/global.css`

**Interfaces:**
- Produces: CSS 변수 `--accent`, `--accent-dark`, `--pixel-green`, `--hud-dark`, `--scanline`. 이후 태스크의 모션 스타일이 이 변수를 쓴다.

- [x] **Step 1: 팔레트 토큰 교체**

`:root`의 색 토큰을 다음으로 바꾼다. 명도 대비를 위해 본문 텍스트는 더 어둡게 간다.

```css
--background: #eef8ea;
--surface: #fbfdf8;
--surface-muted: #d9eecf;
--text-primary: #16241a;
--text-secondary: #46584c;
--border: #9cbc9a;
--accent: #2ea75c;
--accent-dark: #1c5c38;
--pixel-green: #8fd47a;
--hud-dark: #14231a;
--image-tint: rgb(28 92 56 / 8%);
--scanline: rgb(28 92 56 / 4%);
```

- [x] **Step 2: CRT 스캔라인 텍스처 추가**

body 배경에 기존 도트 패턴을 유지하면서 수평 스캔라인 레이어를 한 겹 더한다.

```css
body {
  background:
    repeating-linear-gradient(0deg, var(--scanline) 0 1px, transparent 1px 4px),
    radial-gradient(circle at 1px 1px, rgb(28 92 56 / 6%) 1px, transparent 1px) 0 0 / 18px 18px,
    var(--background);
}
```

- [x] **Step 3: 렌더 확인, 검증과 커밋**

Run: `npm run check`, `npm run dev` 후 브라우저에서 대비와 텍스처 확인(텍스트가 스캔라인에 묻히면 `--scanline` 알파를 3%로 낮춘다).

```bash
git add src/styles/global.css
git commit -m "3단 그린 팔레트와 CRT 스캔라인 텍스처 적용"
```

---

### Task 4: Hero 게임 모션 (타이핑, HUD 등장, 씬 모션)

**Files:**
- Modify: `src/components/Hero.module.css`
- Modify: `src/components/Hero.tsx` (클래스 추가만)

**Interfaces:**
- Consumes: Task 1의 `styles.line` 두 줄 구조, Task 3의 색 토큰.

- [x] **Step 1: 타이핑 등장 효과**

h1 두 줄이 순서대로 타이핑되듯 나타나게 한다. `steps()`와 `clip-path` 대신 폭 애니메이션이 픽셀 폰트와 잘 맞는다.

```css
.line {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  max-width: 0;
  animation: typeIn 900ms steps(14, end) forwards;
}

.line:nth-child(3) {
  animation-delay: 950ms;
}

@keyframes typeIn {
  to { max-width: 100%; }
}
```

주의: `<br />`이 두 span 사이에 있으므로 두 번째 줄 선택자는 `nth-child(3)`이다. 커서(`.cursor`)의 기존 깜빡임 애니메이션은 유지한다. 모바일에서 `white-space: nowrap`이 넘치면 `.line`에 `max-width` 대신 `clip-path: inset(0 100% 0 0)` 방식으로 바꾼다.

- [x] **Step 2: HUD 박스 등장 효과**

statusBox와 messageBox가 게임 HUD처럼 아래에서 튀어 올라오게 한다.

```css
.statusBox,
.messageBox {
  animation: hudPop 400ms cubic-bezier(0.2, 1.4, 0.4, 1) both;
}

.statusBox { animation-delay: 1900ms; }
.messageBox { animation-delay: 2100ms; }

@keyframes hudPop {
  from { opacity: 0; transform: translateY(14px) scale(0.94); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
```

messageBox에는 픽셀 게임 대사창 느낌으로 `font-family: var(--font-pixel); letter-spacing: 0.08em;`을 적용하고, 끝에 깜빡이는 ▼ 인디케이터를 `::after`로 단다.

```css
.messageBox::after {
  content: '▼';
  margin-left: 8px;
  animation: blink 1.1s steps(2, start) infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}
```

- [x] **Step 3: 씬 프레임 부유 모션**

sceneFrame에 아주 느린 부유 모션을 준다. 4px 이내로 절제한다.

```css
.sceneFrame {
  animation: floatIdle 5s ease-in-out infinite;
}

@keyframes floatIdle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
```

- [x] **Step 4: 검증과 커밋**

Run: `npm run check`, `npm run dev`로 등장 순서(제목 타이핑 → HUD 팝) 확인. 시스템 설정에서 모션 줄이기를 켜고 전부 즉시 표시되는지 확인.

```bash
git add src/components/Hero.module.css src/components/Hero.tsx
git commit -m "히어로에 타이핑과 HUD 등장 모션 추가"
```

---

### Task 5: 스크롤 stagger reveal

**Files:**
- Modify: `src/components/Reveal.tsx`
- Modify: `src/components/Reveal.module.css`
- Modify: `src/components/Projects.tsx`, `src/components/Skills.tsx`, `src/components/HowIWork.tsx` (자식에 stagger 인덱스 클래스 적용)

**Interfaces:**
- Produces: `Reveal`에 `stagger?: boolean` prop. true면 직계 자식 리스트가 80ms 간격으로 순차 등장.

- [x] **Step 1: Reveal에 stagger prop 추가**

```tsx
type RevealProps = {
  children: ReactNode
  className?: string
  stagger?: boolean
}

export function Reveal({ children, className = '', stagger = false }: RevealProps) {
  // 기존 IntersectionObserver 로직 유지
  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${stagger ? styles.stagger : ''} ${isVisible ? styles.visible : ''} ${className}`}
    >
      {children}
    </div>
  )
}
```

- [x] **Step 2: 픽셀 블록 조립 애니메이션**

기존 `.reveal`/`.visible` 트랜지션을 유지하되, stagger 모드에서는 카드류가 계단식으로 올라온다. CSS Modules에서 하위 요소는 `:global`이 아니라 컨테이너 기준 자손 선택자로 잡는다. 대상 섹션의 카드 요소(article, li)를 공통으로 선택한다.

```css
.stagger article,
.stagger ol > li {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 360ms ease, transform 360ms cubic-bezier(0.2, 1.2, 0.4, 1);
}

.stagger.visible article,
.stagger.visible ol > li {
  opacity: 1;
  transform: translateY(0);
}

.stagger.visible article:nth-child(1), .stagger.visible ol > li:nth-child(1) { transition-delay: 0ms; }
.stagger.visible article:nth-child(2), .stagger.visible ol > li:nth-child(2) { transition-delay: 80ms; }
.stagger.visible article:nth-child(3), .stagger.visible ol > li:nth-child(3) { transition-delay: 160ms; }
.stagger.visible article:nth-child(4), .stagger.visible ol > li:nth-child(4) { transition-delay: 240ms; }
```

- [x] **Step 3: 적용**

`Projects.tsx`, `Skills.tsx`, `HowIWork.tsx`의 `<Reveal>`을 `<Reveal stagger>`로 바꾼다. Experience와 Activities는 항목이 적으니 기본 리빌 유지.

- [x] **Step 4: 검증과 커밋**

Run: `npm run check`, `npm run dev`로 스크롤하며 프로젝트 카드와 스킬 그룹, 워크플로 카드가 순차 등장하는지 확인.

```bash
git add src/components/Reveal.tsx src/components/Reveal.module.css src/components/Projects.tsx src/components/Skills.tsx src/components/HowIWork.tsx
git commit -m "스크롤 시 카드가 순차 등장하는 stagger reveal 추가"
```

---

### Task 6: 호버 픽셀 인터랙션

**Files:**
- Modify: `src/components/Hero.module.css` (버튼)
- Modify: `src/components/Projects.module.css` (카드)
- Modify: `src/components/Skills.module.css` (태그)

**Interfaces:**
- Consumes: Task 3의 `--accent-dark`, `--pixel-green`.

- [x] **Step 1: 버튼 픽셀 점프**

Hero 버튼(다른 곳에서 재사용하는 스타일이면 그 파일에서)에 8bit 그림자 점프를 준다. 기존 hover 스타일이 있으면 교체한다.

```css
.button {
  transition: transform 120ms steps(2, end), box-shadow 120ms steps(2, end);
}

.button:hover {
  transform: translate(-2px, -2px);
  box-shadow: 4px 4px 0 var(--accent-dark);
}

.button:active {
  transform: translate(0, 0);
  box-shadow: 1px 1px 0 var(--accent-dark);
}
```

- [x] **Step 2: 프로젝트 카드 선택 프레임**

게임 아이템 선택창처럼 hover 시 테두리가 깜빡인다.

```css
.card {
  transition: transform 140ms steps(2, end);
}

.card:hover {
  transform: translateY(-4px);
  animation: selectFrame 900ms steps(2, start) infinite;
}

@keyframes selectFrame {
  50% { outline: 3px solid var(--pixel-green); outline-offset: 3px; }
}
```

기존 `.card`에 border가 있으면 outline 방식이 겹치지 않는지 확인하고, 겹치면 `border-color`를 깜빡이는 방식으로 바꾼다.

- [x] **Step 3: 스킬 태그 인벤토리 슬롯**

```css
.groups ul li {
  transition: transform 100ms steps(2, end), background 100ms steps(2, end);
}

.groups ul li:hover {
  transform: translateY(-2px);
  background: var(--pixel-green);
  cursor: default;
}
```

실제 선택자는 Skills.module.css의 기존 태그 클래스명에 맞춘다.

- [x] **Step 4: 검증과 커밋**

Run: `npm run check`, `npm run dev`에서 hover 반응 확인. 터치 기기 고려로 hover는 시각 효과만, 기능 변화 없음 확인.

```bash
git add src/components/Hero.module.css src/components/Projects.module.css src/components/Skills.module.css
git commit -m "버튼, 카드, 스킬 태그에 픽셀 호버 인터랙션 추가"
```

---

### Task 7: ProofStrip 카운트업

**Files:**
- Create: `src/components/useCountUp.ts`
- Modify: `src/components/ProofStrip.tsx`
- Modify: `src/components/ProofStrip.module.css`

**Interfaces:**
- Produces: `useCountUp(target: number, durationMs?: number): { value: number; ref: RefObject<HTMLElement | null> }`. ref가 화면에 들어오면 0에서 target까지 카운트업.

- [x] **Step 1: useCountUp 훅 작성**

```ts
import { useEffect, useRef, useState } from 'react'

export function useCountUp(target: number, durationMs = 900) {
  const ref = useRef<HTMLElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const element = ref.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!element || reduceMotion || !('IntersectionObserver' in window)) {
      setValue(target)
      return undefined
    }

    let frame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / durationMs, 1)
        setValue(Math.round(target * progress * 100) / 100)
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, { threshold: 0.4 })

    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target, durationMs])

  return { value, ref }
}
```

- [x] **Step 2: ProofStrip에 적용**

세 번째 항목의 `76.96 → 82.28`에서 82.28만 카운트업한다. 데이터 구조를 살짝 바꾼다.

```tsx
export function ProofStrip() {
  const { value, ref } = useCountUp(82.28)
  return (
    <aside className={styles.strip} aria-label="주요 경험 요약">
      <div>
        <PixelIcon name="android" />
        <p>
          <strong>Android 제품 3개</strong>
          <span>Momentica 기능 개발, Vuddy 초기 구축, 신규 앱의 결제와 광고</span>
        </p>
      </div>
      <div>
        <PixelIcon name="flag" />
        <p>
          <strong>AI 도구 활용</strong>
          <span>서버 API 연동과 QA 준비</span>
        </p>
      </div>
      <div>
        <PixelIcon name="save" />
        <p>
          <strong ref={ref as React.RefObject<HTMLElement>}>76.96 → {value.toFixed(2)}</strong>
          <span>동일 입력 40건을 자체 LLM 채점 도구로 비교</span>
        </p>
      </div>
    </aside>
  )
}
```

주의: `→`(U+2192)는 금지 문자가 아니다. 숫자가 도는 동안에도 레이아웃이 흔들리지 않게 `strong`에 `font-variant-numeric: tabular-nums;`를 CSS에 추가한다.

- [x] **Step 3: 검증과 커밋**

Run: `npm run check`, `npm run dev`에서 스크롤로 진입 시 카운트업 확인, 모션 줄이기 설정에서 즉시 82.28 표시 확인.

```bash
git add src/components/useCountUp.ts src/components/ProofStrip.tsx src/components/ProofStrip.module.css
git commit -m "ProofStrip 평가 점수에 카운트업 모션 추가"
```

---

### Task 8: 최종 검수

**Files:**
- Modify: 검수에서 걸린 파일들

- [x] **Step 1: 금지 문자와 대구법 검사**

Run: `grep -rn $'—' src/ ; grep -rn $'·' src/`
Expected: 결과 없음.

문구 전체를 훑어 "A부터 B까지", "A하다가 B합니다", "뿐만 아니라", "단순히 X가 아니라 Y" 패턴이 없는지 확인한다. 발견하면 평서문 두 문장으로 푼다.

- [x] **Step 2: humanizer 검수 2회**

humanizer 스킬(또는 그 기준: 번역투, 과한 격식, 기계적 대구, 상투적 강조 제거)로 화면에 보이는 모든 한국어 문구를 두 번 검수한다. 1회차에서 수정이 나오면 수정 후 2회차를 돌린다.

- [x] **Step 3: 빌드와 렌더 최종 확인**

Run: `npm run check` 후 `npm run dev`
확인 항목: 데스크톱(1280px)과 모바일(375px) 폭에서 타이핑 모션 줄바꿈, 카드 stagger, 호버 효과, 카운트업, 색 대비. 스크린샷을 남긴다.

- [x] **Step 4: 커밋**

```bash
git add -A
git commit -m "최종 문구 검수와 렌더 확인 반영"
```

push는 하지 않는다. 사용자 확인 후 진행한다.
