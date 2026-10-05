---
name: Choi Sangrok Portfolio
description: A provisional digital engineering exhibition built around actual product screens.
colors:
  paper: "#f4f5f1"
  ink: "#152238"
  ink-secondary: "#3c4d5e"
  muted: "#526273"
  rule: "#c5cec9"
  rule-strong: "#7c8a92"
  accent: "#273f7c"
  focus: "#2447ab"
  white: "#fff"
  periwinkle-wall: "#aebbf3"
  sage-wall: "#bed5c7"
  lilac-wall: "#d3c8e8"
  periwinkle-reading: "#e7ebf8"
  sage-reading: "#e0ebe2"
  lilac-reading: "#ece7f3"
  method-surface: "#e1e6d9"
typography:
  exhibit:
    fontFamily: "Barlow Condensed, Pretendard Variable, sans-serif"
    fontSize: "clamp(4rem, 7vw, 5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-.025em"
  introduction:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "clamp(1.7rem, 3vw, 2.5rem)"
    fontWeight: 760
    lineHeight: 1.16
    letterSpacing: "-.035em"
  section:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "clamp(2.5rem, 4vw, 3rem)"
    fontWeight: 760
    lineHeight: 1.05
    letterSpacing: "-.035em"
  body:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "17px"
    fontWeight: 440
    lineHeight: 1.72
  contribution-title:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "16px"
    fontWeight: 650
    lineHeight: 1.45
  tab:
    fontFamily: "Pretendard Variable, Pretendard, sans-serif"
    fontSize: "14px"
rounded:
  control: "2px"
  menu: "4px"
  screen: "9px"
  circle: "50%"
spacing:
  xs: ".5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.5rem"
  2xl: "4rem"
components:
  project-tab:
    typography: "{typography.tab}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
    height: "44px"
  project-tab-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.tab}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
    height: "44px"
  menu-button:
    textColor: "{colors.ink}"
    rounded: "{rounded.menu}"
    width: "44px"
    height: "44px"
  contribution:
    textColor: "{colors.ink}"
    typography: "{typography.contribution-title}"
    padding: "14px 0"
  side-project-card:
    textColor: "{colors.ink}"
    padding: "25px 24px 28px"
---

# Design System: Choi Sangrok Portfolio

## Overview

**Creative North Star: "The Digital Engineering Exhibition"**

Actual product screens are the exhibits. Compressed English product lettering and colored walls give the work a recognizable frame; Korean technical writing has a quiet, spacious reading surface. Thin rules and rectangular controls support inspection rather than compete with the screenshots.

This document captures the implemented local proposal on October 6, 2026. It is provisional visual guidance, not a user-approved brand or a deployed release. Public evidence boundaries in PRODUCT.md and the portfolio content guide continue to govern claims and assets.

**Key Characteristics:**

- Actual product screens as the primary visual material.
- Periwinkle, sage and lilac exhibition walls paired with lighter reading surfaces.
- Compressed product lettering with clear Pretendard Korean text.
- Flat catalog controls, ruled contribution lists and selective motion.

## Colors

Muted exhibition colors sit behind dark ink, with cooler blue reserved for links, hover feedback and focus.

### Primary

- **Ink:** headings, selected controls, arrows and the identity mark.
- **Catalog Blue:** links and contribution hover feedback.
- **Focus Blue:** the global keyboard outline.

### Secondary

- **Periwinkle Wall:** Vuddy exhibition; its lighter reading surface continues the project context.
- **Sage Wall:** character AI exhibition; its lighter reading surface supports the AI case.
- **Lilac Wall:** Momentica exhibition; its lighter reading surface supports the interaction case.

### Neutral

- **Paper:** page, header and career reading space.
- **Secondary Ink** and **Muted:** supporting copy, captions and footer metadata.
- **Rule** and **Strong Rule:** quiet section boundaries and interactive contribution rows.
- **White:** selected-control text.
- **Method Surface:** the subdued green background behind the working-method section.

**The Exhibit Context Rule.** Wall colors identify the selected project and its reading context; control selection remains ink with white text.

## Typography

**Display Font:** Barlow Condensed, falling back to Pretendard Variable and sans-serif.

**Body Font:** Pretendard Variable, Pretendard and sans-serif. Utility labels use the same family; the legacy mono aliases do not introduce a monospace face.

Barlow Condensed gives product names a compact exhibition silhouette. Pretendard carries Korean headings, explanations and navigation without forcing English display styling onto technical prose.

