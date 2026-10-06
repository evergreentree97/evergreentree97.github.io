# 포트폴리오 구조

공개 문구와 사실 기준은 [`content.md`](content.md)가 소유한다. 이 문서는 현재 작업 트리의 화면 순서와 유지할 레이아웃 결정만 관리한다.

## 현재 기준

현재 작업 트리의 실제 화면 구성은 [`src/App.tsx`](../../src/App.tsx)를 최종 기준으로 삼는다.

## 화면 순서

1. 첫 화면
2. 경력
3. 주요 프로젝트
4. AI와 함께 개발하는 방식
5. 사이드 프로젝트
6. 오픈소스와 대외 활동
7. 취향
8. 연락처
9. 푸터

오픈소스와 대외 활동은 넓은 화면에서 두 열, 작은 화면에서 한 열로 배치한다. 별도 소개와 기술 목록 섹션은 두지 않는다. 기술은 주요 프로젝트 태그에서 사용 맥락과 함께 보여준다.

## 유지할 화면 결정

- 어두운 배경, 큰 제목과 좌우 분할 레이아웃을 유지한다.
- 첫 화면 내부의 최소 높이는 데스크톱에서 640px를 넘기지 않고, 경력 위 여백은 56px로 둔다. 작은 화면에서는 첫 화면 아래와 경력 위 여백을 각각 40px로 맞춘다.
- 전체 폭 배경은 페이지 경계 안에서 잘라 가로 스크롤을 만들지 않는다.
- 상단 내비게이션은 현재 위치를 보여준다. 좌측 섹션 레일은 라벨을 포함할 여백이 확보되는 1500px 이상에서만 보인다.
- 주요 프로젝트는 데스크톱에서 글과 미디어를 같은 너비로 함께 보여주고, 미디어 높이는 글보다 과하게 커지지 않도록 제한한다. 기여 항목은 제목과 본문을 줄로 나누고 옅은 구분선으로 흐름을 정리한다. 화면 선택 버튼으로 큰 미디어를 전환하며, 모바일에서는 선택한 화면 한 장을 원본 비율에 가깝게 크게 보여준다. 공개 가능한 화면은 `content.md`의 승인 기록을 따른다.
- 일반 섹션은 관찰자가 준비된 경우 한 번만 자연스럽게 나타나며 기본 상태와 동작 줄이기 환경에서는 항상 보인다. 프로젝트 전체를 고정하지 않고, 큰 화면과 충분한 높이를 모두 만족할 때 미디어 열만 짧게 따라온다.
- 경력과 각 대표 프로젝트는 처음 진입할 때 자기 영역 안의 세로 그라데이션 배경만 280ms 동안 진해진 뒤 유지된다. 모바일도 280ms이며, 동작 줄이기와 observer 미지원 환경에서는 고정된 농도로 보인다.
- 데스크톱의 프로젝트 사이는 합산 144px, 마지막 프로젝트와 AI 활용도 144px로 맞춘다. 모바일은 프로젝트 사이 104px, 마지막 프로젝트와 AI 활용 96px로 맞추고 하단으로 갈수록 간격을 줄인다.
- Build Trace, 고정 스크롤 장면, 장식용 다이어그램, 별도 프로젝트 도입 블록은 다시 추가하지 않는다.
- 화면을 매 프레임 계산하는 패럴랙스나 프로젝트 화면을 과하게 확대하는 연출은 사용하지 않는다.

## 하단 구분선과 간격

- 오픈소스와 대외 활동 제목 아래에는 제목 컴포넌트의 선 하나만 둔다.
- 두 목록의 마지막 항목 아래에는 선을 두지 않는다.
- 취향 섹션은 위쪽 선만 유지하고 아래쪽 선은 두지 않는다.
- 연락처 제목 아래 선과 연락처 링크 내부 구분선은 유지한다.
- 연락처 콘텐츠와 푸터 사이에는 전체 폭 구분선을 두지 않는다.
- 연락처 아래 여백 `var(--space-xl)`과 푸터 위 여백 `var(--space-lg)`을 합쳐 약 60px 간격을 유지한다.

## 수정 위치

