---
name: "Ricky Choi Portfolio"
description: "Warm light surfaces, restrained olive controls and real Android application screens."
colors:
  paper: "#FAF9F6"
  paper-2: "#FFFFFF"
  paper-3: "#E9EEDF"
  ink: "#20211E"
  ink-2: "#66685F"
  muted: "#66685F"
  rule: "#DDDED7"
  rule-strong: "#A3A99A"
  accent: "#526343"
  accent-strong: "#3D4B31"
  focus: "#526343"
typography:
  identity:
    fontFamily: "Wanted Sans, sans-serif"
    fontSize: "56px"
    fontWeight: 750
    lineHeight: 1.2
    letterSpacing: "-.025em"
  headline:
    fontFamily: "Wanted Sans, sans-serif"
    fontSize: "clamp(40px, 4vw, 48px)"
    fontWeight: 750
    lineHeight: 1.25
    letterSpacing: "-.025em"
  project-title:
    fontFamily: "Uncut Sans, Wanted Sans, sans-serif"
    fontSize: "32px"
    fontWeight: 650
    lineHeight: 1.25
  featured-project-title:
    fontFamily: "Uncut Sans, Wanted Sans, sans-serif"
    fontSize: "48px"
    fontWeight: 650
    lineHeight: 1.25
  body:
    fontFamily: "Wanted Sans, sans-serif"
    fontSize: "17px"
    fontWeight: 440
    lineHeight: 1.72
  case-title:
    fontFamily: "Wanted Sans, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.45
  action-label:
    fontFamily: "Wanted Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.72
  detail-label:
    fontFamily: "Wanted Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 650
    lineHeight: 1.72
  navigation-label:
    fontFamily: "Wanted Sans, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.72
  utility-label:
    fontFamily: "Wanted Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 440
    lineHeight: 1.72
  media-caption:
    fontFamily: "Wanted Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 440
    lineHeight: 1.65
  chapter-title:
    fontFamily: "Wanted Sans, sans-serif"
    fontSize: "17px"
    fontWeight: 550
    lineHeight: 1.72
rounded:
  sm: "4px"
  skip-link: "10px"
spacing:
  xs: ".5rem"
  lg: "1.5rem"
  xl: "2.5rem"
  2xl: "4rem"
components:
  project-action:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper-2}"
    typography: "{typography.action-label}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
  project-action-hover:
    backgroundColor: "{colors.accent-strong}"
  text-action:
    textColor: "{colors.accent}"
    typography: "{typography.action-label}"
  navigation:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.navigation-label}"
  navigation-current:
    textColor: "{colors.accent}"
  project-summary-featured:
    textColor: "{colors.ink}"
    typography: "{typography.featured-project-title}"
  project-detail-link:
    textColor: "{colors.accent}"
    typography: "{typography.detail-label}"
  media-selector:
    textColor: "{colors.muted}"
    typography: "{typography.utility-label}"
    padding: "8px 0"
  media-selector-selected:
    textColor: "{colors.accent}"
    typography: "{typography.utility-label}"
    padding: "8px 0"
  screen-caption:
    textColor: "{colors.muted}"
    typography: "{typography.media-caption}"
  case-summary:
    textColor: "{colors.ink}"
    typography: "{typography.case-title}"
    padding: "18px 0"
  evidence-row:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "24px 0"
  career-chapter:
    textColor: "{colors.ink}"
    typography: "{typography.chapter-title}"
    padding: "14px 0"
  contact-row:
    textColor: "{colors.ink}"
    padding: "22px 0"
---

# Design System: Ricky Choi Portfolio

## Overview

**Creative North Star: "Warm light surfaces with restrained olive"**

Ricky Choi's portfolio uses warm cream and white backgrounds with dark text. Olive identifies actions, selected controls and keyboard focus. Real Android application screens provide the imagery; thin rules and surface changes separate reading regions.

Wanted Sans carries Korean names and explanations. Uncut Sans carries English project names and compact English labels. Major headings remain within the current brief of 40–56px on desktop and 28–36px on mobile, while explanatory body text stays at 16–18px.

This scan records the October 6, 2026 local olive implementation in tokens.css, src/styles/global.css and the components rendered by src/App.tsx. The request, evidence and completed local review are recorded in docs/portfolio/olive-revision-2026-10-06.md. User aesthetic acceptance and publication are not implied.

**Key Characteristics:**

- Cream and white reading surfaces with restrained olive actions.
- Intact approved app screens with captions and original-image links.
- Project facts beside named detail links, with native disclosures for implementation reading.
- Visible keyboard focus, reduced motion and readable prerendered HTML.

