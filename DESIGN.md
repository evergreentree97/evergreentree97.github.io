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
    fontSize: 44px
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
    fontSize: clamp(28px, 2.5vw, 36px)
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
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -.02em
  representative-contribution:
    fontFamily: Wanted Sans, sans-serif
    fontSize: 22px
    fontWeight: 650
    lineHeight: 1.5
    letterSpacing: -.015em
  featured-contribution:
    fontFamily: Wanted Sans, sans-serif
    fontSize: 28px
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
  chapter-title:
    fontFamily: Wanted Sans, sans-serif
    fontSize: 17px
    fontWeight: 550
    lineHeight: 1.72
rounded:
  navigation: 10px
  md: 12px
  lg: 16px
  media-mobile: 24px
  preview: 28px
  stage: 32px
  opening: 40px
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
  contact-destination:
    backgroundColor: '{colors.paper-3}'
    textColor: '{colors.ink}'
    rounded: '{rounded.lg}'
    padding: 24px
---

# Design System: Ricky Choi Portfolio

## Overview

**Creative North Star: "Approved Android screens on white and cool gray"**

Ricky Choi's portfolio pairs dark headings and Korean explanations with large approved Android application screens. White and cool-gray surfaces separate the opening, project images and technical reading. Blue identifies actions, current navigation, selected media and keyboard focus. The current opening gives the Android responsibility statement more typographic emphasis than the name, with verified model, app and QA work in supporting copy.

This refresh records the approved October 6, 2026 career-emphasis revision within the established interpretation of the user's Toss UI and UX reference. Wanted Sans and Uncut Sans remain self-hosted. Blue remains an implementation assumption because the optional accent-color question was unanswered. The user authorized implementation and direct screenshot-based aesthetic review. The fresh local finish review returned ship for this revision; that disposition does not establish user aesthetic acceptance or publication.

**Key Characteristics:**

- Compact white navigation and broad rounded image surfaces.
- Complete approved app screens with captions and original-image access.
- Android responsibility beside actual app imagery, followed by native contribution disclosures with separate verification when documented.
- Visible keyboard focus, reduced motion and styled prerendered reading without JavaScript.

The current direction and implementation record is [career-emphasis-2026-10-06.md](docs/portfolio/career-emphasis-2026-10-06.md); the established visual world is recorded in [toss-revision-2026-10-06.md](docs/portfolio/toss-revision-2026-10-06.md). Existing per-file media approvals and provenance remain in [content.md](docs/portfolio/content.md). This refresh documents the final source without adding an image or career claim. Local capture evidence lives under `.impeccable/review/career-emphasis/` and is not a published artifact.

## Colors

White and cool gray carry the reading and image surfaces. The frontmatter preserves the source token names and values from `tokens.css`, including aliases that intentionally share a value.

### Primary

- **Blue (`accent`):** primary actions, text links, current navigation, selected media, and disclosure hover and focus states.
- **Strong Blue (`accent-strong`):** the primary action's hover background.
- **Focus Blue (`focus`):** the global keyboard outline (3px, offset 4px).

### Neutral

- **White (`paper`, `paper-2`):** page and header, secondary actions, and image stages inside gray detail sections.
- **Cool Gray (`paper-3`):** opening, featured project, image stages, selected navigation and contact cards.
- **Dark Ink (`ink`):** headings, main text and default control content.
- **Secondary Ink (`ink-2`):** explanations, technology text and disclosure field labels.
- **Muted Ink (`muted`):** facts, dates, captions and unselected media labels.
- **Rule (`rule`):** contribution boundaries, footer dividers and neutral hover fills.
- **Strong Rule (`rule-strong`):** career-link underlines and the scrollbar thumb.

**The Action Color Rule.** Use blue for actions, current or selected states and keyboard focus. Keep reading surfaces white or cool gray.

## Typography

**Korean and Body Font:** Wanted Sans, with a sans-serif fallback.

**English Name and Project Font:** Uncut Sans, with Wanted Sans and sans-serif fallbacks.

Both variable fonts are self-hosted in `public/fonts/`. Utility aliases resolve to Wanted Sans; there is no distinct monospace face or applied stylistic set. Frontmatter roles record the observed desktop values. `headline` records the upper desktop size; the source interpolates it with `clamp(40px, 4vw, 48px)`.

### Hierarchy

