---
name: Ricky Choi Portfolio
description: A provisional personal editorial portfolio with approved product screens and technical reading rows.
colors:
  paper: "#f7f7f5"
  ink: "#181818"
  ink-secondary: "#484844"
  muted: "#62625d"
  rule: "#d0d0c8"
  rule-strong: "#9a9a91"
  accent: "#c63819"
  focus: "#be3215"
  hero-surface: "#202020"
  ai-paper: "#e8e8e3"
  tools-surface: "#191919"
  tools-rule: "#4d4d48"
  tools-muted: "#c5c5bd"
  white: "#fff"
typography:
  identity:
    fontFamily: "Uncut Sans, Wanted Sans, sans-serif"
    fontSize: "clamp(64px, 7.5vw, 96px)"
    fontWeight: 650
    lineHeight: 0.95
    letterSpacing: "-.03em"
    fontFeature: "'ss01' 1, 'ss02' 1"
  product-title:
    fontFamily: "Uncut Sans, Wanted Sans, sans-serif"
    fontSize: "clamp(46px, 6vw, 80px)"
    fontWeight: 620
    lineHeight: 1
    letterSpacing: "-.025em"
    fontFeature: "'ss01' 1"
  section-title:
    fontFamily: "Wanted Sans, sans-serif"
    fontSize: "clamp(28px, 3.5vw, 42px)"
    fontWeight: 550
    lineHeight: 1.25
    letterSpacing: "-.02em"
  body:
    fontFamily: "Wanted Sans, sans-serif"
    fontSize: "17px"
    fontWeight: 440
    lineHeight: 1.72
  technical-body:
    fontFamily: "Wanted Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 440
    lineHeight: 1.85
  contribution-title:
    fontFamily: "Wanted Sans, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.45
  work-link:
    fontFamily: "Uncut Sans, Wanted Sans, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.2
  navigation-label:
    fontFamily: "Wanted Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.72
  media-label:
    fontFamily: "Uncut Sans, Wanted Sans, sans-serif"
    fontSize: "11px"
    fontWeight: 550
    lineHeight: 1.72
  chapter-title:
    fontFamily: "Wanted Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 550
    lineHeight: 1.72
rounded:
  skip-link: "10px"
spacing:
  xs: ".5rem"
  lg: "1.5rem"
  xl: "2.5rem"
  2xl: "4rem"
components:
  navigation:
    textColor: "{colors.ink}"
    typography: "{typography.navigation-label}"
  work-index:
    textColor: "{colors.ink}"
    typography: "{typography.work-link}"
    padding: "15px 0"
  media-selector:
    textColor: "{colors.muted}"
    typography: "{typography.media-label}"
    padding: "8px 0"
  media-selector-selected:
    textColor: "{colors.ink}"
    typography: "{typography.media-label}"
    padding: "8px 0"
  contribution:
    textColor: "{colors.ink}"
    typography: "{typography.contribution-title}"
    padding: "16px 0"
  tools-evidence:
    backgroundColor: "{colors.tools-surface}"
    textColor: "{colors.paper}"
    padding: "26px 0"
  career-chapter:
    textColor: "{colors.ink}"
    typography: "{typography.chapter-title}"
    padding: "14px 0"
  side-project-row:
    textColor: "{colors.ink}"
    padding: "28px 0"
  contact-row:
    textColor: "{colors.ink}"
    padding: "22px 0"
---

# Design System: Ricky Choi Portfolio

## Overview

**Creative North Star: "Personal Editorial Portfolio"**

The personal editorial portfolio gives Ricky Choi's name, actual product screens and verified responsibilities the largest visual roles. Uncut Sans lettering, Wanted Sans Korean text, paper surfaces and one red-orange accent define the current local implementation. Thin rules separate contributions, dates and destinations without enclosing each item in a card.

The user rejected the earlier generic headline, conventional typography and pastel exhibition. This record replaces that discarded world. It describes the October 6, 2026 local replacement and remains provisional until the user reviews it. PRODUCT.md and docs/portfolio/content.md continue to govern identity, claims and approved assets.

**Key Characteristics:**