## Colors

Warm light neutrals carry the reading surface. Olive supplies the only chromatic accent used by the current rendered components. The frontmatter preserves the source token names; `ink-2` and `muted` intentionally share a value but serve separate text roles.

### Primary

- **Olive (`accent`):** filled project action, text links, current navigation, selected media labels and case labels.
- **Deep Olive (`accent-strong`):** the filled project action on hover.
- **Focus Olive (`focus`):** the global visible keyboard outline.
- **Light Olive (`paper-3`):** the opening Vuddy preview surface.

### Neutral

- **Warm Cream (`paper`):** page, fixed header and alternating reading surfaces.
- **White (`paper-2`):** project-index image surfaces, alternating detail surfaces and text on the filled project action.
- **Dark Ink (`ink`):** headings, main text and default control content.
- **Secondary Ink (`ink-2`):** explanatory paragraphs and technology lists.
- **Muted Ink (`muted`):** dates, fact labels, screen captions and unselected media labels.
- **Rule (`rule`):** thin reading boundaries and separators.
- **Strong Rule (`rule-strong`):** contact boundaries, career-link underline and the existing scrollbar thumb.

**The Accent Rule.** Use olive for actions, selected states and keyboard focus. Keep page and case reading surfaces cream or white.

## Typography

**Korean and Body Font:** Wanted Sans, with a sans-serif fallback.

**English Name and Project Font:** Uncut Sans, with Wanted Sans and sans-serif fallbacks.

Both variable fonts are self-hosted from `public/fonts/`. The current rendered typography does not apply stylistic sets or use a separate monospace face; the existing utility aliases resolve to Wanted Sans.

### Hierarchy

- **Identity:** the Korean name uses the `identity` role. It becomes 36px below 700px. The accompanying English name uses Uncut Sans at 18px, becoming 15px on mobile.
- **Headline:** section headings use `headline`; project-detail headings share its size and weight with line height 1.28. These headings become 32px on their stack breakpoint.
- **Project title:** the secondary project index uses `project-title`; Vuddy uses `featured-project-title`. On mobile, all project-index titles use the smaller role.
- **Body:** `body` is the global reading baseline. The global size becomes 16px below 720px, and detail paragraphs become 16px below 760px. Detail introductions and the development-record introduction use 18px on desktop.
- **Case title:** `case-title` labels native contribution disclosures. It becomes 18px below 760px. Responsibility-group headings use 24px on desktop and 22px on mobile.
- **Action and detail labels:** `action-label` is used by the opening actions; `detail-label` is used by named project-detail links.
- **Navigation and utility labels:** `navigation-label` covers desktop header destinations. Mobile destinations use 15px. `utility-label` covers media-selection buttons, and `media-caption` covers their captions.
- **Career chapter:** `chapter-title` names linked project chapters. English dates use Uncut Sans in a smaller role.

**The Reading Voice Rule.** Keep Korean explanations in Wanted Sans. Use Uncut Sans for English names and compact English project labels.

## Layout

The shared content shell is at most 1160px and uses `width: min(100% - 48px, 1160px)`, preserving 24px gutters. The header's outer maximum is 1208px including those gutters. It is fixed during JavaScript-enhanced use, with a 76px desktop height and 68px mobile height.

The present opening uses a 1.15:0.85 two-column grid with an 80px gap, then a single column below 700px. The current project index places Vuddy across the full row, followed by AI and Momentica in two columns. Below 700px, the index uses one column. The index facts, images and named detail links are page components, not universal layout tokens.

Detail reading uses a flexible text column and a 300px image column with an 80px gap. Below 1000px, the image column becomes 260px and the gap becomes 40px. Below 760px, detail content stacks; complete screenshots are at most 280px wide and centered. Scope and explanation blocks are limited to 70ch. The case-field sequence belongs to the current project's content record in `docs/portfolio/olive-revision-2026-10-06.md`.

Career periods use a 190px desktop column and stack above the entry below 760px. General evidence rows use a 0.8:1.6 ratio and stack below 700px. Secondary work columns stack below 820px, and contact destinations stack below 650px.

The frontmatter spacing steps are the tokens actively used by the footer. Other regions retain their observed purpose-specific gaps and padding. Major detail sections use 80px vertical padding on desktop and 48px on mobile. Text actions and selectors retain at least 44px targets; the opening actions and mobile navigation use 48px targets.

## Elevation & Depth

The current rendered portfolio has no box shadows. Cream, white and light-olive surface changes provide separation, while one-pixel rules delimit reading blocks. Images remain upright and retain their source ratio; they have no added decorative glow or depth effect.

