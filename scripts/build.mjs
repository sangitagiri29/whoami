// Zero-dependency static site builder.
// Renders index.html and 404.html from content/portfolio.mjs.
// Usage: node scripts/build.mjs

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as c from '../content/portfolio.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/** Escape text for safe insertion into HTML. */
const h = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const icons = {
  linkedin:
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
  download:
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>',
  arrow:
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-6-6 6 6-6 6"/></svg>',
  menu:
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg>',
};

const absolute = (path) => new URL(path, c.site.url).href;

function head({ title, description, canonical, robots }) {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: c.site.name,
    jobTitle: c.site.role,
    description: c.site.description,
    url: c.site.url,
    image: absolute(c.site.portrait.src),
    sameAs: [c.site.linkedin],
    address: { '@type': 'PostalAddress', addressLocality: 'Toronto', addressCountry: 'CA' },
    alumniOf: c.credentials.education.map((e) => ({ '@type': 'CollegeOrUniversity', name: e.org })),
    knowsAbout: c.site.keywords.split(',').map((k) => k.trim()),
  };
  return `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${h(title)}</title>
  <meta name="description" content="${h(description)}">
  <meta name="author" content="${h(c.site.name)}">
  ${robots ? `<meta name="robots" content="${h(robots)}">` : ''}
  <link rel="canonical" href="${h(canonical)}">
  <meta name="theme-color" content="#0f1f3d">
  <meta property="og:type" content="profile">
  <meta property="og:site_name" content="${h(c.site.name)}">
  <meta property="og:title" content="${h(title)}">
  <meta property="og:description" content="${h(description)}">
  <meta property="og:url" content="${h(canonical)}">
  <meta property="og:image" content="${h(absolute(c.site.ogImage))}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${h(`${c.site.name}, ${c.site.role}`)}">
  <meta property="profile:first_name" content="Sangita">
  <meta property="profile:last_name" content="Giri">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${h(title)}">
  <meta name="twitter:description" content="${h(description)}">
  <meta name="twitter:image" content="${h(absolute(c.site.ogImage))}">
  <link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="assets/img/favicon-32.png" type="image/png" sizes="32x32">
  <link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png">
  <link rel="preload" href="assets/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="assets/fonts/fraunces-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="assets/css/styles.css">
  <script async src="https://www.googletagmanager.com/gtag/js?id=${h(c.site.analyticsId)}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${h(c.site.analyticsId)}');
  </script>
  <script type="application/ld+json">${JSON.stringify(person)}</script>
</head>`;
}

function header(base = '') {
  return `<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header" id="top">
  <div class="container site-header__inner">
    <a class="brand" href="${base}#top" aria-label="${h(c.site.name)}, back to top">${h(c.site.name)}</a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
      ${icons.menu}<span>Menu</span>
    </button>
    <nav class="site-nav" id="site-nav" aria-label="Primary">
      <ul>
        ${c.nav.map((n) => `<li><a href="${base}${h(n.href)}">${h(n.label)}</a></li>`).join('\n        ')}
      </ul>
    </nav>
  </div>
</header>`;
}

