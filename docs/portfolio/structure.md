# Portfolio structure

Current local revision prepared on 2026-10-13. [content.md](content.md) owns wording and disclosure; [DESIGN.md](../../DESIGN.md) records visual values. `src/App.tsx` owns the section order.

## Section order and presentation

1. Introduction: a two-column hero pairs a large name and blue role with three approved product screenshots. The selected resume introduction stays as two continuous paragraphs below the identity, followed by project/profile links. On mobile, the product stage sits between the identity and introduction. Each screenshot links to its project. The PDF retains its existing compact identity and profile links.
2. Career: employer and affiliation above the project rows, with role and tenure aligned to the right on desktop. Vuddy leads with the blue linked title. Each row pairs project identity with contributions. Related AI model and Android app work share one group while retaining individual dates and smaller nested titles. Mobile stacks the rows and uses an inset rule to preserve the AI group relationship.
3. Projects: all three projects use full-width articles. Identity, main message and store links precede approved product screens. Named cases follow in an open two-column grid with one core feature heading and bullets for context, action and supported results. Headers and cases stack at 760px. Technologies and one native technical-detail disclosure close each project.
4. AI usage and development tools: AI-assisted QA ticket processing and its capture, a native procedure disclosure with validation and Hook checks, planning/design-token work, role-based AI review and the Android network debugging tool. Related descriptions use two columns where space permits and stack at 1023px.
5. Side projects: Duckie and its Compose design system.
6. Open source and activities: open columns and organization-based rows.
7. Footer: a back-to-top link. The user removed the closing Interests and Contact sections on 2026-10-14. Public profile links remain in the introduction.

The introduction follows the Summary in the user's selected Dreamus resume. Career summarizes roles and tenure, and Projects present representative responsibilities and supported outcomes, with technical depth in their disclosures. Keep reasoning and supported results without repeating generic summaries. Use bullets for project context, actions and results; reserve inline emphasis for short, meaningful outcome or constraint phrases. Keep the selected introduction as prose.

## Interaction and responsive behavior

Product and tool captures retain their aspect ratios and masking. All ten images are visible without opening disclosures and link to shipped originals. Videos, if supplied, require user playback. No generated decorative illustration, simulated device interface or technical diagram is used.

The header uses the name wordmark. Its mobile menu closes on selection, Escape, outside pointer input or focus leaving the header; Escape returns focus to the trigger. Native disclosures use a plus/minus icon. Career identity remains above its project rows in normal document flow.

Project cases use one title and selectively emphasized points. Disclosures use feature headings and bullet points for supplementary mechanisms; headings retain the project/group nesting. Shared tokens own section spacing, columns and typography. Text controls have a 44px minimum target. Reduced-motion styles remove the hero entrance, pointer tilt, transitions and smooth scrolling. The hero screens fan out once on entry. Fine-pointer movement tilts the stage with damped interpolation, which stops when settled. Touch input never tilts the stage. Other sections have no viewport-triggered entrance.

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
| Public profile links and navigation | `src/data/profile.ts` |
| Shared icons | `src/components/Icon.tsx` |
| Visual values | `tokens.css`, `src/styles/`, component CSS modules |

## Verification

`npm run check` validates the selected introduction/assets, font coverage, ESLint, TypeScript and the production build. Inspect actual desktop/mobile views after visual changes, including narrow layouts and expanded disclosures. Successful checks do not establish visual acceptance or public deployment.

The current project revision was inspected at 1440px desktop and 390px mobile, with the model detail expanded at 320px. The three project summaries use visible feature headings and bullets, all eight product images loaded outside disclosures, and no horizontal page overflow was observed. Earlier menu checks confirmed Escape focus restoration. Local review artifacts are kept outside the repository.
