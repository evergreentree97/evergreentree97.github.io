---
name: Ricky Choi Portfolio
description: White and cool-gray surfaces, blue controls and approved Android application screens.
colors:
  paper: '#FFFFFF'
  paper-2: '#FFFFFF'
  paper-3: '#F2F4F6'
  ink: '#191F28'
  ink-2: '#4E5968'
  muted: '#4E5968'
  rule: '#E5E8EB'
  rule-strong: '#B0B8C1'
  accent: '#1B64DA'
  accent-strong: '#1554BC'
  focus: '#1B64DA'
typography:
  identity:
    fontFamily: Wanted Sans, sans-serif
    fontSize: 48px
    fontWeight: 750
    lineHeight: 1.2
    letterSpacing: -.025em
  english-name:
    fontFamily: Uncut Sans, Wanted Sans, sans-serif
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -.01em
  role:
    fontFamily: Wanted Sans, sans-serif
    fontSize: 18px
    fontWeight: 550
    lineHeight: 1.72
  opening-lead:
    fontFamily: Wanted Sans, sans-serif
    fontSize: clamp(26px, 2.2vw, 30px)
    fontWeight: 700
    lineHeight: 1.48
    letterSpacing: -.025em
  headline:
    fontFamily: Wanted Sans, sans-serif
    fontSize: 48px
    fontWeight: 750
    lineHeight: 1.25
    letterSpacing: -.025em
  project-title:
    fontFamily: Uncut Sans, Wanted Sans, sans-serif
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -.02em
  featured-project-title:
    fontFamily: Uncut Sans, Wanted Sans, sans-serif
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -.02em
  representative-contribution:
    fontFamily: Wanted Sans, sans-serif
    fontSize: 20px
    fontWeight: 650
    lineHeight: 1.5
    letterSpacing: -.015em
  featured-contribution:
    fontFamily: Wanted Sans, sans-serif
    fontSize: 22px
    fontWeight: 650
    lineHeight: 1.5
    letterSpacing: -.015em
  development-lead:
    fontFamily: Wanted Sans, sans-serif
    fontSize: 24px
    fontWeight: 650
    lineHeight: 1.72
    letterSpacing: -.015em
  body:
    fontFamily: Wanted Sans, sans-serif
    fontSize: 17px
    fontWeight: 440
    lineHeight: 1.72
  case-title:
    fontFamily: Wanted Sans, sans-serif
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.45
  action-label:
    fontFamily: Wanted Sans, sans-serif
    fontSize: 15px
    fontWeight: 650
    lineHeight: 1.72
  navigation-label:
    fontFamily: Wanted Sans, sans-serif
    fontSize: 14px
    fontWeight: 550
    lineHeight: 1.72
  media-selector-label:
    fontFamily: Wanted Sans, sans-serif
    fontSize: 13px
    fontWeight: 550
    lineHeight: 1.72
  media-caption:
    fontFamily: Wanted Sans, sans-serif
    fontSize: 12px
    fontWeight: 440
    lineHeight: 1.65
rounded:
  navigation: 10px
  md: 12px
  lg: 16px
  media-mobile: 24px
  preview: 28px
  stage: 32px
spacing:
  xs: .5rem
  lg: 1.5rem
  xl: 2.5rem
  2xl: 4rem
