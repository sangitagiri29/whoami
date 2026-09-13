// Static verification: build freshness, local link/asset integrity, basic HTML and
// accessibility checks, and external link reachability.
// Usage: node scripts/check.mjs [--no-network]

import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const noNetwork = process.argv.includes('--no-network');
const problems = [];
const note = (msg) => problems.push(msg);

// 1. index.html and 404.html must match the build output.
const before = Object.fromEntries(['index.html', '404.html'].map((f) => [f, existsSync(resolve(root, f)) ? readFileSync(resolve(root, f), 'utf8') : '']));
execFileSync('node', [join(root, 'scripts/build.mjs')], { cwd: root, stdio: ['ignore', 'ignore', 'inherit'] });
for (const f of Object.keys(before)) {
  if (before[f] !== readFileSync(resolve(root, f), 'utf8')) note(`${f} was out of date; it has been rebuilt. Commit the regenerated file.`);
}

for (const file of ['index.html', '404.html']) {
  const html = readFileSync(resolve(root, file), 'utf8');

  // 2. Local references must exist.
  const refs = [...html.matchAll(/(?:href|src)="([^"#]+)"/g)].map((m) => m[1]);
  const local = refs.filter((r) => !/^(https?:|mailto:|tel:|data:)/.test(r));
  for (const ref of new Set(local)) {
    const p = resolve(root, ref === './' ? 'index.html' : ref.split('?')[0]);
    if (!existsSync(p)) note(`${file}: missing local file ${ref}`);
  }

  // 3. In-page anchors must resolve.
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  for (const m of html.matchAll(/href="#([^"]+)"/g)) {
    if (!ids.has(m[1])) note(`${file}: dangling anchor #${m[1]}`);
  }

  // 4. Structure and accessibility basics.
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) note(`${file}: expected exactly one <h1>, found ${h1s}`);
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt="/.test(m[0])) note(`${file}: <img> without alt: ${m[0].slice(0, 80)}`);
  }
  if (!/<meta name="description"/.test(html)) note(`${file}: missing meta description`);
  if (!/<link rel="canonical"/.test(html)) note(`${file}: missing canonical`);
  if (!/property="og:image"/.test(html)) note(`${file}: missing og:image`);
  if (!/<html lang="en">/.test(html)) note(`${file}: missing lang attribute`);
  if (!/<main\b/.test(html)) note(`${file}: missing <main>`);
  for (const m of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
    if (!/rel="[^"]*noopener/.test(m[0])) note(`${file}: target=_blank without noopener`);
  }

  // 5. Heading levels must not skip.
  let last = 1;
  for (const m of html.matchAll(/<h([1-4])\b/g)) {
    const level = Number(m[1]);
    if (level > last + 1) note(`${file}: heading level jumps from h${last} to h${level}`);
    last = level;
  }

  // 6. Nothing from the confidential / de-emphasised list should have crept in.
  const banned = [/founder/i, /startup/i, /side project/i, /Java Developer/, /Agile Transformation Manager/, /\b\d{2}%/, /2026 – present/, /to 2026/, /Certified Scrum Product Owner/, /Secret Clearance/, /Nov 2016/];
  for (const re of banned) {
    if (re.test(html)) note(`${file}: contains banned content matching ${re}`);
  }

  // 7. External links.
  if (!noNetwork && file === 'index.html') {
    const external = [...new Set(refs.filter((r) => /^https?:/.test(r) && !/googletagmanager|gstatic|googleapis/.test(r)))];
    for (const url of external) {
      try {
        const res = await fetch(url, { method: 'GET', redirect: 'follow', headers: { 'user-agent': 'Mozilla/5.0 (portfolio link check)' } });
        // LinkedIn answers automated requests with 999; treat that as reachable.
        if (!res.ok && res.status !== 999 && res.status !== 405) note(`${file}: ${url} responded ${res.status}`);
      } catch (e) {
        note(`${file}: ${url} unreachable (${e.message})`);
      }
    }
  }
}

if (problems.length) {
  console.error('Check failed:\n' + problems.map((p) => ' - ' + p).join('\n'));
  process.exit(1);
}
console.log('All checks passed.');