- **Identity:** the Korean name uses `identity`, becoming 32px below 760px. The inline English name uses `english-name`, becoming 15px. The Android role uses `role`, becoming 16px.
- **Opening responsibility:** `opening-lead` carries the factual Vuddy statement, with balanced wrapping and a 30ch maximum. It becomes 26px with line height 1.5 below 760px. Supporting copy uses the `body` role and a 54ch maximum, becoming 16px with line height 1.7 below 760px.
- **Headline:** section headings use `headline`; detail headings share its size, weight and tracking with line height 1.28. Section headings become 32px below 700px; details become 32px with line height 1.3 below 800px.
- **Project title:** secondary index titles use `project-title`; Vuddy uses `featured-project-title`. All become 32px below 760px. The separate contribution statement uses `representative-contribution`; Vuddy uses `featured-contribution` with a 26ch maximum. Both contribution variants become 22px below 760px.
- **Body:** `body` is the global reading baseline, becoming 16px below 720px. Detail introductions use 18px and line height 1.7, becoming 16px below 800px. Case values and responsibility text remain within 16–18px. The development-record introduction uses `development-lead`, becoming 21px below 700px.
- **Case title:** `case-title` names native contribution disclosures, becoming 20px below 800px. Responsibility-group titles use 24px, becoming 22px.
- **Action and navigation labels:** `action-label` covers opening actions and detail links. `navigation-label` covers desktop destinations; mobile destinations use 20px at the 900px breakpoint.
- **Media and career labels:** `media-selector-label` covers screen buttons, `media-caption` covers captions, and `chapter-title` covers career links. Field labels use 14px at weight 650.

**The Reading Voice Rule.** Keep Korean explanations in Wanted Sans. Use Uncut Sans for English names, project titles and career dates.

## Layout

The rendered main shell uses `width: min(100% - 48px, 1160px)`, retaining 24px reading gutters. The fixed white header is 64px high; its outer maximum is 1208px including 24px horizontal padding. The unused global `--content-width` alias is not the rendered shell authority.

The opening has a 1360px maximum and 16px outer gutters, with 48px by 80px padding, a 1.25:0.75 grid and 80px gap. Its desktop copy wrapper groups identity, responsibility, supporting introduction and actions beside the actual Vuddy reply-chat screen, which is at most 252px wide. At 1100px horizontal padding becomes 48px and the gap becomes 40px. Below 760px the copy wrapper uses `display: contents` and the grid order becomes identity, responsibility, actions, image, supporting introduction. The mobile opening uses 28px by 12px padding inside 12px outer gutters, preserving 24px text gutters; the image is at most 244px wide.

The project index uses 88px top and 80px bottom padding, becoming 64px on both sides below 760px. Vuddy spans its full desktop row with a gray container, 48px padding, a 1:0.9 grid and 64px gap. At 1000px that padding becomes 36px and the gap becomes 40px. AI and Momentica use two columns with 32px between columns and 64px between rows. Below 760px the index becomes one column with a 48px row gap; the featured card uses 28px 20px 24px padding and a 28px internal gap. Secondary copy stays open below its image stage.

Vuddy uses reply chat in the opening, home in the index and the digital card in detail. The AI and Momentica allocations remain unchanged, keeping all eight approved source files distinct in rendered content. Project detail introductions and responsibility form one vertically centered text column beside a 440px media stage holding an intact screenshot at most 310px wide. The column gap is 80px; at 1050px the stage becomes 360px and the gap becomes 40px.

Below 800px detail order is heading and facts, image, responsibility, reading, then links. The detail overview wrapper uses `display: contents` there to assign heading and responsibility to separate grid areas. The detail image maximum becomes 280px. Detail reading below the opening pair has a maximum width of 840px. Disclosure fields use a 136px label column and 24px gap, then stack with a 6px gap on mobile. Values retain a 70ch maximum.

Detail sections use 96px vertical padding, becoming 64px below 800px. Development records precede career chronology and use 88px top and 40px bottom padding; below 700px the top padding becomes 64px. Evidence rows use a 0.8:1.6 grid with a 40px gap, stacking with a 10px gap below 700px. Career uses a 190px period column and stacks below 760px. Secondary work columns stack below 820px and contact cards below 650px. The frontmatter spacing steps are the active footer variables; other regions use their observed component-specific gaps. Opening and detail actions target at least 48px, selectors and caption links 44px, and mobile navigation 52px.

## Elevation & Depth

The rendered portfolio has no box shadows. White and cool-gray layers distinguish broad image stages and alternating detail regions; thin rules delimit disclosures and career reading. Approved screenshots keep their source proportions, colors and upright presentation.

**The Flat Reading Rule.** Separate regions with neutral surface changes and thin rules. Keep reading rows, controls and app images free of box shadows.

## Shapes

Controls use the `md` radius, desktop navigation uses `navigation`, and contact cards use `lg`. Image stages use `stage` or `preview`; the broad opening uses `opening`. Mobile image surfaces use `media-mobile`, while the mobile opening uses `preview`. These corners apply to the neutral stage, preserving the approved image content inside it. Ordinary disclosure and career rows remain open, separated by rules.

## Components

### Opening Identity and Responsibility

The name and Android role identify the candidate before the larger Vuddy responsibility statement. The supporting sentence contains the source-verified model, Android and Agent Skill QA work. Desktop groups these in one copy wrapper; mobile places actions and the actual app image before the supporting introduction. The sidecar includes the current copy typography as a standalone source-derived snippet; the full composition and image allocation follow Layout.

