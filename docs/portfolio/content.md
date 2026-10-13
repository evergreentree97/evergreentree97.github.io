# Portfolio content

This is the current authority for public wording, contribution scope and asset disclosure. Start with [README.md](README.md). The latest explicit user request takes precedence over earlier wording and general writing or design skills. This version was approved for release on 2026-10-13.

## Approved introduction

> 단단한 기반 위에 제품의 완성도를 높이고, 필요한 기술을 유연하게 연결하는 안드로이드 개발자입니다.

> 최상록

> 초기 설계부터 Google Play 배포와 운영을 겪으며, 좋은 구조가 팀의 개발 속도와 제품의 확장성을 지켜준다는 점을 배웠습니다. Jetpack Compose와 Clean Architecture 기반 멀티 모듈 구조를 바탕으로 인증, 실시간 채팅, 미디어 재생을 구현해 왔습니다. 단순히 화면에 기능이 나오는 것에 만족하기보다, API 토큰 동시 갱신 제어나 힙 덤프 기반 메모리 누수 해결처럼 실제 프로덕션 환경에서 마주하는 기술적 난제를 집요하게 분석하고 개선하는 데 집중합니다.

> 동시에 모바일 개발의 울타리에 갇히지 않고, 사내 AI TF에서 대화 모델의 데이터 구성부터 파인튜닝, 평가, 서빙까지 직접 다루었습니다. 이를 활용해 클라이언트에서 SSE 스트리밍 채팅과 결제 기능까지 엮어내며, 새로운 기술을 실제 사용자가 체감하는 프로덕트 기능으로 구현하는 데 즐거움을 느낍니다.

Preserve this opening sentence and both full paragraphs in the site. The user's perspective, learning, persistence and enjoyment of applying new technology are intentional parts of the introduction. Do not reduce them to an implementation inventory or substitute a name-and-role introduction unless the user requests a rewrite. General advice to shorten copy, avoid slogans or use factual resume language does not override this preference.

The current composition preserves the selected narrative. The current hero places name and role above a smaller neutral headline, followed by one compact action group and the two complete narrative paragraphs. Removing the former blue sentence emphasis, animated underline and oversized action treatment does not authorize rewriting the introduction. Search and social descriptions may summarize it more briefly without adding claims.

## Audience and writing scope

The portfolio introduces an Android developer to hiring readers and potential collaborators. Present Android architecture, development and operation together with the AI model work and client integration. Do not demote the AI experience to a generic supplementary skill.

Project and career claims must accurately describe the user's responsibility. Keep proposals, implemented features, team decisions and observed results distinct. Do not invent metrics, adoption, independent ownership or production outcomes. This factual limit applies to work claims; it does not remove the user's own learning or motivation statements from the introduction.

Use natural Korean and retain technical names when they explain the work. Project descriptions may explain product context, responsibilities and technical reasoning in connected prose. Do not force all sections into one sentence pattern or a mandatory problem/solution template. Avoid unexplained internal terminology and unnecessary lists of tools or counts.

Use familiar developer language over translated workflow labels. Review roles use requirements organization, code review and UI review; the implementation names them `요구사항 정리`, `코드 리뷰` and `UI 리뷰`. Retain established terms such as API, SSE, worktree, Heap Dump, feature module and Google Play Billing in context. Describe token automation as Kotlin code generation and PR creation rather than converting JSON into a PR. Edit whole sentences when an action is unclear; this is not a word ban or permission to translate every technical term into English. Preserve the selected introduction, supplied Career copy and contribution boundaries.

Use precise nouns in visible descriptions, expanded details and image alternatives. Name the actual data or action: the Inspector shows SSE events and response messages, the billing case verifies payment UI, and the WebView activity documents integration methods and parameters. Preserve established Korean and English engineering terms when they are accurate. A familiar term is not a translation defect merely because another synonym exists; avoid blanket replacements or claims that a phrase is statistically common in Korean portfolios.