| 대상 | 파일 |
|---|---|
| 전체 화면 순서 | `src/App.tsx` |
| 첫 화면 | `src/components/Hero.tsx` |
| 경력 | `src/data/experience.ts`, `src/components/Experience.tsx` |
| 주요 프로젝트 | `src/data/projects.ts`, `src/components/Projects.tsx`, `src/components/ProjectScene.tsx` |
| AI와 함께 개발하는 방식 | `src/components/HowIWork.tsx` |
| 사이드 프로젝트 | `src/data/sideProjects.ts` |
| 오픈소스 | `src/data/projects.ts`, `src/components/MoreWork.tsx` |
| 대외 활동 | `src/data/activities.ts`, `src/components/Activities.tsx` |
| 취향과 내비게이션 | `src/data/profile.ts` |
| 연락처와 푸터 | `src/components/Contact.tsx`, `src/components/Footer.tsx` |
| 공통 스타일 | `tokens.css`, `src/styles/` |

구조를 바꾼 뒤에는 이 문서와 실제 순서를 맞추고 `npm run check`를 실행한다.

## Content grouping (2026-09-09)

- Preserve the hero title and illustration. The approved introduction has two short paragraphs.
- Within the AI project, use two named groups: model development and team review, then Android chat and billing. Group headings are level 3 and individual contribution headings are level 4. Other projects retain level-3 contribution headings.
- AI media contains two approved masked screens. Select the character-chat screen initially. Size the mobile selector to the actual number of available screens.
- The AI development section contains five evidence items. Keep two columns on desktop and one on mobile; the final short planning-document item spans the desktop row.
- Open-source cards contain one summary, technology tags and the repository link.
- Momentica has three level-3 contribution headings: 3D photocard, take-home redesign and alarm. Include Artist Top Ranker in the take-home redesign's body paragraph. All three use the same heading, body, alignment and separators on desktop and mobile.

## Original-layout polish (2026-10-06)

Baseline: `e3c3458`, restored by `61e9a5b`. Preserve the dark orange palette, illustration, approved introduction, section order and existing project content. Apply `emil-design-eng` to motion and control feedback, and `web-typography` to reading sizes. This is a local preview revision.

| Before | After | Why |
| --- | --- | --- |
| Desktop hero title up to 76px | 48–56px, mobile 32–36px | Give the approved introduction more space without changing the headline |
| Project title up to 72px | 40–48px, mobile 30–36px | Keep long Korean project names together across two or three lines |
| Small-screen career dates and titles on opposite sides | Date above the linked title, both aligned left | Avoid compressing the project name into the remaining width |
| Some activity and side-project descriptions at 14.72px | 16px with existing line spacing | Match the reading size of the main descriptions |
| 480–760ms entrance effects with up to 18px movement | 280ms, at most 8px, 50ms stagger | Let readers reach content without a long entrance sequence |
| 220ms control transitions and button movement on hover | 180ms color feedback, immediate keyboard focus | Show state without moving surrounding text |
| Desktop app frame as short as 440px with 18px padding | 520–600px with 12px padding | Increase the actual app screen within the existing two-column layout |
| Screens visible only at the fitted size | Caption includes an original-image link in a new tab | Allow inspection of small text using the browser's image viewer |

Validation: content checks, ESLint, TypeScript and Vite build pass. Current browser renders were inspected at desktop 1280px, mobile 390px and 320px. No horizontal overflow, missing eager images or missing internal anchor targets were observed. The long AI project title was inspected on desktop. The mobile career section stayed below the fixed header. Project selection with Enter, visible keyboard focus, and menu dismissal with Escape were verified. The original-image link opened the selected 360×800 source image in a new tab. Reduced-motion rules were inspected in the served stylesheet; OS preference emulation was unavailable, so that environment was not visually tested.

Typography diagnostic: 8/10 rows verified. Body size, line measure, line height, hierarchy, actual viewport rendering, fallback stacks, heading wrapping and link distinction pass. The existing dynamically subsetted Pretendard loading was retained; a total network font budget below 200KB and browser zoom at 200% were not verified in this pass. No additional typefaces were introduced.