### Opening Actions

The project anchor uses `project-action`: blue fill, white text and rounded corners. Hover uses `project-action-hover`. GitHub uses `secondary-action`: white fill and dark text, with `secondary-action-hover` on hover. Both use a 10px icon gap, inline SVGs and the global visible focus outline. Mobile horizontal padding becomes 16px.

### Navigation

Compact English identity and desktop destinations sit on the white header. Destinations follow project, development records, career, open source and contact order. Hover uses a gray fill with dark text; the current destination uses blue text on gray and `aria-current="location"`. Below 900px, a 44px square button controls stacked destinations. Escape closes the menu and restores button focus; following a destination or the home link closes it. Without JavaScript, the toggle is hidden, the mobile header is static, and visible destinations wrap.

### Project Summary and Contact Cards

Project summaries pair approved screenshots with product name, service, a distinct representative contribution, responsibility, period, technologies and a named detail action. The service explanation precedes the heavier contribution statement; the contribution has its own typography role. Vuddy has a gray full-row container; secondary summaries place gray image stages above open copy columns. Technology names are plain text. Contact destinations use gray cards, `contact-destination` padding and radius, account labels, inline SVGs and a blue text hover state.

### Screenshot Selection and Caption

Where multiple detail images exist, `media-selector` buttons use explicit `aria-pressed` selection. The selected variant is blue with white text; unselected hover uses the neutral rule fill and dark text. In gray detail sections, unselected buttons use gray inside a white image stage. No automatic rotation occurs. Without JavaScript, controls are hidden and every detail image remains visible.

Each figure retains intrinsic image dimensions, its approved caption and an original-image action. Index and detail captions use a 4px column gap, the `media-caption` role and a 44px original-image target. Masked AI images retain their screen-mockup label. The opening caption keeps its two-column arrangement.

### Contribution Disclosure

Native `details` and `summary` reveal only the evidenced context, choice, implementation, verification and boundary fields available in the source. Implementation and verification occupy distinct rows when verification is documented; missing context or reasons do not produce empty fields. The first contribution in each responsibility group starts open. `case-summary` has a 72px minimum target; hover and visible focus use blue. Its inline arrow rotates 90 degrees when open. Field labels and values use secondary ink and follow the Layout rules. AI model and Android responsibility groups remain separate. Enhanced open bodies use the opacity feedback described below; native disclosure operation remains available without JavaScript.

### Motion and Reading Fallback

The opening and project index reuse `useEntrance`: opacity 0.85 to 1 and translateY(8px) to zero over 300ms, with `ease-out`. Sibling delay is 50ms, capped at 100ms. The hook expands a `display: contents` candidate into its rendered children so the mobile opening also receives entrance feedback. IntersectionObserver starts each item once at an 0.08 threshold. Content starts visible, so reading does not depend on observation or animation success.

Control feedback, disclosure arrows, newly open enhanced disclosure bodies and selected figures use 180ms with `ease-out`; bodies and figures use opacity 0.85 to 1. Hover-capable devices apply image-only scale(1.015). The existing footer press uses a 120ms transition and translateY(1px).

Reduced motion suppresses entrance animation, image transforms and transitions, and restores automatic scrolling. The entrance hook listens for preference changes, cancels running animations when reduction is requested, and disconnects its observer, cancels remaining animations and removes its listener on cleanup. Styled prerendered HTML preserves reading, native disclosures, static navigation and all eight actual screenshots without JavaScript. The sidecar contains eight source-derived snippets: opening copy, primary action, secondary action, navigation, media selector, contribution disclosure, screen caption and contact destination. No input field or invented screenshot is introduced.

## Do's and Don'ts

### Do:

- **Do** preserve complete approved images, intrinsic dimensions, captions, mockup labels and direct original-image links.
- **Do** keep the model-development and Android responsibility groups separate, with only evidenced disclosure fields and distinct implementation and verification rows when documented.
- **Do** retain native disclosures, explicit media selection, visible keyboard focus and the readable no-JavaScript fallback.
- **Do** use the implemented heading hierarchy and 16–18px explanatory body text, retaining the larger opening, contribution and development-record emphasis roles.
- **Do** inspect current desktop and mobile renders after visual changes and follow docs/portfolio/plain-language.md before adding copy.

### Don't:

- **Don't** restore the superseded olive or red-orange palette, oversized identity lettering or dark tools reading surface.
- **Don't** replace approved screens with invented artwork, crop their content to fill a stage or add an unsupported app icon.
- **Don't** add shadows or rounded card shells around ordinary contribution and career reading rows.
- **Don't** hide reading behind entrance animations, intercept scrolling or require JavaScript for native disclosures.
- **Don't** infer user aesthetic acceptance or publication from build checks or the local-review disposition.
