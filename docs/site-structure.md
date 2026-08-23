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

- 소개: 리멤버 프로필 소개(NextStep `career/resumes/remember-profile-base-2026-08-21.md`)의 경력 문단 세 개를 그대로 쓴다. "경계를 먼저 나누고 만듭니다" 같은 추상 원칙 제목은 처음 보는 사람이 이해하지 못해 2026-08-22 금지했다. 콘텐츠는 `src/data/about.ts`.
- 경력: 회사명 아래에 제품 한 줄 소개(`intro`)를 둔다. 콘텐츠는 `src/data/experience.ts`.
- 사이드 프로젝트: 회사 경력 밖의 개인 프로젝트(Duckie, 꽥꽥). 동아리 활동은 대외 활동에 남긴다. 콘텐츠는 `src/data/sideProjects.ts`.
- 대외 활동: Mash-Up, YAPP 21기, Nexters 21기. YAPP 운영진과 YP QR은 기간과 담당 범위 확인 전이라 쓰지 않는다(NextStep `career/evidence/11-gaps.md`).
- 내비게이션은 About me, Career, Projects, Side Project, Activity, Contact 여섯 개다.

## 주요 프로젝트

콘텐츠는 전부 `src/data/projects.ts`에 있다. 각 프로젝트는 본문 한 열(담당을 서술한 headline 한 문장, 리멤버 업무상세 기반 명사형 글머리, 기술, 링크)로 구성한다. "담당/문제/판단/확인" 서사 단계와 격언식 제목은 추상적이라 2026-08-22 글머리로 교체했다. 우측 시각화(`ProjectDiagrams`)는 본문과 내용이 겹치고 전달하려는 메시지가 불분명해 2026-08-22 제거했다. 되살리려면 본문에 없는 정보를 보여 줄 때만 추가한다. "출시한 앱, 검증한 모델, ~ 보여드립니다" 헤드라인과 프로젝트 인덱스가 있던 도입 블록도 같은 날 제거했고 `#projects` 앵커는 장면 묶음 래퍼가 가진다.

각 프로젝트 글머리 아래에 앱 화면 스크린샷을 넣는다 (2026-08-23). 원본은 NextStep `career/.private/screens/`에 있고 Google Play 공식 스크린샷을 기본으로 쓴다. 파일은 `public/screens/`에 JPEG로 두고 Vuddy는 채팅, 홈, 버디카드, MOMENTICA는 포토카드 촬영, 도감, 언팩 화면이다.

캐릭터 대화 모델과 신규 AI 캐릭터 앱은 2026-08-23 한 프로젝트로 합쳤다. 스크린샷은 samantha-dashboard 정적 스냅샷 캡처 한 장과 AI 앱 Figma 채팅 시안 캡처 두 장(채팅방, 채팅 목록)이며, 사내 화면이지만 사용자가 같은 날 게시를 결정했다. 아티스트 사진이 들어간 MOMENTICA Figma 목업은 여전히 게시 금지다. 이 결정 없이 새 사내 화면을 추가하지 않는다.

## 유지 결정

- 다크 테마, 큰 타이포그래피, 분할 레이아웃을 유지한다. 색은 2026-08-23 초록에서 버건디 계열(`tokens.css`, oklch hue 18~25)로 바꿨다. 초록이 AI 느낌이라는 사용자 피드백에 따른 결정이다.
- 도트 게임 컨셉은 종료했다. IBM Plex Mono와 Silkscreen 의존성을 제거하고 라벨류(`--font-utility`)도 Pretendard로 통일했다 (2026-08-23). 픽셀 아트 히어로 이미지는 아직 남아 있다.
- 푸터의 "AI에 맡긴 일도, 제품의 결과는 직접 확인합니다." 대형 문구는 의미가 약해 2026-08-23 제거했다. 푸터는 저작권과 맨 위로 링크만 남긴다.
- 좌측에 토스식 섹션 레일(`SectionRail.tsx`)을 둔다. 활성 섹션의 선이 길어지고 라벨이 나타나며 1360px 이하에서는 숨긴다 (2026-08-23).
- 첫 화면에서 소개, 경력 구간에 들어오면 `App.tsx`의 IntersectionObserver가 main data-zone을 바꿔 배경을 paper에서 paper-2로 전환한다 (2026-08-23).
- 소개 첫 문단은 본문보다 약간 큰 리드(1.05~1.2rem)이고 나머지 두 문단은 좌우 2단이다. 2rem급 대형 리드는 너무 커서 2026-08-23 줄였다.
- 애니메이션은 진입 페이드, 버튼 hover와 주요 프로젝트 배경 전환 수준만. 배경 전환은 `Projects.tsx`의 IntersectionObserver가 활성 장면 id를 래퍼 data-scene에 쓰고 CSS가 배경색을 전환한다 (2026-08-23 복원). `prefers-reduced-motion`에서 모든 콘텐츠가 즉시 보이고 배경 전환도 끈다.
- 섹션 상단 여백은 소개류 clamp(72px, 8vw, 112px), 경력과 AI 활용 clamp(88px, 10vw, 132px)다. 첫 화면과 소개 사이가 멀다는 피드백으로 2026-08-23 줄였다.
- Build Trace와 스크롤 장면 훅(`useScrollScene`)은 저장소에서 삭제됐다. 되살리지 않는다.
- 수정 후 `npm run check` 실행. 잠긴 제목 문구를 바꾸려면 `docs/portfolio-content.md`와 검사 스크립트를 함께 고쳐야 한다.

## 알려진 미세 문제

- Experience 기간 표기, How I work 라벨, 기술 칩이 12px 미만이다. 다음 개편에서 함께 정리한다.
- `docs/interactive-homepage-plan.md`는 스크롤 연출 기반 이전 계획이라 현재 구조와 맞지 않는다.