components:
  opening-copy:
    textColor: '{colors.ink}'
    typography: '{typography.opening-lead}'
  project-action:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.paper-2}'
    typography: '{typography.action-label}'
    rounded: '{rounded.md}'
    padding: 12px 20px
  project-action-hover:
    backgroundColor: '{colors.accent-strong}'
  secondary-action:
    backgroundColor: '{colors.paper-2}'
    textColor: '{colors.ink}'
    typography: '{typography.action-label}'
    rounded: '{rounded.md}'
    padding: 12px 20px
  secondary-action-hover:
    backgroundColor: '{colors.rule}'
  navigation:
    backgroundColor: '{colors.paper}'
    textColor: '{colors.ink-2}'
    typography: '{typography.navigation-label}'
    rounded: '{rounded.navigation}'
    padding: 8px 12px
  navigation-hover:
    backgroundColor: '{colors.paper-3}'
    textColor: '{colors.ink}'
  navigation-current:
    backgroundColor: '{colors.paper-3}'
    textColor: '{colors.accent}'
  project-detail-link:
    backgroundColor: '{colors.paper-2}'
    textColor: '{colors.accent}'
    typography: '{typography.action-label}'
    rounded: '{rounded.md}'
    padding: 10px 16px
  media-selector:
    backgroundColor: '{colors.paper-2}'
    textColor: '{colors.muted}'
    typography: '{typography.media-selector-label}'
    rounded: '{rounded.md}'
    padding: 10px 16px
  media-selector-hover:
    backgroundColor: '{colors.rule}'
    textColor: '{colors.ink}'
  media-selector-selected:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.paper-2}'
  screen-caption:
    textColor: '{colors.muted}'
    typography: '{typography.media-caption}'
  case-summary:
    textColor: '{colors.ink}'
    typography: '{typography.case-title}'
    padding: 22px 0
  case-summary-hover:
    textColor: '{colors.accent}'
  featured-summary:
    backgroundColor: '{colors.paper-3}'
    rounded: '{rounded.stage}'
    padding: 48px
  secondary-summary-media:
    backgroundColor: '{colors.paper-3}'
    rounded: '{rounded.preview}'
    padding: 24px 24px 12px
  additional-history:
    textColor: '{colors.ink}'
    padding: 24px 0
  contact-destination:
    backgroundColor: '{colors.paper-3}'
    textColor: '{colors.ink}'
    rounded: '{rounded.lg}'
    padding: 24px
---

# Design System: Ricky Choi Portfolio

## Overview

**Creative North Star: "Approved Android screens on white and cool gray"**

Ricky Choi's portfolio pairs dark headings and Korean explanations with complete approved Android application screens. White reading surfaces and cool-gray image stages keep technical text and app imagery distinct. Blue identifies actions, current navigation, selected media and keyboard focus. The name leads the opening; two factual introduction sentences stay together before its actions and modest app preview.

This refresh records the October 6, 2026 structural rebuild after the user rejected the earlier repeated summary/detail composition. Wanted Sans and Uncut Sans, the established Toss UI and UX interpretation, approved images and verified claims remain. Blue remains an implementation assumption because the optional accent-color question was unanswered. The earlier career-emphasis ship disposition was superseded by the user's rejection. The fresh structural review requested this documentation correction; final disposition follows this refresh and is not recorded here as ship or user acceptance.

**Key Characteristics:**

- Compact white navigation, open reading rows and rounded cool-gray image stages.
- Project names and service explanations before complete approved app screens, with captions and original-image access.
- An overview with project summaries and deliberate links to separate static technical-reading pages.
- Visible keyboard focus, native disclosures, reduced motion and styled prerendered reading without JavaScript.

The current composition and direction contract are [structure.md](docs/portfolio/structure.md), with implementation and verification recorded in [structure-revision-2026-10-06.md](docs/portfolio/structure-revision-2026-10-06.md). The established visual interpretation is recorded in [toss-revision-2026-10-06.md](docs/portfolio/toss-revision-2026-10-06.md). Per-file media approvals and provenance remain in [content.md](docs/portfolio/content.md). Local structural-review captures under `.impeccable/review/structure/` are not published artifacts.

## Colors

White and cool gray carry reading and image surfaces. Frontmatter preserves the active source token names and values from `tokens.css`, including aliases that intentionally share a value.

### Primary

- **Blue (`accent`):** primary actions, text links, current navigation, selected media, and disclosure hover and focus states.
- **Strong Blue (`accent-strong`):** the primary action's hover background.
- **Focus Blue (`focus`):** the global keyboard outline (3px, offset 4px).

### Neutral

- **White (`paper`, `paper-2`):** page and header, secondary actions and selected neutral controls.
- **Cool Gray (`paper-3`):** preview and detail image stages, the featured summary, current navigation and contact cards.
- **Dark Ink (`ink`):** headings, main text and default control content.
- **Secondary Ink (`ink-2`):** explanations, technology text and disclosure field labels.
- **Muted Ink (`muted`):** facts, dates, captions and unselected media labels.
- **Rule (`rule`):** disclosure and footer boundaries, career dividers and neutral hover fills.
- **Strong Rule (`rule-strong`):** the scrollbar thumb.

