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
  section-heading:
    fontSize: "clamp(1.75rem, 2.4vw, 2rem)"
  featured-title:
    fontSize: "clamp(1.375rem, 2vw, 1.75rem)"
  mobile-title:
    fontSize: "1.375rem"
  context:
    fontSize: "1rem"
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

This records the current version approved for release on 2026-10-13. Preserve the selected introduction and factual contribution scope. Earlier studies do not authorize additional redesign. [Content](docs/portfolio/content.md) owns wording and disclosure, and [structure](docs/portfolio/structure.md) owns component organization. Local verification does not establish a public deployment.

## Project presentation

The project section uses an image-led composition. Vuddy is the full-width representative project. The related AI model/app and Momentica sit below in two columns. Up to 860px, all three use one column. The gallery has no text-card enclosure, case tabs or illustrative technical diagrams.

Each article presents approved screens, project identity, role and period, a short bulleted contribution summary, technologies and a native development disclosure. Product context appears when it adds information beyond the title. All eight approved images are visible without opening a disclosure. Clicking an image opens its existing original file. The summary highlights specific responsibilities without adding claims or metrics. The full descriptions preserve proposals, Android API integration and team review as distinct scopes.

All main sections share a 1120px reading width and the same 32px gutters, reduced to 24px up to 760px. Vuddy's cover is 560px high on desktop, 480px up to 1023px. The paired covers are 440px and 380px respectively. Single-column covers use a 1.1 aspect ratio with a 480px height cap. Screen widths remain bounded to preserve complete images within those covers. Full image aspect ratios and masking are preserved. Screens share a common alignment; there are no simulated devices or transformed product interfaces.

Project names use the shared 22–28px case-heading scale. Descriptions, contribution summaries and expanded detail use 16px, metadata 13px and technologies 12px. The 600 weight identifies projects, while 500 emphasizes actual technical contributions. Long descriptions use a reading measure up to 65ch.

Covers and screenshots stay static. Linked-image hover uses a thin blue outline without moving the image or enlarging its shadow. Text controls respond through color. No section uses a viewport-triggered entrance. Videos, if supplied in project data, require user playback.

## Shared visual language

White and cool gray surfaces, dark Korean typography and blue interactive feedback come from [tokens.css](tokens.css). Blue identifies navigation, actions and keyboard focus. Product-cover surfaces are local colors chosen around the existing approved screens, rather than new site-wide semantic colors.

The site self-hosts Noto Sans KR weights 400, 500 and 600. The established type family remains in use across display, body and controls. Shared tokens own 96px major section spacing (72px on mobile), 36px heading-to-content spacing (28px on mobile), 48px shared desktop column gaps, the 28–32px section-heading scale, the 22–28px case-heading scale, 16px body text with 1.8 leading and 16px panel radii. Metadata and technology lists intentionally remain smaller than prose. White surfaces and open groups replace the former career-wide gray band and generic gray enclosures. Colored project covers remain behind the actual product screens.

Links use restrained color feedback; Career titles and profile links underline on hover. Service and footer links underline on hover. The site uses native page scrolling, visible 3px keyboard focus, themed selection and scrollbars. The fixed header is 72px on desktop and 64px on compact layouts. Its AI link goes directly to the tools section. Section anchor offsets account for their own padding so titles clear the header without duplicated blank space.

## Other current sections

The hero starts with name and role above the complete selected sentence. Its neutral 500-weight headline is capped at 44px with three desktop lines and natural mobile wrapping. It has no sentence-wide blue emphasis or animated underline. A 44px project action and quiet GitHub/LinkedIn links form one compact group. The full narrative paragraphs remain in two desktop columns and stack on mobile. Entry motion is a short 8px fade/translation, removed with reduced motion.

Career pairs employer identity and tenure with Vuddy, the related AI projects and Momentica using the same reading columns and heading scale as project descriptions. The supplied Career bullets and selected technical emphasis remain. The related AI work shares an open group separated from Vuddy by a subtle rule. Company information is sticky only on sufficiently large desktop viewports with reduced motion off.

Development tools start directly with the section heading and representative case. The QA case places its title, short introduction and task bullets before the full-width image. Agent Skill, Notion MCP and worktree appear in context, without a separate keyword line or duplicate process inventory. Its native disclosure uses a plain text control with a plus/minus state icon. Planning/token work and multi-agent review sit side by side on desktop, stacking up to 1023px, with titles above their own descriptions. Planning work separates context from implementation bullets. Longer QA stages separate validation and deployment checks with nested bullets; short stages retain prose. The review definition list owns the handoff configuration without a duplicate introductory paragraph. Inspector pairs a narrower description with a wider capture on desktop and stacks up to 1023px. Values belong to `HowIWork.module.css`.

Side projects use open columns with names before dates. Open source uses two columns. Activities use open rows. Interests use an open text aside with a subtle top rule. Their headings and body text follow the shared scale. Contact closes with its heading and compact public profile links, without a generic invitation, card enclosure or decorative illustration. The duplicate header GitHub link is removed; the hero and Contact keep their profile destinations.

## Sources and maintenance

Runtime values live in [Projects](src/components/Projects.module.css), [ProjectScene](src/components/ProjectScene.module.css), [shared styles](src/styles/global.css) and the owning component modules. The earlier technical-case components and data have been removed. Source files own the current implementation.

Run `npm run check` and inspect actual desktop/mobile views, including 320px, after relevant changes. Passing checks does not establish visual acceptance or a public deployment.

## Spacing and icons, 2026-10-13

The header uses the name as its wordmark without a separate decorative Android symbol. Shared `Icon.tsx` supplies 18px GitHub, LinkedIn and disclosure icons, with a 20px mobile menu icon. Text controls use a minimum 44px target. Native disclosures show a plus when closed and a minus when open. Major-section, heading-to-content and column spacing use shared tokens. The approved introduction, contribution scope and ten images remain intact.
