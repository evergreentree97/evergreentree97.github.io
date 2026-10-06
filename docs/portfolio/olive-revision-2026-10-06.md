# Olive portfolio revision, October 6, 2026

## Request and direction

Improve the existing Android portfolio for hiring readers and developers, preserving real projects and contribution boundaries. The current user brief pins warm cream, white, dark text and olive, compact navigation, real app screens and summary/detail separation. This is a code-led implementation of that brief; no fictional persona, screenshot, app icon or metric was authored.

THESIS: Actual Android applications lead an evidence-backed career portfolio.
FIRST VIEWPORT: Choi Sangrok and Android role, the two existing factual sentences, a real Vuddy home image, and project/GitHub actions.
FORM: A full-width Vuddy overview above a two-column AI/Momentica index; narrower case reading beside intact portrait images; native disclosures reveal detail without navigation effects.
PATH: Identify the person and representative app, inspect role and period in the project index, follow the named detail link, inspect reasons and implemented behavior, then career and general records.
MOTION: Project-index appearance only, opacity .85–1 and 8px movement over 300ms, with 50ms sibling stagger. Image-only hover reaches 1.015. Control feedback is 180ms. Reduced motion removes movement and appearance effects.
CONSTRAINTS: Preserve approved images and claims, omit unknown reasons/results, keep model and Android responsibilities distinct, and retain a readable HTML fallback without JavaScript.

## Reference inspection

All five user-supplied sites were opened and captured in a browser on October 6. Their existing copy, personas and metrics were not transferred.

| Reference | Applied discipline |
|---|---|
| [SeongKwang Lee](https://cherryzp9094.github.io/portfolio/) | Separate scannable project facts from situation, choice and result detail. The current site provides written constraints and choices; use only the candidate's own evidence for those fields. |
| [Seokgyu Yun](https://matchayun.framer.website/portfolio) | Bring role and period next to actual app imagery. App-specific icons are absent in the candidate's supplied assets, so none were invented. |
| [Junho Yeo](https://junho.io/) | Let authored applications and real mobile screens carry identity. Do not recreate its phone-home icon collection without corresponding assets. |
| [Sanghyuk Seo](https://www.sanghyukseo.com/) | Keep introduction and navigation short, and use image scale and whitespace to rank work. |
| [Seongmi Hong](https://seongmi-hong.github.io/seongmis-portfolio/) | Integrate cream/olive surfaces and restrained project appearance. Do not transfer its oversized PORTFOLIO title or decorative copy. |

## Content evidence

Current approved Android wording: NextStep/career/resumes/base-resume-2026-10-06.md. Contribution scope: career/evidence/04-1-momentica.md, projects/vuddy/chat.md and the existing public Android claim data, 04-3-samantha-aos.md and 04-4-pjt-samantha.md. Public asset approvals remain in content.md.

- Model development uses April–August 2026 per the owning chapter's explicit September 14 correction. Earlier February dates are historical PoC context. Android app contribution starts June 2026 per its owning chapter.
- Sendbird choice is grounded in creator timing and server resources. Android SDK isolation and Backend API integration remain distinct from Backend server implementation.
- Auth retains concurrent-request token reuse, network failure behavior, authentication expiration and retry limits. Existing unit-test evidence is preserved.
- Model implementation remains personal work; actual conversation review and selection remain team decisions. Web MVP feedback is internal team use, without external adoption or quality metrics.
- Momentica describes its existing app context, Bitmap release, home cache isolation and alarm execution conditions without invented engagement or memory metrics.
- Project-specific tooling now appears inside its owning case. General QA and verification records follow projects and career; repeated career summaries are not rendered.
- No public resume URL, app-specific icon or new measured outcome was provided. Unknown fields are omitted.

## Verification

The production build prerenders the same App into HTML and hydrates in the browser. A build-output gate checks readable sections, distinct actual screenshots and intrinsic image dimensions. The no-JavaScript browser check confirmed styled content, visible mobile navigation, all eight screens and working native disclosures.

The final code passed content/asset approval checks, copy regression tests and the 182-literal AST scan, ESLint, TypeScript and Vite prerender build. Current desktop (1440) and mobile (390) full pages and readable crops were inspected. Additional 320 and 1280 checks showed no horizontal overflow. Wanted Sans and Uncut Sans loaded. All image files and internal anchor targets resolve.

Menu open/close, Escape/refocus, project navigation, the native auth disclosure, Momentica image selection and original-image popup were exercised. Reduced motion showed zero animations, auto scroll and zero transition duration. Palette contrast ratios: primary text/cream 15.37, secondary text/cream 5.38, olive/cream 6.19, olive/light-olive 5.51, white/olive 6.51.

GitHub and both Google Play destinations returned HTTP 200. LinkedIn returned 999 to an automated request; its existing verified profile URL is preserved, with access verification limited by the provider's block. Two font-preload advisory warnings appeared in the test browser, while both fonts loaded and no page errors occurred. The three npm audit findings are pre-existing development-tool transitive packages (brace-expansion, nanoid and source-map-js); the added renderer is not affected. This revision does not broaden into unrelated dependency upgrades.

Review captures are ignored under .impeccable/review/olive. Local preview: http://127.0.0.1:4327/. Publication has not been requested or performed.

## Final review

A fresh visual reviewer inspected both hero captures, both full-page captures, ten desktop crops and eleven mobile crops. It found no material visual or brief-compliance blocker and returned ship for local review. A non-blocking P3 in project-index captions was corrected by separating the description and original-image action with the same column layout and 4px gap used in detail captions.

After that correction, the full check command passed again, including the prerender gate. Desktop and mobile were recaptured from the rebuilt output (1440 by 10075 and 390 by 15711). The reviewer inspected the named corrected crops and returned resolved. That follow-up verdict covers only the named caption fix; the preceding full-page disposition remains in force. User aesthetic acceptance and publication are not implied.