Evaluate visible copy by what a hiring reader can assess: product context, the user's responsibility, technical decisions and supported results. Omit section-wide preambles that repeat the cases below, repeated contribution summaries, technology lists already explained in the same block, and instructions for obvious profile links. Do not replace removed copy with shorter filler or preserve a layout built around it. Keep one owning location for each fact within a case; Career's role/tenure summary and Projects' technical depth serve different purposes. Preserve the selected narrative introduction and concise personal context. Do not require invented metrics or remove engineering reasoning merely because it is detailed.

Avoid translated marketing summaries, repetitive range slogans and decorative arrows beside career project titles. The user subsequently supplied factual bullet-point copy for Vuddy and the two AI projects, with specific bold technical terms. Apply that supplied wording and emphasis instead of rewriting it into narrative prose. The AI TF introduction also uses the user's supplied wording and punctuation. These career choices do not authorize rewriting the approved introduction or removing icons that communicate an actual function elsewhere.

## Contribution and disclosure boundaries

- **Vuddy:** Keep the push architecture as a proposal, and Backend API work as Android integration. Do not present Backend implementation as the user's contribution. Router navigation, concurrent token-refresh control, bidirectional reply paging and ViewModel-owned media lifecycle are distinct contributions.
- **AI model and Android app:** Keep model development/team review separate from Android chat and billing work. Model selection followed team review; it does not establish external validation or service operation. Do not publish the internal evaluation dashboard, its scores, private product names, GPU environment or omitted distribution-automation details. Use only the approved masked chat images.
- **Momentica:** Artist Top Ranker swipe and image-cache updates belong to the take-home redesign. Do not merge them with the separate headline banner's pager or restore the omitted automatic rotation description. The blur-painter cache API already existed; the user's work separated the image Composable and update scope. The current public selection omits Google AdMob.
- **Tools and automation:** Preserve the QA-ticket harness, planning/design references, role-based review, post-deployment QA checks and personally implemented SSE inspector within the public scope below. Describe configured procedures and personal use without adding sole-ownership, adoption or productivity claims.
- **Other projects and activities:** Preserve each project's actual responsibility and release status. Do not promote shared work to sole ownership or claim unverified adoption.

Current project, career and activity wording belongs to the owning source files listed in [structure.md](structure.md). This guide records contribution boundaries rather than duplicating every implementation sentence as an immutable copy rule.

## Tools and automation

The current selection in `src/components/HowIWork.tsx` presents how the user applies AI to Android QA and UI implementation, then verifies output through tests, device checks and code review.

Keep the public presentation distinct: the QA harness owns validation and post-deployment Hook checks in its procedure disclosure; the planning/design article owns document management and token automation; the multi-agent article explains each review role through a definition list. Do not restore a separate post-deployment article or repeat the general validation paragraph under design implementation. These presentation choices do not change the contribution boundaries below.

The AI section starts with its heading and representative case, without a generic usage/verification preamble. The QA contribution uses a short introduction and bullets for separate tasks. Planning/design work also separates document-management context from implementation bullets. Validation and post-deployment checks use nested bullets only where a stage contains several distinct checks. The multi-agent handoff configuration belongs to its requirements-organization entry, without a duplicate introductory paragraph.

- **QA-ticket harness:** The user created an Agent Skill connecting ticket/reproduction checks through Notion MCP, worktree isolation, diagnosis, code changes, validation and PR follow-up, and applied it to Android QA. Worktree parallelism is a qualitative account of personal work, without measured throughput or productivity gains. Describe the pictured UI as a personal work-management tool used in this workflow; sole authorship of the integrated UI and wider adoption are unverified.
- **Planning, design and verification:** The user proposed managing planning/design documents in GitHub and applied that practice with the team. Figma MCP and the team's Design SSOT supplied tokens and shared components for Android implementation; do not claim ownership of the team SSOT. Preserve design-token JSON-to-Kotlin/PR automation and semantic-token remapping for screens using those tokens. Compose stability checks, payment-screen screenshot tests and tests for core payment/media logic do not establish exhaustive screen coverage or unchanged screen code.
- **Role-based review:** The configured multi-agent procedure separates requirements organization, code review and UI review, sharing a requirements document and restricting design comparison to the selected Figma scope. Unobserved behavior remains unverified. Do not claim that every review used every role, that imported third-party Skills were personally authored, or that the procedure produced measured defect reduction.
- **Post-deployment QA checks:** The user requested a generic description of the PostToolUse Hook in this tools section. It checks a success record, merged PR and inclusion of the fix in the deployed commit, then rechecks the assignee and current status for tickets in the personal work list. Failed deployment or unproven inclusion prevents a status change. This describes configured checks; automatic transitions for every historical ticket are unverified. Keep the AI project's omitted private distribution-automation details, internal pipeline information and API details private.
- **Ricky Inspector:** The user personally implemented the debug-only HTTP/SSE/logcat inspector and used it in their local development environment for Vuddy and the AI character app. Preserve inspection of SSE events, response messages assembled from those events and app logs, with debug-build injection that does not edit the target app's source. Other developers' use is unverified.

