# Sangita Giri — portfolio

Executive portfolio for Sangita Giri, Product & Transformation Leader.
Live at **https://sangitagiri29.github.io/whoami/** (GitHub Pages, served from the `main` branch root).

## How it is built

A static site with no framework and no runtime dependencies.

| Path | Purpose |
| --- | --- |
| `content/portfolio.mjs` | **All copy and data** (hero, snapshot stats, case studies, career journey, credentials, contact, SEO). Edit this file to change the site. |
| `scripts/build.mjs` | Renders `index.html` and `404.html` from the content file. Zero dependencies. |
| `scripts/generate-assets.mjs` | Regenerates the favicon set, the Open Graph image (`assets/img/og-image.png`) and the resume PDF (`assets/resume/Sangita-Giri-Resume.pdf`) from the same content. Needs Playwright's Chromium. |
| `scripts/check.mjs` | Verifies that the built pages are up to date, every local link and asset resolves, every image has alt text, heading levels do not skip, and no de-emphasised or confidential content slipped in. Also checks external links unless `--no-network` is passed. |
| `assets/css/styles.css` | The design system: tokens, components, responsive rules, reduced-motion and print styles. |
| `assets/js/main.js` | Progressive enhancement only: mobile menu, current-section highlighting, in-page contact form submission. The site works without it. |
| `assets/fonts/` | Self-hosted Fraunces and Inter (latin subset, variable, SIL Open Font License). |
| `assets/img/` | Optimised portrait, employer logos, favicons and the OG image. |
| `docs/AUDIT.md` | Audit of the previous site and the decisions behind the redesign. |

## Editing the site

```bash
# 1. Edit content/portfolio.mjs (or the CSS)
# 2. Rebuild the pages
npm run build
# 3. Optional: regenerate favicons, OG image and the resume PDF
npm run assets
# 4. Verify
npm run check          # or: node scripts/check.mjs --no-network
# 5. Preview locally
npm run serve          # then open http://127.0.0.1:8080/
```

Commit the regenerated `index.html` and `404.html` together with your content change; GitHub Pages publishes whatever is on `main`.

### Replacing the resume

Drop your own PDF at `assets/resume/Sangita-Giri-Resume.pdf` (same name) and commit it. The generated one is a two-page summary built from the site content; a full resume is a better download for recruiters.

## Deployment

GitHub Pages, branch deployment from `main` at the repository root. There is no build step on GitHub: the committed `index.html` is what is served. All asset paths are relative, so the site works at the `/whoami/` base path without configuration. Requests for unknown paths under `/whoami/` get `404.html`.

## Content rules

- No invented metrics. Only counts the owner can defend (20 years, 5 products, 19 pods, 6+ teams).
- No claims of P&L, pricing, revenue ownership or direct reports unless there is evidence.
- No startup, founder, side-project or private product content; this is the professional portfolio only.
- The confidential-content guard in `scripts/check.mjs` fails the build if any of that reappears.
