// Generates derived assets from content/portfolio.mjs:
//   assets/img/favicon.svg, favicon-32.png, apple-touch-icon.png
//   assets/img/og-image.png (1200x630, used for LinkedIn / Open Graph previews)
//   assets/resume/Sangita-Giri-Resume.pdf (one-page summary resume)
// Requires Playwright's Chromium (already present in this environment).
// Usage: node scripts/generate-assets.mjs

import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import * as c from '../content/portfolio.mjs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const h = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

mkdirSync(resolve(root, 'assets/img'), { recursive: true });
mkdirSync(resolve(root, 'assets/resume'), { recursive: true });

const monogram = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#0f1f3d"/>
  <text x="32" y="41" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="30" font-weight="600" fill="#7fd6cd">SG</text>
</svg>`;
writeFileSync(resolve(root, 'assets/img/favicon.svg'), monogram(64));

const fontData = (file) => `url(data:font/woff2;base64,${readFileSync(resolve(root, 'assets/fonts', file)).toString('base64')}) format('woff2')`;
const fontCss = `@font-face{font-family:'Fraunces';font-weight:500 600;src:${fontData('fraunces-latin.woff2')}}
@font-face{font-family:'Inter';font-weight:400 700;src:${fontData('inter-latin.woff2')}}`;

const ogHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
${fontCss}
html,body{margin:0}
body{width:1200px;height:630px;background:#0f1f3d;color:#e6ebf5;font-family:Inter,system-ui,sans-serif;position:relative;overflow:hidden}
.glow{position:absolute;right:-200px;top:-260px;width:760px;height:760px;border-radius:50%;background:radial-gradient(circle,rgba(127,214,205,.35),transparent 60%)}
.wrap{position:absolute;inset:0;padding:72px 80px;display:flex;gap:56px;align-items:center}
.text{flex:1}
.eyebrow{font-size:22px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#7fd6cd;margin:0 0 18px}
h1{font-family:Fraunces,Georgia,serif;font-size:84px;font-weight:600;letter-spacing:-.02em;line-height:1;margin:0 0 22px;color:#fff}
.headline{font-family:Fraunces,Georgia,serif;font-size:34px;font-weight:500;line-height:1.25;margin:0 0 30px;color:#e6ebf5;max-width:640px}
.caps{font-size:20px;font-weight:600;color:#a9b6cf;margin:0}
.caps span+span::before{content:'·';color:#7fd6cd;margin:0 12px}
img{width:300px;height:300px;object-fit:cover;border-radius:36px;box-shadow:0 0 0 8px rgba(255,255,255,.08)}
.url{position:absolute;left:80px;bottom:44px;font-size:20px;color:#a9b6cf}
</style></head><body>
<div class="glow"></div>
<div class="wrap">
  <div class="text">
    <p class="eyebrow">${h(c.site.role)}</p>
    <h1>${h(c.site.name)}</h1>
    <p class="headline">${h(c.site.tagline)}</p>
    <p class="caps">${c.hero.capabilities.map((k) => `<span>${h(k)}</span>`).join('')}</p>
  </div>
  <img src="data:image/jpeg;base64,${readFileSync(resolve(root, c.site.portrait.src)).toString('base64')}" alt="">
</div>
<p class="url">${h(c.site.url.replace('https://', ''))}</p>
</body></html>`;

