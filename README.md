# Choi Sangrok Portfolio

[evergreentree97.github.io](https://evergreentree97.github.io/)에 배포하는 공개 포트폴리오입니다.

> 제품의 구조를 설계하고<br>
> **출시 이후까지 운영합니다.**

Android 앱의 초기 구조와 주요 기능을 개발해 출시와 운영까지 맡아온 경력을 중심으로 구성했습니다. 사내 AI TF에서 담당한 캐릭터 대화 모델의 데이터 정제, 학습, 평가와 서빙 경험도 함께 다룹니다.

## 콘텐츠 구성

- 첫 화면: 특정 프로젝트보다 전체 경력과 역할을 요약
- 주요 프로젝트: Android 제품에서 내린 판단, 구현 범위와 검증 결과
- AI 활용과 검증: AI에 맡긴 작업과 개발자가 직접 검토한 범위
- 경력: Android 개발과 사내 AI TF에서 담당한 업무

## 로컬 실행

Node.js 22 이상을 권장합니다.

```bash
npm install
npm run dev
```

배포 전에는 전체 검사를 실행합니다.

```bash
npm run check
```

## 기술 구성

- Preact 10
- TypeScript
- Vite
- CSS Modules
- GitHub Actions와 GitHub Pages

콘텐츠는 `src/data`, 화면 구성은 `src/components`, 공통 스타일은 `src/styles`에서 관리합니다.

첫 화면의 경력 소개는 `src/components/Hero.tsx`, 프로젝트와 경력 내용은 각각 `src/data/projects.ts`와 `src/data/experience.ts`에서 수정합니다. Sendbird와 같은 구체적인 사례는 첫 화면이 아니라 주요 프로젝트에 둡니다.

## 배포

`main` 브랜치가 갱신되면 GitHub Actions가 검사와 빌드를 실행한 뒤 GitHub Pages에 배포합니다.

## 공개 정보 기준

이 저장소는 공개 저장소입니다. 개인 이메일, 전화번호, 주소, 원본 이력서, 사내 코드명과 공개되지 않은 제품 정보는 저장하지 않습니다.