function hero() {
  const s = c.hero;
  const secondary = s.secondaryCtas
    .map((b) => {
      const attrs = [`href="${h(b.href)}"`, 'class="btn btn--secondary"'];
      if (b.external) attrs.push('target="_blank"', 'rel="noopener noreferrer me"');
      if (b.download) attrs.push('download');
      const icon = b.external ? icons.linkedin : icons.download;
      const sr = b.external ? '<span class="visually-hidden"> (opens in a new tab)</span>' : '<span class="visually-hidden"> (PDF)</span>';
      return `<a ${attrs.join(' ')}>${icon}${h(b.label)}${sr}</a>`;
    })
    .join('\n          ');
  return `<section class="hero" aria-labelledby="hero-heading">
  <div class="container hero__inner">
    <div class="hero__content">
      <div class="hero__identity">
        <img class="hero__portrait" src="${h(c.site.portrait.src)}" alt="${h(c.site.portrait.alt)}" width="640" height="640" fetchpriority="high">
        <div>
          <h1 id="hero-heading" class="hero__name">${h(c.site.name)}</h1>
          <p class="hero__role">${h(s.eyebrow)}</p>
        </div>
      </div>
      <p class="hero__headline">${h(s.headline)}</p>
      <p class="hero__intro">${h(s.intro)}</p>
      <ul class="capabilities" aria-label="Capabilities">
        ${s.capabilities.map((k) => `<li>${h(k)}</li>`).join('\n        ')}
      </ul>
      <div class="hero__actions">
        <a class="btn btn--primary" href="${h(s.primaryCta.href)}">${h(s.primaryCta.label)}${icons.arrow}</a>
        ${secondary}
      </div>
    </div>
    <div class="snapshot" aria-labelledby="snapshot-heading" role="group">
      <h2 id="snapshot-heading" class="snapshot__heading">Leadership snapshot</h2>
      <dl class="stats">
        ${s.stats
          .map(
            (st) => `<div class="stat${st.secondary ? ' stat--secondary' : ''}">
          <dt class="stat__label"><span class="stat__unit">${h(st.unit)}</span> <span class="stat__desc">${h(st.label)}</span></dt>
          <dd class="stat__value${/[a-z]/i.test(st.value) ? ' stat__value--text' : ''}">${h(st.value)}</dd>
        </div>`,
          )
          .join('\n        ')}
      </dl>
    </div>
  </div>
</section>`;
}

function caseStudy(cs) {
  const b = cs.sections;
  const block = (title, body) => `<div class="case__block">
          <h4>${h(title)}</h4>
          ${Array.isArray(body) ? `<ul>${body.map((i) => `<li>${h(i)}</li>`).join('')}</ul>` : `<p>${h(body)}</p>`}
        </div>`;
  const header = `<header class="case__header">
        <img class="case__logo" src="${h(cs.logo.src)}" alt="${h(cs.logo.alt)} logo" width="48" height="48">
        <div>
          <p class="case__company">${h(cs.company)} <span class="case__period">${h(cs.period)}</span></p>
          <h3 id="case-${h(cs.id)}-title" class="case__title">${h(cs.title)}</h3>
        </div>
      </header>
      <p class="case__summary">${h(cs.summary)}</p>
      <ul class="chips" aria-label="Scope">
        ${cs.scope.map((s) => `<li>${h(s)}</li>`).join('\n        ')}
      </ul>`;
  if (cs.featured) {
    return `<article class="case case--featured" id="case-${h(cs.id)}" aria-labelledby="case-${h(cs.id)}-title">
      <div class="case__lead">
        ${header}
        ${block('Context', b.context)}
      </div>
      <div class="case__body">
        ${block('Challenge', b.challenge)}
        ${block('My role', b.role)}
        ${block('Approach', b.approach)}
        ${block('Signals & data', b.signals)}
        ${block('Impact', b.impact)}
      </div>
    </article>`;
  }
  return `<article class="case case--secondary" id="case-${h(cs.id)}" aria-labelledby="case-${h(cs.id)}-title">
      ${header}
      ${block('Challenge', `${b.context} ${b.challenge}`)}
      ${block('My role', b.role)}
      <details class="case__more">
        <summary>Approach and signals</summary>
        ${block('Approach', b.approach)}
        ${block('Signals & data', b.signals)}
      </details>
      ${block('Impact', b.impact)}
    </article>`;
}

function work() {
  const w = c.work;
  const f = w.foundation;
  const featured = w.caseStudies.filter((x) => x.featured);
  const secondary = w.caseStudies.filter((x) => !x.featured);
  return `<section class="section" id="work" aria-labelledby="work-heading">
  <div class="container">
    <div class="section__head">
      <p class="eyebrow">Case studies</p>
      <h2 id="work-heading">${h(w.heading)}</h2>
      <p class="section__intro">${h(w.intro)}</p>
    </div>
    ${featured.map(caseStudy).join('\n')}
    <div class="cases-secondary">
    ${secondary.map(caseStudy).join('\n    ')}
    </div>

    <div class="foundation" aria-labelledby="foundation-heading">
      <div class="foundation__head">
        <h3 id="foundation-heading">${h(f.heading)}</h3>
        <p>${h(f.intro)}</p>
      </div>
      <ol class="roles">
        ${f.roles
          .map(
            (r) => `<li class="roles__row">
          <span class="roles__years">${h(r.years)}</span>
          <span class="roles__company">${h(r.company)}</span>
          <span class="roles__title">${h(r.title)}</span>
          <span class="roles__summary">${h(r.summary)}</span>
        </li>`,
          )
          .join('\n        ')}
      </ol>
      <div class="foundation__footer">
        <p class="foundation__note">${h(f.techNote)} ${h(f.clientsNote)}</p>
        <ul class="logos__list" aria-label="${h(c.organizations.heading)}">
          ${c.organizations.logos.map((l) => `<li><img src="${h(l.src)}" alt="${h(l.alt)}" height="30" loading="lazy"></li>`).join('\n          ')}
        </ul>
      </div>
    </div>
  </div>
</section>`;
}

