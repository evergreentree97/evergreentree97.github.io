# Portfolio structure

Current version approved by the user on 2026-10-13. [content.md](content.md) owns wording and disclosure; [DESIGN.md](../../DESIGN.md) records visual values. `src/App.tsx` owns the section order.

## Section order and presentation

1. Introduction: name and role, the selected opening sentence, project/profile links and both complete narrative paragraphs. Two body columns on desktop, one on mobile.
2. Career: employer, role and tenure with project responsibilities. Related AI model and Android app work share one group while retaining individual dates.
3. Projects: Vuddy is full width; the AI model/app and Momentica follow in two columns, stacking at 860px. Approved product screens precede identity, contribution bullets, technologies and one native development disclosure.
4. AI usage and development tools: QA-ticket harness and its capture, a native procedure disclosure with validation and Hook checks, planning/design-token work, multi-agent review and Ricky Inspector. Related descriptions use two columns where space permits and stack at 1023px.
5. Side projects: Duckie and its Compose design system.
6. Open source and activities: open columns and organization-based rows.
7. Interests: a compact text aside.
8. Contact and footer: public profile destinations and a back-to-top link.

The introduction explains perspective and motivation, Career summarizes roles and tenure, and Projects provide technical depth. Keep reasoning and supported results without repeating generic summaries. Use bullets for distinct responsibilities and prose for related reasoning.

## Interaction and responsive behavior

Product and tool captures retain their aspect ratios and masking. All ten images are visible without opening disclosures and link to shipped originals. Videos, if supplied, require user playback. No generated decorative illustration, simulated device interface or technical diagram is used.

The header uses the name wordmark. Its mobile menu closes on selection, Escape, outside pointer input or focus leaving the header; Escape returns focus to the trigger. Native disclosures use a plus/minus icon. Career identity is sticky only at sufficiently large desktop sizes with reduced motion off.

Shared tokens own section spacing, columns and typography. Text controls have a 44px minimum target. Reduced-motion styles remove the short hero entrance, transitions and smooth scrolling. Other sections have no viewport-triggered entrance.

## Ownership

| Subject | Source |
| --- | --- |
| Introduction | `src/components/Hero.tsx` |
| Career | `src/data/experience.ts`, `src/components/Experience.tsx` |
| Projects | `src/data/projects.ts`, `src/components/Projects.tsx`, `src/components/ProjectScene.tsx` |
| AI workflows and tools | `src/components/HowIWork.tsx` |
| Side projects | `src/data/sideProjects.ts` |
| Open source | `src/data/projects.ts`, `src/components/MoreWork.tsx` |
| Activities | `src/data/activities.ts`, `src/components/Activities.tsx` |
| Interests and navigation | `src/data/profile.ts` |
| Contact | `src/components/Contact.tsx` |
| Shared icons | `src/components/Icon.tsx` |
| Visual values | `tokens.css`, `src/styles/`, component CSS modules |

## Verification

`npm run check` validates the selected introduction/assets, font coverage, ESLint, TypeScript and the production build. Inspect actual desktop/mobile views after visual changes, including narrow layouts and expanded disclosures. Successful checks do not establish visual acceptance or public deployment.

The release preparation inspected 1440px desktop, 390px mobile, 320px expanded model detail and 743px compact views. Images loaded, text fit, disclosure icons reflected state, and menu Escape restored focus. Local review artifacts are kept outside the repository.
