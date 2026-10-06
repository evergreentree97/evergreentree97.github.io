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
    fontSize: 56px
    fontWeight: 750
    lineHeight: 1.2
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

Ricky Choi's portfolio pairs dark headings and Korean explanations with large approved Android application screens. White and cool-gray surfaces separate the opening, project images and technical reading. Blue identifies actions, current navigation, selected media and keyboard focus.

This scan records the implemented October 6, 2026 interpretation of the user's Toss UI and UX reference. Wanted Sans and Uncut Sans remain self-hosted. Blue is an implementation assumption because the optional accent-color question was unanswered. The local finish review reported ship; this records the implementation and does not imply user aesthetic acceptance or publication.

**Key Characteristics:**

- Compact white navigation and broad rounded image surfaces.
- Complete approved app screens with captions and original-image access.
- Introduction and responsibility beside app imagery, followed by native contribution disclosures.
- Visible keyboard focus, reduced motion and styled prerendered reading without JavaScript.

The source record is [toss-revision-2026-10-06.md](docs/portfolio/toss-revision-2026-10-06.md). Existing per-file media approvals and provenance remain in [content.md](docs/portfolio/content.md); this refresh adds no image or career claim.

## Colors

White and cool gray carry the reading and image surfaces. The frontmatter preserves the source token names and values from `tokens.css`, including aliases that intentionally share a value.

### Primary

- **Blue (`accent`):** primary actions, text links, current navigation, selected media and disclosure field labels.
- **Strong Blue (`accent-strong`):** the primary action's hover background.
- **Focus Blue (`focus`):** the global keyboard outline (3px, offset 4px).

### Neutral

- **White (`paper`, `paper-2`):** page and header, secondary actions, and image stages inside gray detail sections.
- **Cool Gray (`paper-3`):** opening, featured project, image stages, selected navigation and contact cards.
- **Dark Ink (`ink`):** headings, main text and default control content.
- **Secondary Ink (`ink-2`):** explanations and technology text.
- **Muted Ink (`muted`):** facts, dates, captions and unselected media labels.
- **Rule (`rule`):** contribution boundaries, footer dividers and neutral hover fills.
- **Strong Rule (`rule-strong`):** career-link underlines and the scrollbar thumb.

**The Action Color Rule.** Use blue for actions, current or selected states and keyboard focus. Keep reading surfaces white or cool gray.

## Typography

**Korean and Body Font:** Wanted Sans, with a sans-serif fallback.

**English Name and Project Font:** Uncut Sans, with Wanted Sans and sans-serif fallbacks.

Both variable fonts are self-hosted in `public/fonts/`. Utility aliases resolve to Wanted Sans; there is no distinct monospace face or applied stylistic set. Frontmatter roles record the observed desktop values. `headline` records the upper desktop size; the source interpolates it with `clamp(40px, 4vw, 48px)`.

### Hierarchy

- **Identity:** the Korean name uses `identity`, becoming 36px below 760px. Its English name uses Uncut Sans at 18px, becoming 15px. The Android role uses 24px at weight 700, becoming 20px.
- **Headline:** section headings use `headline`; detail headings share its size, weight and tracking with line height 1.28. Section headings become 32px below 700px; details become 32px with line height 1.3 below 800px.
- **Project title:** secondary index titles use `project-title`; Vuddy uses `featured-project-title`. All become 32px below 760px.
- **Body:** `body` is the global reading baseline, becoming 16px below 720px. Detail introductions use 18px and line height 1.7, becoming 16px below 800px. Case values and responsibility text remain within 16–18px.
- **Case title:** `case-title` names native contribution disclosures, becoming 20px below 800px. Responsibility-group titles use 24px, becoming 22px.
- **Action and navigation labels:** `action-label` covers opening actions and detail links. `navigation-label` covers desktop destinations; mobile destinations use 20px at the 900px breakpoint.
- **Media and career labels:** `media-selector-label` covers screen buttons, `media-caption` covers captions, and `chapter-title` covers career links. Field labels use 14px at weight 650.

**The Reading Voice Rule.** Keep Korean explanations in Wanted Sans. Use Uncut Sans for English names, project titles and career dates.

## Layout

The rendered main shell uses `width: min(100% - 48px, 1160px)`, retaining 24px reading gutters. The fixed white header is 64px high; its outer maximum is 1208px including 24px horizontal padding. The unused global `--content-width` alias is not the rendered shell authority.

The opening has a 1360px maximum and 16px outer gutters, with 48px by 80px padding, a 1.2:0.8 grid and 64px gap. At 1100px its horizontal padding becomes 48px and gap 40px. Below 760px it stacks, with 12px outer gutters plus 12px inner padding, preserving 24px text gutters; the image is at most 244px. The desktop opening image is at most 290px.

Vuddy spans the project index's full desktop row. AI and Momentica use two columns with 32px between columns and 64px between rows. The index becomes one column below 760px. Project detail introductions and responsibility form one vertically centered text column beside a 440px media stage holding an intact screenshot at most 310px wide. The column gap is 80px; at 1050px the stage becomes 360px and gap 40px.