**The Action Color Rule.** Use blue for actions, current or selected states and keyboard focus. Keep reading surfaces white or cool gray.

## Typography

**Korean and Body Font:** Wanted Sans, with a sans-serif fallback.

**English Name and Project Font:** Uncut Sans, with Wanted Sans and sans-serif fallbacks.

Both variable fonts are self-hosted in `public/fonts/`. Utility aliases resolve to Wanted Sans; there is no distinct monospace face or applied stylistic set. Frontmatter roles record desktop values. `headline` records the upper desktop size; the source interpolates it with `clamp(40px, 4vw, 48px)`.

### Hierarchy

- **Identity:** the Korean name uses `identity`, becoming 32px below 760px. The inline English name uses `english-name`, becoming 15px. The Android role uses `role`, becoming 16px.
- **Opening responsibility:** `opening-lead` carries the factual Vuddy statement, with balanced wrapping and a 30ch maximum. It becomes 22px with line height 1.5 below 760px. Supporting copy uses `body` and a 54ch maximum, becoming 16px with line height 1.7 below 760px. Both sentences precede actions and image on mobile.
- **Headline:** home section H2 headings use `headline`; a project page's sole H1 shares its size, weight and tracking with line height 1.28. Section headings become 32px below 700px; project H1 headings become 32px with line height 1.3 below 800px.
- **Project title:** secondary summary titles use `project-title`; Vuddy uses `featured-project-title`. Both become 32px below 760px. Summary contribution text uses `representative-contribution` or `featured-contribution`; both become 20px below 760px. Vuddy contribution copy retains a 26ch maximum.
- **Body:** `body` is the global baseline, becoming 16px below 720px. Detail introductions use 18px and line height 1.7, becoming 16px below 800px. Responsibility and disclosure values remain within 16–18px. The development-record introduction uses `development-lead`, becoming 21px below 700px.
- **Case title:** `case-title` names native contribution disclosures, becoming 20px below 800px. Summaries use H2 when directly under the project and H3 when under an H2 responsibility group. Group titles use 24px, becoming 22px. Company headings use 28px at weight 550; company introduction text uses 17px.
- **Action and navigation labels:** `action-label` covers opening actions and detail links. `navigation-label` covers desktop destinations; mobile destinations use 20px at the 900px breakpoint. Breadcrumbs use 15px.
- **Media and disclosure labels:** `media-selector-label` covers screen buttons and `media-caption` covers captions. Field labels use 14px at weight 650. The additional-history summary uses 20px at weight 650, becoming 18px below 760px; its section H2 headings use 28px.

**The Reading Voice Rule.** Keep Korean explanations in Wanted Sans. Use Uncut Sans for English names, project titles and career dates.

## Layout

The rendered shell uses `width: min(100% - 48px, 1160px)`, retaining 24px gutters on home and detail pages. The fixed white header is 64px high; its outer maximum is 1208px including horizontal padding. The unused global `--content-width` and `--wide-width` aliases do not define the rendered shell.

Home and each static project page are distinct compositions. The current home order is opening, project summaries, compact company career, development records, a closed additional-history disclosure, and contact. The three project destinations are `/projects/vuddy/`, `/projects/model-evaluation/` and `/projects/momentica/`. Full contribution disclosures are on those pages. This allocation belongs to the current structure contract, rather than a rule for unrelated future screens.

The opening shares the shell width, has a 104px top margin and 40px top/64px bottom padding. Desktop uses a 1.25:0.75 grid and 80px gap, reduced to 40px at 1100px. Its copy groups identity, role, contiguous lead and support, then actions beside the Vuddy reply-chat preview. The gray preview is at most 320px wide, with 24px padding, a 28px radius and a screenshot at most 220px wide. Below 760px the opening top margin is 88px, padding is 24px top/48px bottom, and the copy wrapper uses `display: contents`. Order becomes identity, lead, support, actions, then preview, with 32px before the preview. The screenshot maximum becomes 152px.