- **Exhibit:** uppercase product names above screenshots; decorative lettering is hidden from assistive technology.
- **Introduction:** the short personal statement, reduced to 25px on narrow screens.
- **Section:** strong reading-section titles, reduced to a 1.75rem to 2rem clamp below 720px.
- **Body:** the global reading baseline, reduced to 16px below 720px. Case descriptions use 15px to 16px with generous line height and a 65ch maximum where implemented.
- **Contribution Title:** the compact heading inside an expandable technical row.
- **Tab:** restrained project controls, reduced to 13px on mobile.

**The Reading Voice Rule.** Use the exhibit face for product lettering. Keep Korean explanations and controls in Pretendard.

## Layout

The exhibition is framed within a maximum width of 1600px with 32px desktop gutters. The main reading grid is 1120px wide; career and footer shells are 1184px including their 32px gutters. Working-method copy shares the reading alignment.

Project cases use a two-column copy/media grid with a 1.2:1 ratio and a fluid gap. Below 850px they stack into one column. The media column becomes sticky only when the viewport is at least 1024px wide and 800px tall, the media fits, and reduced motion is not requested. Career cards and secondary sections stack below 820px.

Below 700px, the exhibition shows the featured screen alone, stacks the selector and case link, and uses 16px outer gutters. Reading shells use 20px gutters. The header switches to its mobile menu below 900px. Keep controls at their implemented 44px minimum target height, with 48px mobile navigation rows.

The spacing scale supports repeated gaps, but section padding remains purpose-specific. Preserve breathing room around screens and 65ch case prose rather than compressing every region into equal cards.

## Elevation & Depth

The system is flat except for exhibition screenshots. Their soft shadow (`0 16px 28px rgba(20, 31, 57, .17)`) separates the actual product from the colored wall. Reading sections, cards and controls use tone or thin rules instead of elevation. The biography disclosure overlays a bordered paper panel without a shadow.

The project change uses a short mask reveal and wall-color transition. Media changes enter with a small upward displacement. Navigation underlines and arrows provide local feedback. Reduced motion removes these specific animations and transitions; the global fallback caps remaining motion at 150ms and disables smooth scrolling.

**The Specimen Depth Rule.** Preserve the screenshot shadow as a specimen treatment; ordinary reading cards remain flat.

## Shapes

The dominant geometry is rectangular: uninterrupted project walls, squared reading cards and ruled lists. Tabs have barely softened control corners. The mobile menu button is lightly rounded; exhibition screenshots retain a modest corner radius. The circular identity mark and timeline markers are existing exceptions, not a general pill treatment.

## Components

### Project Controls

Project tabs use a transparent default, an ink selected state and an ink hover border. ArrowLeft, ArrowRight, Home and End select and focus a tab through roving tabIndex. The case link points directly to the selected project and moves its arrow on hover. Media selectors repeat the ink-selected pattern with compact labels and aria-pressed.

### Navigation

A fixed paper header has a thin bottom rule. Links reveal an underline on hover and for the current section. Mobile navigation opens as a bordered paper panel; Escape closes it and returns focus to the menu button. The skip link becomes visible on focus.

### Contribution Disclosure

Native details rows pair a compact title with an arrow. Strong rules divide the rows, hover changes the summary to Catalog Blue, and opening rotates the arrow. The first contribution in each group starts open. Keep the complete public contribution record accessible through these rows.

### Media and Containers

Exhibition images use contain sizing to preserve the complete screen. Case media sits on a subtly tinted stage with a caption and selector. Video has an explicit play/pause control and does not autoplay. Side-project cards are flat, bordered rectangles with 24px horizontal padding; working-method evidence uses ruled rows instead of cards.

### Contact Links

Contact choices are full ruled rows with an icon, stacked label and destination, and a trailing external arrow. They form two columns on desktop and one column below 650px. Hover uses Catalog Blue; keyboard focus uses the global outline.

## Do's and Don'ts

### Do:

- **Do** preserve intact approved screens and their readable captions.
- **Do** keep project selection visible through ink and white contrast, independently of wall color.
- **Do** preserve native disclosures, keyboard tab selection and visible focus.
- **Do** keep motion tied to selection or direct interaction and honor reduced motion.

### Don't:

- **Don't** replace real product screens with invented interface imagery or performance metrics.
- **Don't** extend Barlow Condensed into Korean reading text.
- **Don't** add shadows or rounded shells to ordinary reading cards.
- **Don't** treat this local proposal as an approved identity or deployed release.