Below 800px detail order is heading and facts, image, responsibility, reading, then links. Only the overview wrapper uses `display: contents` there to assign heading and responsibility to separate grid areas. Detail reading below the opening pair has a maximum width of 840px. Disclosure fields use a 136px label column and 24px gap, then stack with a 6px gap on mobile. Values retain a 70ch maximum.

Detail sections use 112px vertical padding, becoming 64px below 800px. Career uses a 190px period column and stacks below 760px; general evidence uses a 0.8:1.6 grid and stacks below 700px. Secondary work columns stack below 820px and contact cards below 650px. The frontmatter spacing steps are the active footer variables; other regions use their observed component-specific gaps. Opening and detail actions target at least 48px, selectors and caption links 44px, and mobile navigation 52px.

## Elevation & Depth

The rendered portfolio has no box shadows. White and cool-gray layers distinguish broad image stages and alternating detail regions; thin rules delimit disclosures and career reading. Approved screenshots keep their source proportions, colors and upright presentation.

**The Flat Reading Rule.** Separate regions with neutral surface changes and thin rules. Keep reading rows, controls and app images free of box shadows.

## Shapes

Controls use the `md` radius, desktop navigation uses `navigation`, and contact cards use `lg`. Image stages use `stage` or `preview`; the broad opening uses `opening`. Mobile image surfaces use `media-mobile`, while the mobile opening uses `preview`. These corners apply to the neutral stage, preserving the approved image content inside it. Ordinary disclosure and career rows remain open, separated by rules.

## Components

### Opening Actions

The project anchor uses `project-action`: blue fill, white text and rounded corners. Hover uses `project-action-hover`. GitHub uses `secondary-action`: white fill and dark text, with `secondary-action-hover` on hover. Both use a 10px icon gap, inline SVGs and the global visible focus outline. Mobile horizontal padding becomes 16px.

### Navigation

Compact English identity and desktop destinations sit on the white header. Hover uses a gray fill with dark text; the current destination uses blue text on gray and `aria-current="location"`. Below 900px, a 44px square button controls stacked destinations. Escape closes the menu and restores button focus; following a destination or the home link closes it. Without JavaScript, the toggle is hidden, the mobile header is static, and visible destinations wrap.

### Project Summary and Contact Cards

Project summaries pair approved screenshots with product name, service, responsibility, period, technologies and a named detail action. Vuddy has a gray full-row container; secondary summaries place gray image stages above open copy columns. Technology names are plain text. Contact destinations use gray cards, `contact-destination` padding and radius, account labels, inline SVGs and a blue text hover state.

### Screenshot Selection and Caption

Where multiple detail images exist, `media-selector` buttons use explicit `aria-pressed` selection. The selected variant is blue with white text; unselected hover uses the neutral rule fill and dark text. In gray detail sections, unselected buttons use gray inside a white image stage. No automatic rotation occurs. Without JavaScript, controls are hidden and every detail image remains visible.

Each figure retains intrinsic image dimensions, its approved caption and an original-image action. Index and detail captions use a 4px column gap, the `media-caption` role and a 44px original-image target. Masked AI images retain their screen-mockup label. The opening caption keeps its two-column arrangement.

### Contribution Disclosure

Native `details` and `summary` reveal evidenced context, choice, implementation and boundaries. The first contribution in each responsibility group starts open. `case-summary` has a 72px minimum target; hover and visible focus use blue. Its inline arrow rotates 90 degrees when open. Label and value fields follow the Layout rules. AI model and Android responsibility groups remain separate.

### Motion and Reading Fallback

Only the project index appears with opacity 0.85 to 1 and translateY(8px) to zero over 300ms. Sibling delay is 50ms, capped at 100ms. Content starts visible, so reading does not depend on IntersectionObserver or animation success. Control feedback and disclosure arrows use 180ms with `ease-out`. Hover-capable devices apply image-only scale(1.015). The existing footer press uses a 120ms transition and translateY(1px).

Reduced motion removes entrance animation, image transforms and transitions, and restores automatic scrolling. Styled prerendered HTML preserves reading, native disclosures, navigation and all eight actual screenshots without JavaScript. The sidecar contains six source-derived snippets: primary action, secondary action, navigation, media selector, contribution disclosure and screen caption. No input field or invented screenshot is introduced.

## Do's and Don'ts

### Do:

- **Do** preserve complete approved images, intrinsic dimensions, captions, mockup labels and direct original-image links.
- **Do** keep the model-development and Android responsibility groups separate, with only evidenced disclosure fields.
- **Do** retain native disclosures, explicit media selection, visible keyboard focus and the readable no-JavaScript fallback.
- **Do** use the implemented heading hierarchy and 16–18px explanatory body text.
- **Do** inspect current desktop and mobile renders after visual changes and follow docs/portfolio/plain-language.md before adding copy.

### Don't:

- **Don't** restore the superseded olive or red-orange palette, oversized identity lettering or dark tools reading surface.
- **Don't** replace approved screens with invented artwork, crop their content to fill a stage or add an unsupported app icon.
- **Don't** add shadows or rounded card shells around ordinary contribution and career reading rows.
- **Don't** hide reading behind entrance animations, intercept scrolling or require JavaScript for native disclosures.
- **Don't** infer user aesthetic acceptance or publication from build checks or the local-review disposition.