The project overview uses 48px top/56px bottom padding and a 40px gap after its heading. Its two-column grid has 32px column and 48px row gaps. Vuddy spans the full desktop row in a gray container with 48px padding, a 1:0.9 grid and 64px column gap. At 1000px padding becomes 36px and the gap becomes 40px. AI and Momentica use one column each: project name and service first, gray image stage, then contribution, role, periods, technologies and detail link. Secondary image stages use 24px 24px 12px padding and a 28px radius. Featured screens are at most 220px wide; secondary screens are at most 176px wide. Below 760px overview padding becomes 40px top/48px bottom, the heading gap becomes 32px and the grid stacks with 48px gaps. Vuddy uses heading, media, copy order, 24px gaps, 24px 20px padding and a 24px radius. All summary screenshots become at most 152px wide, and secondary stages use 24px 20px 12px padding with a 24px radius.

Image allocation keeps eight distinct approved files across the four pages. Home uses Vuddy reply chat and home, AI chat list and Momentica take home. Details use Vuddy digital card, AI character chat and Momentica 3D photocard plus alarm. Caption and original-image access remain with each image.

Project page wrappers have 96px top padding, becoming 88px below 760px. A breadcrumb precedes a scene with 32px top/80px bottom padding. The scene uses overview/media, reading, footer grid areas. Introductions and responsibility form one vertically centered column beside a 440px image stage containing an intact screenshot at most 310px wide. Column gap is 80px; at 1050px the stage column becomes 360px and gap becomes 40px. Below 800px the scene uses 24px top/64px bottom padding and stacks heading/facts, media, scope, reading and footer with 28px gaps. Its overview uses `display: contents`; image maximum becomes 280px. Desktop stages use 32px 28px 20px padding and a 32px radius, narrowing horizontal padding to 24px at 1050px. Mobile stages use 28px 20px 16px padding and a 24px radius.

Detail reading has an 840px maximum and 32px top margin, becoming 8px below 800px. Disclosure fields use a 136px label column and 24px gap, stacking with a 6px gap on mobile. Values retain a 70ch maximum. Breadcrumb and project footer return to `/#projects`; detail header anchors point to home sections.

Company career uses 72px top/32px bottom padding and a 190px period column with a 40px gap. Below 760px top padding becomes 52px and rows stack with a 12px gap. Only company, introduction, role and period render here; former project chapter rows are not rendered. Development records follow with 88px top/40px bottom padding, reducing the top to 64px below 700px. Evidence rows use a 0.8:1.6 grid and 40px gap, stacking with a 10px gap below 700px.

The additional-history disclosure has a 48px top margin and thin top/bottom rules. Its summary has 24px vertical padding. Expanded content preserves side projects, open source and activities; secondary columns have a 56px gap and stack below 820px. Contact cards stack below 650px. Frontmatter spacing steps are the active footer variables; other regions use observed component-specific gaps. Opening and project-detail actions target at least 48px, selectors, breadcrumb and caption links 44px, and mobile navigation 52px.

## Elevation & Depth

The rendered portfolio has no box shadows. White reading surfaces and cool-gray stages distinguish actual app imagery; thin rules delimit disclosures and career rows. Standalone project scenes currently sit on white, so the retained even-scene alternate styling is not an active alternating page pattern. Approved screenshots preserve their proportions, colors and upright presentation.

**The Flat Reading Rule.** Separate regions with neutral surface changes and thin rules. Keep reading rows, controls and app images free of box shadows.

## Shapes

Controls use `md`, desktop navigation uses `navigation`, and contact cards use `lg`. The featured summary and desktop detail stages use `stage`; the opening preview and secondary summary image stages use `preview`. Mobile summary and detail surfaces use `media-mobile`, while the opening preview retains `preview`. These corners apply to the neutral surface surrounding images. Ordinary disclosure and company rows remain open, separated by rules. The former broad rounded opening container is no longer rendered.

## Components

### Opening Identity and Responsibility

The name is the largest opening text. Android role, Vuddy responsibility and the supporting model, app and Agent Skill sentence stay together before actions and image on both desktop and mobile. The sidecar's opening-copy snippet reproduces the current source typography; the pairing and image allocation follow Layout.

### Opening Actions

The project anchor uses `project-action`: blue fill, white text and rounded corners. Hover uses `project-action-hover`. GitHub uses `secondary-action`: white fill and dark text, with `secondary-action-hover`. Both use a 10px icon gap, inline SVGs and global visible focus. Mobile horizontal padding becomes 16px.

### Navigation and Project Returns

