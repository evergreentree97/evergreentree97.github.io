# Portfolio Site

Preact와 TypeScript로 만든 정적 포트폴리오 사이트입니다.

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

## 배포

`main` 브랜치가 갱신되면 GitHub Actions가 검사와 빌드를 실행한 뒤 GitHub Pages에 배포합니다.

## 공개 정보 기준

이 저장소는 공개 저장소입니다. 개인 이메일, 전화번호, 주소, 원본 이력서, 사내 코드명과 공개되지 않은 제품 정보는 저장하지 않습니다.