- Named identity and approved product screens in an asymmetric opening.
- Open project spreads with intact portrait media and native contribution disclosures.
- Separate model-development and Android responsibilities in the AI case.
- Dark tools reading section, compact career dates and flat secondary-work rows.

Local finish evidence: all `npm run check` gates passed. Responsive inspection at 320px, 390px, 1280px and 1440px found no horizontal overflow; the actual self-hosted fonts loaded. Disclosures, media selection, mobile Escape focus restoration and reduced motion passed the final interaction inspection. The independent final verdict was **SHIP for local review** after its four composition findings were resolved. This is not a record of user aesthetic approval or deployment.

Current captures: `.impeccable/review/replacement/desktop-hero.png` (1440 x 960), `desktop.png` (1440 x 8162), `mobile-hero.png` (390 x 844) and `mobile.png` (390 x 11305), with readable crops in the same directory. Token sources are `tokens.css`, `src/styles/global.css` and the current component styles. The frontmatter is normative; the sidecar records extensions and representative snippets.

## Colors

Neutral paper and charcoal ink carry the reading surfaces; red-orange supplies the single accent.

### Primary

- **Red-orange Accent:** the second line of the name, identity punctuation, link feedback and interest icons.
- **Focus Red-orange:** the global visible keyboard outline.

### Neutral

- **Paper:** page, fixed header and primary project surfaces.
- **Ink:** headings, contribution titles, arrows and selected media labels.
- **Secondary Ink:** introductions, project context and technical explanation.
- **Muted:** screen captions, dates, metadata and unselected media labels.
- **Rule** and **Strong Rule:** section boundaries and contact destinations.
- **Hero Charcoal:** the opening composition of approved Vuddy home and chat images.
- **AI Paper:** the slightly darker neutral surface behind the reversed AI case.
- **Tools Charcoal**, **Tools Rule** and **Tools Muted:** the dark development-tools reading section and its evidence rows.
- **White:** the link on the opening charcoal media panel and video-action text when video media is used.

**The Accent Rule.** Use red-orange for the identity mark, selected link feedback and keyboard focus. Keep project reading surfaces neutral.

## Typography

**Display Font:** Uncut Sans, with Wanted Sans and sans-serif fallbacks.

**Body Font:** Wanted Sans, with a sans-serif fallback. Utility labels and the legacy mono aliases use Wanted Sans; the current page has no separate monospace face.

Both variable fonts are self-hosted from their official repositories with OFL licenses in `public/fonts/`. The name uses Uncut Sans stylistic sets ss01 and ss02; English product headings use ss01. Wanted Sans carries Korean paragraphs and the longer AI project heading.

### Hierarchy

- **Identity:** the large two-line name; mobile uses `clamp(62px, 16vw, 86px)` with line height `.98`.
- **Product title:** Vuddy and Momentica lettering; mobile uses 54px. The Korean AI title uses Wanted Sans, weight 600, `clamp(30px, 3.8vw, 48px)` and line height 1.3, becoming 32px on mobile.
- **Section title:** tools, career and secondary reading headings; below 540px it becomes 27px.
- **Body:** the global baseline becomes 16px below 720px. The opening introduction uses 15px and a 44ch maximum, becoming 14px on mobile.
- **Technical body:** disclosure and tools explanation uses the frontmatter's smaller reading role. Tools paragraphs have a 65ch maximum.
- **Contribution title:** compact headings in expandable rows, with separate 19px group headings for the AI responsibilities.
- **Work link, navigation label and media label:** product links, fixed-header destinations and screen-selection controls.

**The Reading Voice Rule.** Keep Korean explanations in Wanted Sans. Use Uncut Sans for the English identity, product names and compact project metadata.

## Layout

The opening uses a two-column grid within 1440px, with 56px desktop gutters and a fluid 40px to 96px gap. The identity sits at left; two rotated approved Vuddy screens and three project anchor rows sit at right. Below 700px the opening stacks with 24px gutters. Introduction, media and project links keep that reading order.

Project spreads use a 1216px maximum inner grid. Vuddy and Momentica place media left and technical reading right in a .85:1.15 ratio, with headings across the spread. The AI case reverses the columns and uses a 1.15:.85 ratio. Its model-development and Android groups remain independent. At 760px and below, every case uses one column: project context, media, contribution groups and project metadata.