**The Flat Reading Rule.** Separate sections with surface changes and thin rules. Reading rows, controls and app images have no box shadow.

## Shapes

The recurring shapes are rectangular image surfaces, portrait screenshots and open reading rows. The filled project action has subtly rounded corners using `rounded.sm`. The focus-only skip link retains its existing `rounded.skip-link` corners. Media selection and navigation use one-pixel underlines. Contact boundaries use the strong neutral rule color. Do not apply unused larger-radius tokens from `tokens.css` to rendered reading components by default.

## Components

### Opening Actions

The filled project anchor uses olive with white text and `project-action` padding. Hover uses the deep-olive sibling variant. The GitHub action is an olive text link with an underline on hover. Both use a 48px minimum target and the global focus outline; neither introduces a shadow.

### Navigation

The fixed cream header pairs the compact English name with text destinations. The current destination is olive with a visible underline; hover reveals the same thin underline. Below 900px, a 44px square menu button controls stacked 48px links. Escape closes the menu and restores focus to its button. Following a destination closes the menu. Without JavaScript, the mobile header becomes static, the toggle is hidden and the links remain visible and wrapped.

### Project Summary

The project index uses actual screenshots, product names, service descriptions, role and period facts, technology text and a named detail link. White image surfaces have purpose-specific padding and no rounded shell. The featured title is larger than the two secondary titles on desktop. Technology names are plain text, without a separate chip component.

### Screenshot Gallery and Caption

Each screenshot keeps its complete aspect ratio and intrinsic HTML dimensions. Its caption and original-image action appear beneath it. Index and detail captions use a column layout with a 4px gap. The opening caption uses its existing two-column arrangement. Masked AI images retain the screen-mockup label.

Where multiple detail images exist, text buttons provide explicit selection with `aria-pressed`; selected text and its underline use olive. The current Momentica detail shows this pattern. Selection has no automatic rotation. Without JavaScript, selection controls are hidden and all detail images remain visible.

### Contribution Disclosure

Native `details` and `summary` reveal context, choice, implementation and boundaries when those fields have evidence. The first contribution in each responsibility group is initially open. The arrow rotates by 90 degrees when open; hover and visible focus use olive. The two AI responsibility groups retain independent headings. Detail text uses the body role rather than the previous small technical text.

### Evidence, Career and Contact Rows

General development evidence uses open two-column rows with a named topic and explanation. Project-specific tools stay inside their case reading. Career chapters use linked titles and dates, while side-project rows pair project metadata with existing descriptions. Contact destinations use a full row, account label, inline SVG icon and external-link arrow. Contact hover uses olive; all linked rows retain visible focus.

### Motion and Reading Fallback

Appearance animation is limited to the project index: opacity 0.85 to 1 and an 8px upward movement over 300ms, with 50ms sibling stagger capped at 100ms. The content starts visible, so IntersectionObserver or animation failure never gates reading. Other sections remain visible without entrance animation.

Control color and underline feedback uses 180ms with the existing ease-out curve. Screenshot hover is limited to a 1.015 image scale on hover-capable devices. The existing footer press uses a 120ms transform transition and a 1px downward movement. Reduced motion removes appearance animation and image-hover transforms, disables transitions and restores automatic scrolling. Prerendered HTML preserves styled reading, native disclosures and all eight actual screenshots without JavaScript.

The sidecar contains eight representative snippets of components rendered by the current App. There are no rendered input fields, filter chips, dialogs or standalone skill meters to document.

## Do's and Don'ts

### Do:

- **Do** preserve complete approved images, intrinsic dimensions, captions and direct original-image links.
- **Do** keep the model-development and Android responsibility groups separate, and identify the masked AI images as screen mockups.
- **Do** retain native disclosures, explicit media selection, visible keyboard focus and the readable no-JavaScript fallback.
- **Do** use the current restrained heading sizes and 16–18px explanatory body text.
- **Do** inspect current desktop and mobile renders after visual changes and follow docs/portfolio/plain-language.md before adding copy.

### Don't:

- **Don't** restore the previous red-orange accent, oversized identity lettering or dark tools reading surface.
- **Don't** replace approved screens with invented artwork, crop them to fill a vacant stage or add an unsupported app icon.
- **Don't** add shadows or rounded card shells around ordinary reading rows.
- **Don't** hide reading content behind entrance animations, intercept scrolling or require JavaScript for native disclosures.
- **Don't** infer user aesthetic acceptance or publication from a build check or a local-review disposition.
