# Performance implementation

Performance changes preserve the selected copy, layout, original-image links, navigation thresholds, disclosure behavior and motion values.

## Initial rendering

The installed Preact Vite preset prerenders `src/App.tsx` into `#root` using the build-only `src/prerender.tsx` entry. The browser hydrates that HTML through `src/main.tsx`; local development still renders an empty root normally. Static HTML exposes text, anchors and image sources without waiting for JavaScript execution. Server rendering is not bundled into the browser entry.

The regular body font and semibold name font are preloaded. Other font weights load through the existing self-hosted subset and `font-display: swap`. Hero images remain eager, with high fetch priority only on the central Vuddy image. Below-the-fold images keep native lazy loading and use asynchronous decoding.

## Lossless image delivery

`OptimizedImage.tsx` uses a WebP source when `src/data/imageSources.json` contains a smaller lossless encoding. The existing image remains the fallback and the destination of original-image links. Intrinsic dimensions, alpha channels and decoded pixels are unchanged. JPEG files remain in their original format when lossless conversion would increase their size.

Run `npm run optimize:images` after changing an approved source image. The script selects the currently used product and tooling images, verifies identical RGBA pixels and dimensions, and writes content-hashed WebP files into `public/optimized/`. Commit those files and the generated source map together. Do not edit the optimized files manually. `npm run check:images` checks the hashes, dimensions, pixel equality and file-size benefit against the originals.

## Frame and layout work

`attachHeroMotion` retains the original tilt range, 0.09 interpolation, settling threshold and pointer/media conditions. Pointer events retain only the newest coordinates; a scheduled animation frame reads stage geometry once before writing its transform. Pointer leave clears pending coordinates, preference changes cancel frame work, and cleanup removes listeners.

`useActiveSection` retains the viewport's 35% reading line and the 2px bottom threshold. It caches section positions until a main-content, navigation-section or viewport resize invalidates them, including changes from disclosure expansion and font loading. Browsers without ResizeObserver retain per-scroll measurements. The active state updates only when its value changes.

Section heights are not estimated or replaced with containment placeholders. Native page scrolling, anchor navigation and browser find continue to operate on the full document.

## Verification

`npm run check` includes source-content and font checks, lossless-image checks, frame/navigation regression tests, lint, the prerendered production build and build-contract checks. The build check verifies the existing anchors, image count, initial disclosure/menu states and a 28KB gzip budget for the initial browser modules, including module preloads.

Compare browser text, headings, links, image dimensions and page geometry with the prior release. Inspect desktop and narrow mobile layouts, native disclosures, menu dismissal/focus restoration, hero links and pointer motion against a production preview. Local review captures remain outside the repository. File-size savings are not a measured LCP or INP improvement.
