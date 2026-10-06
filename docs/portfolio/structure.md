# Current portfolio structure

The October 6 olive revision follows the user's explicit seven-part brief. Previous local visual proposals are historical references. The public GitHub Pages site remains unchanged until deployment.

## Reading order

1. Choi Sangrok, Ricky Choi and Android role, two factual introduction sentences, a real Vuddy home screenshot and project/GitHub actions.
2. Project index: Vuddy occupies the full row; AI character app and Momentica share a desktop row and stack on mobile. Show service, contribution and periods, then a short technology selection and detail link.
3. Project details: service, role and periods, responsibility and collaboration, then native contribution disclosures. Each disclosure exposes existing situation and choice evidence, the preserved implementation claim and any documented boundary. Missing fields are omitted.
4. Relevant additional work stays inside projects: Vuddy design-token automation, AI model serving/web MVP, SSE inspection and shared planning/design documents.
5. Compact career dates and project links, general QA/verification records, side projects, open source, activities and contact.

## Image allocation

No screenshot is repeated in the hero, index and detail within the same project.

| Location | Vuddy | AI character app | Momentica |
|---|---|---|---|
| Hero | Home | — | — |
| Project index | Digital card | Chat list (masked mockup) | Take home |
| Detail | Reply chat | Character chat (masked mockup) | 3D photocard, alarm |

Images retain original proportions and intrinsic dimensions. Every figure has a caption and a link to the original approved file. Detail portraits reach 300px desktop and 280px mobile. The two Momentica detail screens use explicit selection; there is no automatic rotation. App-specific icons are absent and are not fabricated.

## Layout, type and motion

Content is at most 1160px with 24px mobile gutters. Long case text is narrower and sits beside an intact portrait screen on desktop; mobile stacks context, screen and detail. The palette is warm white with olive links and selected states. Wanted Sans remains the Korean face, with existing self-hosted Uncut Sans used sparingly for English names. Major headings are 40–56px desktop and 32–36px mobile; reading paragraphs are 16–18px with 1.7–1.72 line height.

Project-index items enter once using opacity .85 to 1 and translateY 8px to 0 over 300ms. Siblings have at most 50ms spacing, capped at 100ms total delay. Controls transition color/underline over 180ms. Image-only hover scale is 1.015 and never changes surrounding layout. Reduced motion removes movement and appearance effects.

## Progressive enhancement

Vite's installed Preact preset prerenders the same App into #root. Preact hydrates it in the browser. Content is visible by default; IntersectionObserver never gates reading. Without JavaScript all approved detail images remain visible, native disclosures work and section/original-image links still work. The mobile navigation falls back to visible links in a static header. With JavaScript the compact menu handles Escape/refocus and the reading section gets an olive underline.

## Ownership

projects.ts preserves approved implementation claims and approved media. projectReading.ts adds evidence-backed context, role, periods and display allocation. workEvidence.ts owns development-tool claims shared by project details and the smaller general record. DESIGN.md and .impeccable/design.json document the final implementation. Apply plain-language.md before new copy.
