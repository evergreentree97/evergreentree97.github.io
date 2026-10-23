---
name: Ricky Choi Portfolio
description: A Korean Android developer portfolio with image-led project presentation and readable technical detail.
colors:
  paper: "#ffffff"
  paper-2: "#f9fafb"
  ink: "#191f28"
  ink-2: "#4e5968"
  muted: "#66717f"
  accent: "#1b64da"
  rule: "#e5e8eb"
  vuddy-cover: "#202324"
  ai-cover: "#e6ecef"
  momentica-cover: "#ecebe8"
  screen-shadow: "rgb(12 20 26 / 15%)"
typography:
  hero-name:
    fontSize: "clamp(4.5rem, 7.3vw, 6.5rem)"
    fontWeight: 600
    lineHeight: 1.12
  hero-role:
    fontSize: "clamp(1.5rem, 2.4vw, 2rem)"
  hero-lead:
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.75
  section-heading:
    fontSize: "clamp(1.75rem, 2.4vw, 2rem)"
  featured-title:
    fontSize: "clamp(1.375rem, 2vw, 1.75rem)"
  mobile-title:
    fontSize: "1.375rem"
  context:
    fontSize: "1rem"
  project-message:
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.65
  disclosure:
    fontSize: "0.875rem"
  metadata:
    fontSize: "0.8125rem"
  technology:
    fontSize: "0.75rem"
  project-title:
    fontFamily: "Noto Sans KR, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 2vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "-0.025em"
  project-body:
    fontFamily: "Noto Sans KR, Apple SD Gothic Neo, Malgun Gothic, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
rounded:
  project-cover: "16px"
  project-screen: "8px"
---

# Portfolio design reference

This records the local revision prepared on 2026-10-13. Visual acceptance and deployment are separate steps. Preserve the selected introduction and factual contribution scope. Earlier studies do not authorize additional redesign. [Content](docs/portfolio/content.md) owns wording and disclosure, and [structure](docs/portfolio/structure.md) owns component organization. Local verification does not establish a public deployment.

## Project presentation

All projects use the full reading width. Project identity sits in a 280px column beside a 20px medium-weight main message and any store link. Approved screens follow in a 460px cover. This separates product context from the cases and removes the narrow paired articles that constrained substantive text. At 1023px, the identity column narrows to 220px and covers to 420px. Contribution cases stack at 1023px within an 800px reading width. At 760px, headers stack and covers use a 1.1 aspect ratio.

Visible contributions use an open two-column grid with 48px column gaps and 32px row gaps. Each case starts with a 1px gray rule and one 20px semibold ink heading naming the core work or feature. The heading is followed after 12px by 16px bullet points explaining the relevant constraint, decision, action and supported result. Parent bullets have a 12px gap; nested details start after 6px. There is no second outcome headline. Only concrete phrases receive 600-weight emphasis. Mobile uses one column, 28px case gaps and 18px feature headings. There are no enclosed text cards, decorative counters or forced STAR labels.

All essential contributions are visible without interaction. The native disclosure uses `개발 내용 더 보기` when closed and `개발 내용 접기` when open, without parenthetical previews. Its plus/minus icon sits 8px beside the label within a content-sized control with a 44px minimum height. It supplies mechanisms and secondary cases as bullets, with an 800px reading measure. Repeated main summaries are removed from the disclosure. The common image component's file count is omitted following the user's October 22 review. The user excluded single-file PNG compression from the selected achievements. Unconfirmed historical productivity percentages are not used.

The shared reading width remains 1120px with 32px gutters, reduced to 24px on mobile. All eight approved product screens retain their aspect ratio and masking and are visible without expanding details. Images remain bounded within their covers and link to the shipped originals.

Covers and screenshots stay static. Linked-image hover uses a thin blue outline without moving the image or enlarging its shadow. Text controls respond through color. No section uses a viewport-triggered entrance. Videos, if supplied in project data, require user playback.

## Shared visual language

White and cool gray surfaces, dark Korean typography and blue interactive feedback come from [tokens.css](tokens.css). Blue identifies navigation, actions and keyboard focus. Case headings use ink; supported results are emphasized within the bullets. Product-cover surfaces are local colors chosen around the existing approved screens, rather than new site-wide semantic colors.

The site self-hosts Noto Sans KR weights 400, 500 and 600. The established type family remains in use across display, body and controls. Shared tokens own 80px major section spacing (64px on mobile), 32px heading-to-content spacing (24px on mobile), 48px shared desktop column gaps, the 28–32px section-heading scale, the 22–28px case-heading scale, 16px body text with 1.8 leading and 16px panel radii. Metadata and technology lists intentionally remain smaller than prose. White surfaces and open groups replace the former career-wide gray band and generic gray enclosures. Colored project covers remain behind the actual product screens.

