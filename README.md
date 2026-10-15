# Choi Sangrok Portfolio

Public portfolio deployed to [evergreentree97.github.io](https://evergreentree97.github.io/).

## Local development

Node.js 22 or later is recommended.

```bash
npm install
npm run dev
```

Run the repository checks after changes:

```bash
npm run check
```

The checks include lossless-image integrity, frame/navigation regression tests and the prerendered production build. Use `npm run optimize:images` after replacing an approved source image; commit the optimized files and source map together. [Performance implementation](docs/portfolio/performance.md) documents the rendering and interaction constraints.

Start portfolio work with [docs/portfolio/README.md](docs/portfolio/README.md). It routes to current content, disclosure and implementation guidance.

## Deployment

Updates to `main` trigger GitHub Actions to check, build and deploy to GitHub Pages. A local build or preview does not deploy the site.
