# 사이트 구조와 핵심 문구 (2026-08-22 개편 기준)

콘텐츠 작성 기준은 `portfolio-content.md`를 따른다. 이 문서는 현재 화면 구성과 다음 개편 때 지켜야 할 결정만 남긴다.

## 첫 화면 (Hero)

- 한 화면 높이의 일반 섹션. 좌측 텍스트, 우측 픽셀 아트 이미지. 스크롤 연출 없음.
- 제목 "AI에 일을 맡기고, / 제품을 만듭니다."는 `scripts/check-locked-content.mjs`로 잠겨 있다.
- 설명 문구: "Android 앱의 구조를 설계하고, API 연동과 출시 후 운영 문제까지 해결합니다. AI는 개발 과정에 활용하되, 결과를 직접 평가해 제품 품질까지 확인합니다."
- 버튼은 주요 프로젝트 보기, GitHub 보기 두 개.
- 제거된 것: Build Trace(DEFINE~VERIFY 타임라인), PRODUCT SCOPE 다이어그램, 스크롤 단계 연출. 빈자리를 새 장식으로 채우지 않는다.

## 섹션 순서 (2026-08-22 개편)

첫 화면 → 소개(About me) → 경력(Career) → 주요 프로젝트 → 사이드 프로젝트 → 더 많은 작업과 대외 활동 → 기술 → AI 활용과 검증 → 취향 → 연락처. 소개와 경력을 프로젝트보다 앞에 두는 흐름은 junjange.github.io를 참고했다.

- 소개: 일하는 원칙 세 장의 카드. 제목은 원칙 문장이고 본문은 검증된 사례로만 뒷받침한다. 콘텐츠는 `src/data/about.ts`.
- 경력: 회사명 아래에 제품 한 줄 소개(`intro`)를 둔다. 콘텐츠는 `src/data/experience.ts`.
- 사이드 프로젝트: 회사 경력 밖의 개인 프로젝트(Duckie, 꽥꽥). 동아리 활동은 대외 활동에 남긴다. 콘텐츠는 `src/data/sideProjects.ts`.
- 대외 활동: Mash-Up, YAPP 21기, Nexters 21기. YAPP 운영진과 YP QR은 기간과 담당 범위 확인 전이라 쓰지 않는다(NextStep `career/evidence/11-gaps.md`).
- 내비게이션은 About me, Career, Projects, Side Project, Activity, Contact 여섯 개다.

## 주요 프로젝트

콘텐츠는 전부 `src/data/projects.ts`에 있다. 각 프로젝트는 좌측 본문(headline, 단계 리스트 4개, 기술, 링크)과 우측 시각화로 구성되며, 시각화는 SVG 없이 flex/grid HTML이고 정지 상태에서 의미가 다 읽혀야 한다. 시각화 상단에 핵심 문장 하나를 명시한다.

- Vuddy: "실시간 메시지는 Sendbird에, 제품 규칙과 운영은 Backend에 두었습니다." 선택지 비교 2카드 → 책임 경계 2카드 → 출시 전 확인한 제약 노트.
- 캐릭터 대화 모델: "데이터 결함을 먼저 걷어내고, 같은 조건을 만든 뒤, 자동 평가를 실제 대화와 대조했습니다." 문제 → 평가 조건 → 검증의 세로 3단.
- Momentica: "저장과 예약을 나눠 두어, 앱이 종료돼도 알람이 실행됩니다." 설정 → Room/AlarmManager 분기 → 종료, 잠금, 재부팅 조건 → 재예약 → 실행 확인의 세로 5단.

## 유지 결정

- 다크 테마, 차분한 초록 토큰(`tokens.css`), 픽셀 아트, 큰 타이포그래피, 분할 레이아웃을 유지한다.
- 시각화 원칙: 다이어그램 하나에 핵심 메시지 하나, 노드 3~5개, 읽는 방향 하나, 화살표는 실제 방향이 있을 때만, 모바일(320px~)은 세로 흐름으로 재배치하고 페이지 가로 스크롤 금지.
- 애니메이션은 진입 페이드와 버튼 hover 수준만. `prefers-reduced-motion`에서 모든 콘텐츠가 즉시 보여야 한다.
- Build Trace와 스크롤 장면 훅(`useScrollScene`)은 저장소에서 삭제됐다. 되살리지 않는다.
- 수정 후 `npm run check` 실행. 잠긴 제목 문구를 바꾸려면 `docs/portfolio-content.md`와 검사 스크립트를 함께 고쳐야 한다.

## 알려진 미세 문제

- Experience 기간 표기, How I work 라벨, 기술 칩이 12px 미만이다. 다음 개편에서 함께 정리한다.
- `docs/interactive-homepage-plan.md`는 스크롤 연출 기반 이전 계획이라 현재 구조와 맞지 않는다.