function thinking() {
  const a = c.thinking;
  return `<section class="section section--alt" id="thinking" aria-labelledby="thinking-heading">
  <div class="container">
    <div class="section__head section__head--row">
      <div>
        <p class="eyebrow">Product thinking</p>
        <h2 id="thinking-heading">${h(a.heading)}</h2>
      </div>
      <p class="section__intro">${h(a.intro)}</p>
    </div>
    <ol class="flow">
      ${a.steps
        .map(
          (s, i) => `<li class="flow__step">
        <span class="flow__num" aria-hidden="true">0${i + 1}</span>
        <h3 class="flow__name">${h(s.name)}</h3>
        <p class="flow__text">${h(s.text)}</p>
      </li>`,
        )
        .join('\n      ')}
    </ol>
  </div>
</section>`;
}

function dataAi() {
  const d = c.data;
  const a = c.ai;
  return `<section class="section section--dark" id="data" aria-labelledby="data-heading">
  <div class="container">
    <div class="data">
      <div class="data__lead">
        <p class="eyebrow">${h(d.eyebrow)}</p>
        <h2 id="data-heading">${h(d.heading)}</h2>
        <p class="section__intro">${h(d.intro)}</p>
        <ul class="data__practice">${d.practice.map((i) => `<li>${h(i)}</li>`).join('')}</ul>
        <p class="data__tools"><span>Enabling tools</span> ${d.tools.map((t) => `<strong>${h(t)}</strong>`).join(' · ')}</p>
      </div>
      <div class="signals">
        ${d.groups
          .map(
            (g) => `<div class="signals__group">
          <h3>${h(g.title)}</h3>
          <ul>${g.items.map((i) => `<li>${h(i)}</li>`).join('')}</ul>
        </div>`,
          )
          .join('\n        ')}
      </div>
    </div>
    <div class="ai" aria-labelledby="ai-heading">
      <div class="ai__head">
        <p class="eyebrow">${h(a.eyebrow)}</p>
        <h3 id="ai-heading">${h(a.heading)}</h3>
      </div>
      <ol class="ai__flow" aria-label="How I use AI">
        ${a.flow.map((f) => `<li>${h(f)}</li>`).join('\n        ')}
      </ol>
      <p class="ai__statement">${h(a.statement)}</p>
    </div>
  </div>
</section>`;
}

function journey() {
  const j = c.journey;
  return `<section class="section" id="journey" aria-labelledby="journey-heading">
  <div class="container">
    <div class="section__head section__head--row">
      <div>
        <p class="eyebrow">Progression</p>
        <h2 id="journey-heading">${h(j.heading)}</h2>
      </div>
      <p class="section__intro">${h(j.intro)}</p>
    </div>
    <ol class="stages">
      ${j.stages
        .map(
          (s, i) => `<li class="stage">
        <p class="stage__years">${h(s.years)}</p>
        <h3 class="stage__name">${h(s.name)}</h3>
        <ol class="stage__roles">
          ${s.roles.map((r) => `<li><span class="stage__company">${h(r.company)}</span><span class="stage__role">${h(r.title)}, ${h(r.years)}</span></li>`).join('\n          ')}
        </ol>
        <p class="stage__text">${h(s.text)}</p>
      </li>`,
        )
        .join('\n      ')}
    </ol>
  </div>
</section>`;
}