const w = c.work;
const resumeHtml = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>${h(c.site.name)} resume</title><style>
${fontCss}
@page{size:Letter;margin:0.55in 0.6in}
body{margin:0;font-family:Inter,system-ui,sans-serif;color:#101828;font-size:9.6pt;line-height:1.4}
h1{font-family:Fraunces,Georgia,serif;font-size:24pt;font-weight:600;margin:0;letter-spacing:-.01em}
.role{font-size:11.5pt;font-weight:600;color:#0e6f6a;margin:2pt 0 4pt}
.meta{font-size:8.6pt;color:#5d6675;margin:0 0 10pt}
.meta a{color:#5d6675;text-decoration:none}
.summary{margin:0 0 10pt;color:#344054}
h2{font-size:8.6pt;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#0e6f6a;border-bottom:1px solid #e4e7ec;padding-bottom:3pt;margin:10pt 0 6pt}
.job{margin:0 0 7pt}
.job-head{display:flex;justify-content:space-between;gap:12pt;font-weight:600}
.job-head span:last-child{font-weight:500;color:#5d6675;white-space:nowrap}
.job-title{color:#344054;font-weight:500;margin:0 0 2pt}
ul{margin:0;padding-left:12pt}
li{margin:0 0 1.5pt;color:#344054}
.two{display:grid;grid-template-columns:1fr 1fr;gap:0 18pt}
.caps{margin:0;color:#344054}
.early li{margin-bottom:1pt}
</style></head><body>
<h1>${h(c.site.name)}</h1>
<p class="role">${h(c.site.role)}</p>
<p class="meta">${h(c.site.location)} · <a href="${h(c.site.linkedin)}">${h(c.site.linkedin.replace('https://www.', ''))}</a> · <a href="${h(c.site.url)}">${h(c.site.url.replace('https://', ''))}</a></p>
<p class="meta"><em>Portfolio summary generated from the website content. Full resume available on request.</em></p>
<p class="summary">${h(c.hero.intro)}</p>
<p class="caps"><strong>Capabilities:</strong> ${h(c.hero.capabilities.join(' · '))}</p>

<h2>Experience</h2>
${w.caseStudies
  .map(
    (cs) => `<div class="job">
  <div class="job-head"><span>${h(cs.company)}</span>${cs.period ? `<span>${h(cs.period)}</span>` : ''}</div>
  <p class="job-title">${h(cs.title)}</p>
  <ul>
    <li>${h(cs.sections.role)}</li>
    ${cs.sections.impact.map((i) => `<li>${h(i)}</li>`).join('\n    ')}
  </ul>
</div>`,
  )
  .join('\n')}

<h2>Earlier career</h2>
<ul class="early">
${w.foundation.roles.map((r) => `  <li><strong>${h(r.company)}</strong>, ${h(r.title)} (${h(r.years)}). ${h(r.summary)}</li>`).join('\n')}
</ul>
<p class="caps" style="margin-top:4pt">${h(w.foundation.techNote)}</p>

<div class="two">
  <div>
    <h2>Education</h2>
    <ul>${c.credentials.education.map((e) => `<li><strong>${h(e.title)}</strong>, ${h(e.org)}</li>`).join('')}</ul>
  </div>
  <div>
    <h2>Certifications</h2>
    <ul>${c.credentials.certifications.map((e) => `<li>${h(e.title)}, ${h(e.org)}</li>`).join('')}${c.credentials.other.map((e) => `<li>${h(e.title)}, ${h(e.org)}</li>`).join('')}</ul>
  </div>
</div>
</body></html>`;

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.setContent(ogHtml, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: resolve(root, 'assets/img/og-image.png'), type: 'png' });

  for (const [file, size] of [['favicon-32.png', 32], ['apple-touch-icon.png', 180]]) {
    const p = await browser.newPage({ viewport: { width: size, height: size }, deviceScaleFactor: 1 });
    await p.setContent(`<style>html,body{margin:0;background:transparent}</style>${monogram(size)}`);
    await p.screenshot({ path: resolve(root, 'assets/img', file), omitBackground: true });
    await p.close();
  }

  const r = await browser.newPage();
  await r.setContent(resumeHtml, { waitUntil: 'networkidle' });
  await r.evaluate(() => document.fonts.ready);
  await r.pdf({ path: resolve(root, 'assets/resume/Sangita-Giri-Resume.pdf'), format: 'Letter', printBackground: true, preferCSSPageSize: true });
  await r.close();
} finally {
  await browser.close();
}
console.log('Generated favicon.svg, favicon-32.png, apple-touch-icon.png, og-image.png and Sangita-Giri-Resume.pdf');
