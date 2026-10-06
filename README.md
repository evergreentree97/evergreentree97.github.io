# Choi Sangrok Portfolio

Public Android portfolio for [evergreentree97.github.io](https://evergreentree97.github.io/), built with Preact, TypeScript and Vite. Career facts and image permissions start at [docs/portfolio/README.md](docs/portfolio/README.md).

## Local development

Use Node.js 22 or later.

```bash
npm ci
npm run dev
```

## Validation and preview

```bash
npm run check
npm run preview
```

The check command validates public facts and asset approvals, known copy regressions, lint, TypeScript and the production build. Vite's Preact preset prerenders the same App into HTML, then the browser hydrates it. Test the production preview for the no-JavaScript fallback; the development server renders on the client.

## Deployment

GitHub Actions checks and builds updates to main, then deploys dist to GitHub Pages. Generated build output and review captures stay untracked. A local redesign does not publish the live site.
