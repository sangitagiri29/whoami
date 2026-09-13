# Portfolio audit (pre-redesign)

Audit date: 2026-09-13. Branch: `claude/blissful-bell-rin5n1`.

## What existed

| Area | Finding |
| --- | --- |
| Stack | Single hand-written `index.html` (50 KB) using Tailwind 2.2.19 via CDN, AOS scroll animations, Poppins from Google Fonts, Google Analytics (`G-KRSK4VET42`), Formspree contact form. No build step, no tests, no lint. |
| Deployment | No `.github/workflows`, no `CNAME`, no `_config.yml`. GitHub Pages serves the `main` branch root at `https://sangitagiri29.github.io/whoami/`. All asset references are relative, so the `/whoami/` base path works by construction. |
| Routes | `index.html` (live), `index1.html` (older duplicate of the same page, dead), `case study outdooriq.html` (76 KB standalone page linked from the Research section; URL contains spaces). |
| Assets | 20 raster images in the repo root. Several were far larger than their rendered size: `gradcap.png` 1.4 MB (rendered at 48 px), `ups.png` 800 KB, `citi.png` 288 KB, `fedex.jpg` 180 KB, `td.png`/`td1.png` are identical 3840x2160 files. Two portraits (`linkedin.jpeg`, `linkedinold.jpg`); the page used the older black-and-white one. No favicon, no Open Graph image. |
| Components | None. Content was duplicated between cards and modals; article bodies lived in an inline JS object. |
| Styling | Tailwind utility classes plus ~50 lines of custom CSS. No design tokens. Gradient hero (teal to indigo), heavy card hover transforms. |
| Responsive | Mostly worked, but nav collapsed only below 640 px with a max-height hack; hero paragraph was a 90-word block; project cards had fixed `min-height`. |
| Accessibility | `h1` used twice (nav brand and hero). Modals were `div`s toggled with `display`, no focus management, no `Escape` handling, no `aria-*`. Filter buttons had no pressed state. Hamburger button had no `aria-expanded`. No `prefers-reduced-motion` handling for AOS. Graduation-cap icon used as content image. |
| SEO | Title "Sangita Giri - Portfolio". No meta description, no Open Graph / Twitter tags, no canonical, no favicon, no structured data. |
| Links | LinkedIn (`linkedin.com/in/sangitagiri01`) valid. The hero "Connect on LinkedIn" button actually linked to `#contact`. No resume link anywhere in the repo or its history. Case-study link worked but had a space-containing filename. |

## Positioning problems

- Hero headline: "Group Product Manager | Agile Transformation Manager | Java Developer". Three identities, two of them not the target.
- UPS described as "AI-powered Pricing & Offers", "revenue optimization", "margin objectives", "NPS tracking". None of this is substantiated anywhere in the repo and it conflicts with the actual scope (portfolio of 5 products / 19 pods, product transformation, PM/PO capability building).
- "Areas of Expertise" was a flat tool list (ServiceNow, JIRA, Jenkins, GitHub, Java) that read as an engineer's skills cloud.
- Primary work section was organised as Product / Agile Transformation / Java filters, exactly the framing to avoid.
- Eight numeric outcome claims (20 %, 25 %, 30 %, 35 %, 40 %, 45 %, 50 %) repeated across TD, Agile and Java modals and in article bodies. No evidence for any of them in the repo.
- Five Agile certifications listed with equal weight; SPC was missing; Product Management education was buried.
- "Published Articles" section: seven pieces rendered only inside modals with no external publication link, some repeating the unsubstantiated percentages and the pricing/revenue claims.
- "Research & Case Studies": the OutdoorIQ study is a privately developed product concept (strategic bets, roadmap, wireframes, pilot targets). It is not marked as approved public content and falls under the confidential / outside-work exclusion.

## Decisions

1. Keep the stack static (no framework). Replace CDN Tailwind + AOS with one hand-written stylesheet using design tokens, and add a zero-dependency Node build script that renders `index.html` from a single content file. The committed `index.html` remains a plain static page, so GitHub Pages branch deployment is unchanged.
2. Remove `index1.html`, `case study outdooriq.html`, the article modals, all client logos, `gradcap.png`, and the unused portrait. Keep employer logos, optimised and served from `assets/img/`.
3. Rewrite every numeric outcome that cannot be substantiated as a qualitative outcome. Keep only the counts the owner supplied: 20 years, 5 products, 19 pods, 6+ teams.
4. Keep Google Analytics and the Formspree endpoint (existing, owner-configured).
5. Generate a two-page summary resume PDF from the same content so the "Download Resume" call to action works immediately; the owner can replace the file at `assets/resume/Sangita-Giri-Resume.pdf` at any time.
