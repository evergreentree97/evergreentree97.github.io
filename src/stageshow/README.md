# Stageshow kit subset

A copy, in `kit/`, of the parts of the Stageshow React kit (MIT, see `LICENSE`) that the project demos in `src/components/demos/` use: the stage and its script runner, the Android phone frame, the terminal window, `Avatar`, `Bar`, `Stream`, `Collapse` and `Chart`. Files are unchanged from the kit except for this README and one unused `useLayoutEffect` import removed from `phone.tsx` for the project's TypeScript settings. The demos load in their own chunks, so the kit is not part of the initial bundle.

Update by copying the same files from a newer kit; do not restyle kit parts here. Demo styles belong to each demo's CSS file.
