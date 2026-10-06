# Current portfolio structure

The latest October 6 career-emphasis revision applies the user's Toss UI and UX reference, updated factual introduction and project contribution hierarchy. Previous local visual proposals are historical references. The public GitHub Pages site remains unchanged until deployment.

## Reading order

1. Choi Sangrok, Ricky Choi and Android role, two factual introduction sentences, the approved Vuddy reply-chat screenshot and project/GitHub actions. The Android responsibility sentence leads; the model/app/QA sentence supplements it. On mobile the supplemental sentence follows the screen.
2. Project index: Vuddy occupies the full row; AI character app and Momentica share a desktop row and stack on mobile. Show service, contribution and periods, then a short technology selection and detail link.
3. Project details: service, role and periods, responsibility and collaboration, then native contribution disclosures. Each disclosure exposes existing situation and choice evidence, implementation, independently labeled verification when documented, and any documented boundary. Missing fields are omitted.
4. Relevant additional work stays inside projects: Vuddy design-token automation, AI model serving/web MVP, SSE inspection and shared planning/design documents.
5. General QA/verification records, compact career dates and project links, side projects, open source, activities and contact.

## Image allocation

No screenshot is repeated in the hero, index and detail within the same project.

| Location | Vuddy | AI character app | Momentica |
|---|---|---|---|
| Hero | Reply chat | — | — |
| Project index | Home | Chat list (masked mockup) | Take home |
| Detail | Digital card | Character chat (masked mockup) | 3D photocard, alarm |

Images retain original proportions and intrinsic dimensions. Every figure has a caption and a link to the original approved file. The opening image reaches 252px desktop and 244px mobile. Detail portraits reach 310px desktop and 280px mobile. The two Momentica detail screens use explicit selection; there is no automatic rotation. App-specific icons are absent and are not fabricated.

## Layout, type and motion

The main content is at most 1160px with 24px mobile reading gutters. The opening uses a broader 1360px rounded gray stage. Project introductions and responsibility form one centered desktop column beside an intact portrait screen; narrower native contribution disclosures follow below with a maximum width of 840px. Mobile stacks the heading, screen, responsibility and detail. White and pale cool gray surfaces use accessible blue actions and selected states. Controls have 12px corners, with 24–40px corners reserved for the large image stages. Reading paragraphs retain open layouts. Wanted Sans remains the Korean face, with existing self-hosted Uncut Sans used sparingly for English names. Major headings are 40–56px desktop and 32–36px mobile; reading paragraphs are 16–18px with 1.7–1.72 line height.

The opening copy and reply-chat image, and project-index items, enter once using opacity .85 to 1 and translateY 8px to 0 over 300ms. Siblings have at most 50ms spacing, capped at 100ms total delay. Controls transition color/underline over 180ms. Image-only hover scale is 1.015 and never changes surrounding layout. Disclosure opening and explicit image selection use 180ms opacity feedback. Reduced motion removes movement and appearance effects. The entrance hook expands a mobile display:contents wrapper into rendered child boxes so its motion remains functional.

## Progressive enhancement

Vite's installed Preact preset prerenders the same App into #root. Preact hydrates it in the browser. Content is visible by default; IntersectionObserver never gates reading. Without JavaScript all approved detail images remain visible, native disclosures work and section/original-image links still work. The mobile navigation falls back to visible links in a static header. With JavaScript the compact menu handles Escape/refocus and the reading section gets blue text on a small gray navigation surface. The home link also closes the expanded menu.

## Ownership

projects.ts preserves approved implementation claims and approved media. projectReading.ts adds evidence-backed context, role, periods and display allocation. workEvidence.ts owns development-tool claims shared by project details and the smaller general record. DESIGN.md and .impeccable/design.json document the final implementation. Apply plain-language.md before new copy.