Case images retain their complete original ratio and use up to 330px width on desktop and 300px on mobile. Captions share the image width. There is no fixed vacant media stage around case images. Conditional sticky media requires at least 1024px viewport width and 800px height, a media block that fits the viewport, and no reduced-motion preference.

The tools section spans the dark surface while its content follows the 1216px reading alignment. Career and footer shells are at most 1328px including gutters. Career dates occupy a 190px column on desktop and stack above the organization below 760px. Secondary work uses two columns until 820px; side-project rows stack below 760px. Gutters step to 32px below 1000px and 24px on mobile.

The spacing tokens are the actual reused footer steps. Component layouts retain their observed purpose-specific padding rather than forcing one scale onto every region. Controls use at least 44px targets where implemented; mobile navigation rows use 48px.

## Elevation & Depth

Reading surfaces, rows and controls are flat. Neutral surface changes and thin rules separate sections. The opening Vuddy chat screen has the only decorative screen shadow (`0 12px 30px #0004`); case images receive no shadow or outer staged container.

**The Flat Reading Rule.** Keep reading rows and controls flat. Reserve the existing screen shadow for the opening Vuddy composition.

Motion remains local: a short clip reveal on media changes, arrow feedback on project links and disclosures, and a navigation underline. Reduced motion removes those local transitions and the media reveal, disables smooth scrolling and prevents media stickiness. Content is visible without an entrance-animation gate.

## Shapes

The page uses rectangular surfaces, intact portrait screens and open horizontal rules. Media labels use a one-pixel underline for selection. Contact rows have top and bottom rules. The fixed header and mobile menu remain paper surfaces. The focus-only skip link retains its existing rounded corners; its radius is the sole rounded token extracted for the rendered page.

## Components

### Navigation

A fixed paper header pairs the compact name with text destinations. Hover and current-section states reveal a thin underline. Below 900px a square 44px menu control opens stacked 48px links. Escape closes the menu and restores focus to the control; following a section link closes it.

### Work Index

Three open rows pair the project name, concrete responsibility label and arrow. Hover changes the name to the accent and moves the arrow. Each anchor leads directly to its project section.

### Media Selector and Caption

Text buttons show the caption's English feature name. The selected label has ink text and a thin underline; `aria-pressed` records selection. Selection is explicit, with no automatic rotation. The complete approved image appears below, followed by its caption and original-image link. AI captions additionally identify screen mockups and name masking.

### Contribution Disclosure

Native `details` and `summary` preserve each implementation claim. The arrow rotates when open, and the summary changes to the accent on hover. The first contribution in each responsibility group is initially open. The AI case uses group headings and h4 contribution titles; the other cases use h3 contribution titles.

### Tools Evidence Row

A dark two-column row places the named tool or verification topic beside its factual explanation. It stacks below 700px. These are independent evidence items, not an invented sequence of development steps.

### Career Chapter and Side Project Row

Career chapters pair compact dates with linked project titles, without repeating the case descriptions. Side projects use open two-column rows with name and period at left and approved work at right; mobile stacks the row. Neither pattern needs a card shell.

### Contact Row

GitHub and LinkedIn are full-row destinations with an icon, destination name, account label and external-link arrow. Hover uses the accent; keyboard focus uses the global ring. The two rows stack below 650px.

The sidecar includes eight actual representative component snippets. The current portfolio has no input fields, filled primary CTA or standalone filter-chip pattern to document.

## Do's and Don'ts

### Do:

- **Do** preserve complete approved images, their captions and direct original-image links.
- **Do** keep the two AI responsibility groups separate and identify the masked images as mockups.
- **Do** retain native disclosures, visible keyboard focus and explicit media selection.
- **Do** inspect current desktop and mobile renders after a visual change and apply plain-language.md before adding copy.

### Don't:

- **Don't** restore the generic engineer headline, pastel exhibition walls or centered three-screen showcase.
- **Don't** crop case images to fill a fixed vacant stage or replace approved screens with invented artwork.
- **Don't** add rounded or elevated shells around ordinary reading rows.
- **Don't** infer user aesthetic approval or deployment from a technical check or independent local-review verdict.