Compact English identity and desktop destinations sit on the white header. Home destinations follow projects, career, development records and contact order, then GitHub. Hover uses gray with dark text; current navigation uses blue on gray and `aria-current="location"`. Detail pages mark projects current and prefix all section anchors with home. The logo returns to `/#top`. Below 900px a 44px button opens stacked destinations. Escape closes the menu and restores button focus; following a destination closes it. Without JavaScript the toggle is hidden, the mobile header is static and visible destinations wrap. Detail breadcrumb and project footer return to the actual home project list at `/#projects`.

### Project Summaries and Contact Cards

Every summary's name and service appear before its image in source and mobile reading order. Role and period remain in the overview. Vuddy has a gray full-row container; secondary summaries have gray image stages above open copy. Contribution uses its own typography role, technologies remain plain text and named detail actions open static pages. The sidecar includes a source-derived Vuddy text fragment; source images remain in the actual site rather than being fabricated in snippets. Contact destinations use gray cards, `contact-destination` padding and radius, account labels, inline SVGs and blue text on hover.

### Screenshot Selection and Caption

Momentica detail buttons use explicit `aria-pressed` selection. Selected is blue with white text; unselected hover uses the neutral rule fill and dark text. There is no automatic rotation. Without JavaScript selectors are hidden and both detail images remain visible. Each figure retains intrinsic dimensions, its approved caption and an original-image action. Summary and detail captions use a 4px column gap, `media-caption` and a 44px original-image target. AI images keep their masking label. The opening caption uses its two-column arrangement.

### Contribution and Additional-History Disclosures

Native project `details` reveal only evidenced context, choice, implementation, verification and boundary fields. Implementation and verification occupy distinct rows when documented; absent fields do not render empty labels. The first contribution in each responsibility group starts open. `case-summary` has a 72px minimum target; hover and focus use blue, and its arrow rotates 90 degrees when open. AI model and Android responsibility groups stay separate. The additional-history disclosure starts closed, uses the browser's native marker and preserves all side-project, open-source and activity content. The sidecar includes a closed disclosure with a source-derived Duckie excerpt.

### Motion and Reading Fallback

Opening and project overview reuse `useEntrance`: opacity 0.85 to 1 and translateY(8px) to zero over 300ms with `ease-out`. Sibling delay is 50ms, capped at 100ms. The hook expands `display: contents` candidates into rendered children. IntersectionObserver starts each item once at an 0.08 threshold; content starts visible.

Control feedback, disclosure arrows, newly open enhanced disclosure bodies and selected figures use 180ms with `ease-out`; bodies and figures use opacity 0.85 to 1. Hover-capable devices apply image-only scale(1.015). Footer press uses a 120ms transition and translateY(1px). Reduced motion suppresses animations, image transforms and transitions, and restores automatic scrolling. The entrance hook handles preference changes and cleanup.

`src/prerender.tsx` renders each path through `App` to static HTML, with route-specific title and canonical URL; client hydration uses pathname. The styled fallback preserves page links, native disclosures and all eight screenshots across the four pages. The sidecar has ten source-derived snippets: opening copy, primary action, secondary action, navigation, media selector, contribution disclosure, caption, contact destination, featured summary excerpt and additional-history excerpt. No input field or invented image is introduced.

## Do's and Don'ts

### Do:

- **Do** preserve complete approved images, intrinsic dimensions, captions, mockup labels and direct original-image links.
- **Do** keep the model-development and Android responsibility groups separate, with only evidenced disclosure fields and distinct implementation and verification rows when documented.
- **Do** retain native disclosures, explicit media selection, visible keyboard focus and the readable no-JavaScript fallback.
- **Do** use one H1 per page, then the implemented H2/H3 hierarchy and 16–18px explanatory body text.
- **Do** inspect current desktop and mobile renders after visual changes and follow docs/portfolio/plain-language.md before adding copy.

### Don't:

- **Don't** restore the superseded olive or red-orange palette, oversized identity lettering or dark tools reading surface.
- **Don't** replace approved screens with invented artwork, crop their content to fill a stage or add an unsupported app icon.
- **Don't** add shadows or rounded card shells around ordinary contribution and career reading rows.
- **Don't** hide reading behind entrance animations, intercept scrolling or require JavaScript for native disclosures.
- **Don't** infer current approval from the superseded career-emphasis ship disposition, build checks or publication status.