Links use restrained color feedback; Career titles and profile links underline on hover. Service and footer links underline on hover. The site uses native page scrolling, visible 3px keyboard focus, themed selection and scrollbars. The fixed header is 72px on desktop and 64px on compact layouts. Its AI link goes directly to the tools section. Section anchor offsets account for their own padding so titles clear the header without duplicated blank space.

## Other current sections

The hero uses a large name and blue role in the left column, followed by the current introduction at a 475px reading width. Its positioning paragraph uses 18px medium type with balanced wrapping; Android and AI/automation experience use separate 16px paragraphs, with 16px gaps and an extra 8px after the lead. The identity-to-copy gap is 24px, followed by the project/profile links. The right column presents the approved Momentica, Vuddy chat and masked AI chat images, retaining aspect ratios and adding no simulated device chrome. The product stage uses open white space, neutral layered screen shadows and a soft floor shadow. It has no colored backdrop or outer ring. Screens fan out once over 1.3 seconds, following the 900ms identity entrance with short staggered delays. Fine-pointer movement tilts the parent stage with damped interpolation and no component re-renders. The frame loop ends when the stage settles. Reduced-motion preferences disable the entrance, tilt and moving hover feedback. At 900px and below, the complete introduction and project/profile links precede the stage, matching DOM and keyboard order. Screen sizes reduce at 480px and 350px. The lead preserves the user's positioning sentence, followed by separate Android and AI/automation paragraphs. Long project titles and main messages use balanced wrapping; body copy uses pretty wrapping with Korean word boundaries retained. Other sections retain their existing presentation. In the PDF, the name is 24pt, the role 9.5pt and the profile links 9pt; the isolated website/date row is replaced by a compact Portfolio link.

Career starts with a 32px employer name, a quiet affiliation and company description. Role and tenure align to the right on desktop and stack below the company on mobile. A stronger rule separates employment identity from three open project rows. Desktop rows use a 240px identity column and a flexible contribution column. Vuddy leads with a 24px blue linked title; other row titles use 22px, and the two nested AI projects use 18px. The AI projects are consecutive full-width rows; each heading and date shares a wrapping row, with the responsibility statement below. Dates use 13px muted text and contributions retain 16px body text. All Career contributions use bullet lists, including Momentica; selected technical emphasis and contribution boundaries remain. At 1023px, the identity column narrows to 200px. At 600px, all rows stack; an inset vertical rule identifies the AI projects as children of the TF group. Company information stays in normal document flow. No new panels, icons or animation are introduced.

Development tools start directly with the section heading and representative case. On desktop, the QA case pairs its title and contribution bullets with the capture using the same 0.8fr/1.2fr columns and shared gap as the network debugging tool. The QA procedure disclosure occupies a separate full-width row and retains a 760px expanded reading measure. At 1023px and below, the introduction, image and disclosure stack with 24px gaps. Notion MCP and worktree appear in the procedure disclosure, without a separate keyword line or duplicate process inventory. Its native disclosure uses a plain text control with a plus/minus state icon. Planning/token work and multi-agent review sit side by side on desktop, stacking up to 1023px, with titles above their own descriptions. Planning work separates context from implementation bullets. Longer QA stages separate validation and deployment checks with nested bullets; short stages retain prose. The review bullet list owns the handoff configuration without a duplicate introductory paragraph. The Android network debugging tool pairs a narrower description with a wider capture on desktop and stacks up to 1023px. Values belong to `HowIWork.module.css`.

Side projects and activities use compact rows with a name, period and product summary, stacking below 720px. Open source retains two columns. Implementation bullet lists are omitted from the compact rows. Their headings and body text follow the shared scale. The user removed the closing Interests and Contact sections on 2026-10-14. Activities now lead directly to the footer; public profile destinations remain in the hero.

## Sources and maintenance

Runtime values live in [Projects](src/components/Projects.module.css), [ProjectScene](src/components/ProjectScene.module.css), [shared styles](src/styles/global.css) and the owning component modules. The earlier technical-case components and data have been removed. Source files own the current implementation.

Run `npm run check` and inspect actual desktop/mobile views, including 320px, after relevant changes. Passing checks does not establish visual acceptance or a public deployment.

## Spacing and icons, 2026-10-13

The header uses the name as its wordmark without a separate decorative Android symbol. Shared `Icon.tsx` supplies 18px GitHub, LinkedIn and disclosure icons, with a 20px mobile menu icon. Text controls use a minimum 44px target. Native disclosures show a plus when closed and a minus when open. Major-section, heading-to-content and column spacing use shared tokens. The approved introduction, contribution scope and ten images remain intact.

The introduction-to-Career gap is 48px on desktop and 40px on narrow mobile layouts. In PDF output, use 10pt from identity to introduction, 6pt between introduction paragraphs and 16pt before Career. Keep the document continuous: do not bind a project header to its complete image block when that moves the next section out of available page space.
