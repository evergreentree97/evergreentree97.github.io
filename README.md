# Choi Sangrok Portfolio

[evergreentree97.github.io](https://evergreentree97.github.io/)에 배포하는 공개 포트폴리오입니다.

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

콘텐츠 방향과 수정 위치는 [`docs/portfolio-content.md`](docs/portfolio-content.md)를 따릅니다.

## 배포

`main` 브랜치가 갱신되면 GitHub Actions가 검사와 빌드를 실행한 뒤 GitHub Pages에 배포합니다.
