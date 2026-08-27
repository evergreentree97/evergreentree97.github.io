# 포트폴리오 문서

이 디렉토리에는 현재 공개 포트폴리오를 운영할 때 필요한 기준만 둔다.

- [`content.md`](content.md): 공개 문구, 경력 서술 원칙, 프로젝트별 선택과 공개 자산 승인 기록
- [`structure.md`](structure.md): 현재 화면 순서, 레이아웃 결정, 수정 위치와 유지할 구분선 규칙
- [`../../README.md`](../../README.md): 로컬 실행, 검사와 GitHub Pages 배포 방법

과거 설계안과 폐기된 개편 계획은 [`../archive/`](../archive/)에 보관한다. 현재 구현을 바꿀 때는 보관 문서를 기준으로 삼지 않는다.

## 현재 기준본

- 공개 주소: https://evergreentree97.github.io/
- 확정일: 2026-08-27
- 공개 기준 커밋: `93b014b`
- 첫 화면과 주요 경력 문구는 `npm run check:content`로 구현과 문서의 일치를 확인한다.

콘텐츠를 바꾸면 구현 파일과 `content.md`, 필요한 검사 항목을 함께 수정한다. 화면 순서나 시각 규칙을 바꾸면 `structure.md`를 갱신한다. 모든 변경 뒤에는 `npm run check`를 실행한다.