function credentials() {
  const cr = c.credentials;
  return `<section class="section section--alt section--compact" id="credentials" aria-labelledby="credentials-heading">
  <div class="container creds">
    <h2 id="credentials-heading">${h(cr.heading)}</h2>
    <div class="creds__group">
      <h3>Education</h3>
      <ul class="creds__list">${cr.education.map((e) => `<li><span class="creds__title">${h(e.title)}</span><span class="creds__org">${h(e.org)}</span></li>`).join('')}</ul>
    </div>
    <div class="creds__group">
      <h3>Certifications</h3>
      <ul class="creds__list creds__list--inline">${cr.certifications.map((e) => `<li><span class="creds__title">${h(e.title)}</span><span class="creds__org">${h(e.org)}</span></li>`).join('')}</ul>
    </div>
  </div>
</section>`;
}

function contact() {
  const ct = c.contact;
  return `<section class="section section--dark section--contact" id="contact" aria-labelledby="contact-heading">
  <div class="container contact">
    <div class="contact__lead">
      <h2 id="contact-heading">${h(ct.heading)}</h2>
      <p class="section__intro">${h(ct.intro)}</p>
      <div class="contact__actions">
        <a class="btn btn--primary" href="${h(c.site.linkedin)}" target="_blank" rel="noopener noreferrer me">${icons.linkedin}Connect on LinkedIn<span class="visually-hidden"> (opens in a new tab)</span></a>
        <a class="btn btn--secondary" href="${h(c.site.resume)}" download>${icons.download}Download Resume<span class="visually-hidden"> (PDF)</span></a>
      </div>
    </div>
    <form class="contact-form" id="contact-form" action="${h(c.site.formEndpoint)}" method="POST" novalidate>
      <h3>${h(ct.form.heading)}</h3>
      <div class="contact-form__row">
        <div class="field">
          <label for="name">Name</label>
          <input id="name" name="name" type="text" autocomplete="name" required>
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input id="email" name="email" type="email" autocomplete="email" required>
        </div>
      </div>
      <div class="field">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="4" required></textarea>
      </div>
      <button class="btn btn--primary" type="submit">Send message</button>
      <p class="form-status" id="form-status" role="status" aria-live="polite" data-success="${h(ct.form.success)}" data-error="${h(ct.form.error)}"></p>
    </form>
  </div>
</section>`;
}

function footer(base = '') {
  return `<footer class="site-footer">
  <div class="container site-footer__inner">
    <p>&copy; ${c.site.copyrightYear} ${h(c.site.name)}. ${h(c.site.role)}, ${h(c.site.location)}.</p>
    <p><a href="${h(c.site.linkedin)}" target="_blank" rel="noopener noreferrer me">LinkedIn<span class="visually-hidden"> (opens in a new tab)</span></a> · <a href="${base}#top">Back to top</a></p>
  </div>
</footer>`;
}

function indexPage() {
  return `<!DOCTYPE html>
<html lang="en">
${head({ title: c.site.title, description: c.site.description, canonical: c.site.url })}
<body>
${header()}
<main id="main">
${hero()}
${work()}
${thinking()}
${dataAi()}
${journey()}
${credentials()}
${contact()}
</main>
${footer()}
<script src="assets/js/main.js" defer></script>
</body>
</html>
`;
}

function notFoundPage() {
  return `<!DOCTYPE html>
<html lang="en">
${head({ title: `Page not found | ${c.site.name}`, description: c.site.description, canonical: c.site.url, robots: 'noindex' })}
<body>
${header('./')}
<main id="main">
<section class="section section--tight" aria-labelledby="nf-heading">
  <div class="container section__head">
    <p class="eyebrow">404</p>
    <h1 id="nf-heading">That page is not here.</h1>
    <p class="section__intro">The portfolio lives at a single address. Head back to the <a href="./">home page</a> to see the work.</p>
  </div>
</section>
</main>
${footer('./')}
<script src="assets/js/main.js" defer></script>
</body>
</html>
`;
}

mkdirSync(root, { recursive: true });
writeFileSync(resolve(root, 'index.html'), indexPage());
writeFileSync(resolve(root, '404.html'), notFoundPage());
console.log('Built index.html and 404.html');