## Public assets

Use official public product screens or the specific derivatives recorded below. Figma file access is not permission to publish other nodes. A user-selected export does not establish company approval or a license for the whole file. Preserve masking and approved image content; do not redraw product screens or add simulated device interfaces.

| 공개 파일 | Figma 출처 | 허용 범위 |
|---|---|---|
| `mmtc-photocard-figma.png` | `oRjaTCCd3IGJqNjGPc2tnk`, `3102:12200` | 가이드 레이어를 제외한 화면에 카드의 얇은 오른쪽·아래쪽 면만 더한 현재 파생 이미지 |
| `mmtc-alarm-figma.png` | `oRjaTCCd3IGJqNjGPc2tnk`, `755:4673` | 해당 노드에서 현재 내보낸 락스크린 알람 이미지 |
| `mmtc-take-home-figma.png` | `QKAiwvU5PTqFXcFtebdz9U`, `2038:6766` | 해당 노드에서 현재 내보낸 이미지 |
| `vuddy-chat-figma.png` | `iwSPjT5T4wEA6TNIltsuRT`, `4526:42051` | 해당 노드에서 현재 내보낸 Android 1:1 답장 화면 |
| `smt-chat-masked.png` | 출처 노드 확인 필요 | 제목과 이름을 가린 현재 파생 파일만 허용 |
| `smt-chatlist-masked.png` | 출처 노드 확인 필요 | 제목과 이름을 가린 현재 파생 파일만 허용 |

The generated developer illustration was rejected and removed from the hero, contact and social metadata. Do not restore it or add substitute decorative imagery to those sections. Keep private career documents, internal source paths, unpublished product information and new personal contact details out of public assets. Existing public profile links belong to `src/data/profile.ts`.

### Tool demonstration images

Both JPEGs are fresh local browser captures of the original tool UIs running with fabricated, publicly safe demonstration data. They do not document historical company execution. The capture process made no company API calls and left company source unchanged; only the JPEGs are public artifacts. Keep source workspaces, internal product names, real tickets/commits, API details and private paths out of the public repository.

| Public asset | Provenance and public scope |
| --- | --- |
| `public/images/tooling/qa-worktree-demo.jpg` (1280 x 720) | Original work-management UI restored locally with fabricated ticket rows, review states and display counts. The demonstration runs without the original company backend or workflow operations. The UI's displayed times and counts are examples, not processing-volume or productivity evidence. |
| `public/images/tooling/ricky-inspector-sse-demo.jpg` (1440 x 900) | Original Inspector frontend running with isolated local mock logic, generic identifiers and fabricated streaming events. No production endpoints, internal schemas, credentials or device connection are included. |

At the user's request, tool figures have no visible captions about demonstration data or image interaction, and the QA procedure omits meta commentary about its source summary. Alt text describes the depicted tool content and accessible link names identify the original-image action. Each original-image link opens the shipped demonstration JPEG in a new tab for closer inspection; it does not open an internal tool or execution record. Preserve the provenance recorded above without restoring the removed UI explanations.

## Maintaining content

Update rendered content and this guide together when the user changes the introduction or disclosure choices. `npm run check:content` checks the approved introduction and public assets; it does not enforce historical project wording. Keep the font subset and metadata synchronized with actual rendered text. Font maintenance is documented in [public/fonts/README.md](../../public/fonts/README.md).
