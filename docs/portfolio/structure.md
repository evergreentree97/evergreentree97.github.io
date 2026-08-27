# 포트폴리오 구조

공개 문구와 사실 기준은 [`content.md`](content.md)가 소유한다. 이 문서는 현재 배포 화면의 순서와 유지할 레이아웃 결정만 관리한다.

## 현재 기준

2026-08-27 공개 커밋 `93b014b`를 현재 기준본으로 삼는다. 실제 화면 구성의 최종 기준은 [`src/App.tsx`](../../src/App.tsx)다.

## 화면 순서

1. 첫 화면
2. 경력
3. 주요 프로젝트
4. AI 활용과 검증
5. 사이드 프로젝트
6. 오픈소스와 대외 활동
7. 취향
8. 연락처
9. 푸터

오픈소스와 대외 활동은 넓은 화면에서 두 열, 작은 화면에서 한 열로 배치한다. 별도 소개와 기술 목록 섹션은 두지 않는다. 기술은 주요 프로젝트 태그에서 사용 맥락과 함께 보여준다.

## 유지할 화면 결정

- 어두운 배경, 큰 제목과 좌우 분할 레이아웃을 유지한다.
- 상단 내비게이션과 좌측 섹션 레일은 현재 위치를 보여준다. 작은 화면에서는 축약하거나 숨긴다.
- 주요 프로젝트는 글과 실제 화면을 함께 보여준다. 공개 가능한 화면은 `content.md`의 승인 기록을 따른다.
- 일반 섹션은 한 번만 자연스럽게 나타난다. 주요 프로젝트는 현재 장면에 맞춰 배경색만 전환한다.
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
| AI 활용과 검증 | `src/components/HowIWork.tsx` |
| 사이드 프로젝트 | `src/data/sideProjects.ts` |
| 오픈소스 | `src/data/projects.ts`, `src/components/MoreWork.tsx` |
| 대외 활동 | `src/data/activities.ts`, `src/components/Activities.tsx` |
| 취향과 내비게이션 | `src/data/profile.ts` |
| 연락처와 푸터 | `src/components/Contact.tsx`, `src/components/Footer.tsx` |
| 공통 스타일 | `tokens.css`, `src/styles/` |

구조를 바꾼 뒤에는 이 문서와 실제 순서를 맞추고 `npm run check`를 실행한다.
