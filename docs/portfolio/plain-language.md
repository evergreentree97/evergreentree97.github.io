# Plain-language method

This is the user's standing writing preference for this portfolio, established on October 6, 2026. Apply it to UI copy, career explanations, design documents and assistant reports. Product facts and approved disclosure boundaries still govern every claim.

## Rejected patterns

The user supplied these examples as an explicit anti-reference:

- `구조가 한눈에 보입니다.`
- `문제를 풉니다.`
- `어느 판을 봤는지까지 남습니다.`
- `한눈에 이어집니다.`

They hide the actor, object or observable result behind abstract nouns, visual promises and a metaphor. Replacing them with synonyms such as `직관적으로`, `명확하게`, `흐름`, or `맥락` does not fix the missing information.

## Write from evidence

1. Record the fact before writing a headline: the problem, the concrete object, the action, the responsibility boundary and the observed outcome. Leave unknown fields empty.
2. Decide whether text is necessary. A name, date, screen caption or action label often needs no explanatory sentence. Delete copy that describes the layout or repeats a visible label.
3. Write the action using the object's actual name. Prefer `토큰 갱신`, `채팅 답장`, `재생 위치` and `학습 데이터` to an unexplained `구조`, `문제` or `흐름`.
4. State only the result supported by the evidence. If the result is unknown, retain the implementation fact or omit the sentence. Never invent numbers, user sentiment or a causal improvement to make copy sound concrete.
5. Read each sentence alone. Identify what it refers to and what a reader can verify. If either is missing, rewrite or remove it.
6. Read the page in the browser. Check whether copy helps a reader understand a responsibility or choose a link. Remove decorative captions, repeated slogans and three-part promises added just to balance the layout.

## Diagnostic examples

Examples illustrate the method and are not new portfolio claims.

| Weak expression | Evidence needed | Possible wording if verified |
|---|---|---|
| `문제를 풉니다.` | The failing behavior and the change | `동시에 401을 받은 요청이 같은 토큰 갱신 결과를 재사용하도록 수정했습니다.` |
| `구조가 한눈에 보입니다.` | What is represented and whether a caption is needed | `feature 모듈 사이의 화면 이동을 Router 인터페이스로 분리했습니다.` |
| `어느 판을 봤는지까지 남습니다.` | What is saved and where | Name the actual version, screen or record. Delete the sentence if that information is absent. |
| `한눈에 이어집니다.` | A real dependency or sequence | Name that dependency. Do not describe the page's arrangement. |

## Review gates

- Headings name a person, product, feature, destination or topic.
- Controls name what opens or changes.
- No sentence may use a promise about readability as a substitute for a fact.
- No invented persona, dramatic self-description, decorative contrast (`A가 아니라 B`), slogan or formulaic three-part list.
- Preserve team vocabulary such as API, retry and ViewModel. Keep one contribution per item.
- Authored Korean uses commas, particles or line breaks instead of middle-dot punctuation.
- Run `npm run check:copy`. It rejects the user's named anti-patterns in shipping text and flags additional generic expressions for review. This catches known regressions; it cannot prove natural language quality.
- A clean build is technical evidence. Visual quality must be assessed from current desktop and mobile renders, with the user's rejection treated as stronger evidence than an earlier review.

## Record the decision

For a substantial rewrite, record the rejected line, replacement or deletion, its source fact and its intended placement in the current design record. Apply the same checks to the final assistant response. Do not end with a claim that the work is beautiful or no longer AI-like merely because a checklist passed.
