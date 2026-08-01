# Ricky Choi Portfolio

Android 앱을 만들고 운영해온 경험과 LLM 평가, AI Native 업무 방식을 정리한 정적 커리어 포트폴리오입니다. 오래된 휴대용 게임기의 낮은 채도, 도트 그래픽과 얇은 프레임에서 영감을 받았지만 특정 게임의 캐릭터나 UI는 사용하지 않았습니다.

## 기술 구성

- React 19
- TypeScript
- Vite
- CSS Modules
- GitHub Actions와 GitHub Pages
- 코드로 만든 SVG 픽셀 아이콘
- 프로젝트별 오리지널 도트 다이어그램

## 로컬 실행

Node.js 22 이상을 권장합니다.

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5173`을 엽니다.

배포 전 검증:

```bash
npm run check
```

프로덕션 결과 확인:

```bash
npm run build
npm run preview
```

## 내용 교체 위치

| 내용 | 파일 |
| --- | --- |
| 이름, 이메일, GitHub, LinkedIn과 Career Log 링크 | `src/data/profile.ts` |
| 주요 프로젝트, 검증 조건과 공개 링크 | `src/data/projects.ts` |
| 회사 경력과 핵심 역할 | `src/data/experience.ts` |
| 커뮤니티와 사이드 프로젝트 | `src/data/activities.ts` |
| 기술 그룹 | `src/data/skills.ts` |
| AI Native 업무 방식 | `src/data/workingMethod.ts` |
| 취향 키워드 | `src/data/profile.ts`의 `tastes` |
| Hero 도트 일러스트 | `public/images/hero-journey.avif`, `public/images/hero-journey.jpg` |
| 프로젝트 도트 다이어그램 | `public/images/project-*.jpg` |
| 공유용 이미지 | `public/images/og-image.jpg` |

LinkedIn 주소는 현재 공개 프로필로 연결되어 있습니다. 주소가 바뀌면 `src/data/profile.ts`에서 갱신합니다.

현재 Career Log 버튼은 Experience 섹션으로 이동합니다. 개인정보를 제거한 PDF 이력서가 준비되면 `public/resume.pdf`에 추가하고 `src/data/profile.ts`에 별도 `resumeUrl`을 만든 뒤 버튼을 연결하세요. 개인 연락처가 들어 있는 원본 PDF는 공개 저장소에 넣지 않습니다.

프로젝트 카드의 수치에는 표본 수, 채점 주체와 비교 조건을 함께 적습니다. 사내 코드명과 공개되지 않은 제품명은 일반적인 역할 설명으로 바꿉니다.

## 프로젝트 구조

```text
src/
  components/
    About.tsx
    Activities.tsx
    Contact.tsx
    Experience.tsx
    Footer.tsx
    Header.tsx
    Hero.tsx
    HowIWork.tsx
    MoreWork.tsx
    PixelDivider.tsx
    PixelIcon.tsx
    ProjectArtwork.tsx
    Projects.tsx
    ProofStrip.tsx
    Reveal.tsx
    SectionTitle.tsx
    Skills.tsx
    TastePanel.tsx
  data/
    activities.ts
    experience.ts
    profile.ts
    projects.ts
    skills.ts
    workingMethod.ts
  styles/
    global.css
  App.tsx
  main.tsx
```

컴포넌트별 스타일은 같은 폴더의 CSS Module에 있습니다. 공통 색상, 글꼴, 포커스 스타일과 모션 설정은 `src/styles/global.css`에서 관리합니다.

## GitHub Pages 배포

현재 `vite.config.ts`는 사용자 Pages 저장소인 `EvergreenTree97.github.io`에 맞춰 `base: '/'`로 설정되어 있습니다.

1. GitHub에 `EvergreenTree97.github.io` 저장소를 만듭니다.
2. 이 폴더의 원격 저장소를 연결하고 `main` 브랜치를 push합니다.
3. GitHub 저장소의 Settings, Pages에서 Source를 GitHub Actions로 설정합니다.
4. `.github/workflows/deploy.yml`이 검사와 빌드 후 `dist`를 배포합니다.

```bash
git remote add origin git@github.com:EvergreenTree97/EvergreenTree97.github.io.git
git add .
git commit -m "feat: build developer portfolio"
git push -u origin main
```

다른 이름의 프로젝트 저장소에 배포한다면 `vite.config.ts`의 `base`를 `'/저장소이름/'`으로 바꾸고 이미지와 이력서 경로도 같은 기준으로 조정해야 합니다.

## 접근성과 성능 기준

- 본문 16px 이상, 충분한 명도 대비, 44px 이상의 주요 클릭 영역
- 키보드 포커스 표시와 본문 건너뛰기 링크
- 장식 아이콘의 스크린 리더 제외와 정보 이미지의 대체 텍스트
- `prefers-reduced-motion` 지원
- Hero 이미지 AVIF 우선 제공, JPG 대체 이미지 제공
- 프로젝트 이미지에 고정 비율과 크기 지정
- 정적 데이터와 단일 페이지 구조로 별도 서버 없이 동작
- Lighthouse 성능, 접근성, 권장사항과 SEO 90점 이상 목표

외부 Pretendard CDN의 응답 상태에 따라 Lighthouse 결과가 조금 달라질 수 있습니다.

## 이미지 안내

Hero, 공유용 이미지와 프로젝트 다이어그램은 이 포트폴리오를 위해 만든 오리지널 도트 일러스트입니다. 특정 게임의 캐릭터, 로고, 맵이나 인터페이스를 복제하지 않았습니다.
