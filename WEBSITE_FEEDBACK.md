# Website review and feedback

Structured feedback for [index.html](index.html), [styles.css](styles.css), [script.js](script.js), and repo hygiene. Priorities help you decide what to tackle first.

---

## Critical

| Item | Location | Issue | Suggested change |
|------|----------|--------|------------------|
| Mobile navigation | [styles.css](styles.css) (previously) | Section links were hidden under 768px with no replacement | **Addressed:** hamburger control toggles full-width nav panel (see `.nav-toggle`, `.navbar.nav-open`). |
| Broken assets | [index.html](index.html) | `resume.pdf` and `vlsi_report.pdf` are not in the repo | Confirm files exist wherever you deploy (e.g. GitHub Pages) or links will 404. |

---

## High

| Item | Location | Issue | Suggested change |
|------|----------|--------|------------------|
| Typos | Experience / projects | "Reasearch", "Warefare", "ANLYZER", "impedence", "acrossing" | **Addressed:** corrected to Research, Warfare, ANALYZER, impedance, across. |
| Title vs hero | `<title>` vs `<h2 class="subtitle">` | "Engineer" vs "Student" | **Addressed:** title set to "Electrical Engineering Student" to match hero. |
| Branding vs narrative | Theme vs copy | UIUC palette with UVA-centric story implied wrong affiliation | **Addressed:** palette aligned to **UVA** brand colors (Jefferson blue / orange) to match site copy. |
| Icon-only links | Project headers | PDF/GitHub icons without accessible names | **Addressed:** `aria-label` on each project link. |
| External tabs | `target="_blank"` | Missing `rel` | **Addressed:** `rel="noopener noreferrer"` on external links. |
| Keyboard focus | Global links/buttons | Easy to lose focus visually | **Addressed:** `:focus-visible` styles for links, buttons, nav toggle, skip link. |
| Skip link | Document start | No bypass for repeated nav | **Addressed:** "Skip to main content" + `<main id="main-content">`. |

---

## Medium

| Item | Location | Issue | Suggested change |
|------|----------|--------|------------------|
| Logo `href="#"` | Nav | Opaque without JS | **Addressed:** `href="#top"` and `id="top"` on `<body>`. |
| Hero CTA spacing | Hero | Inline `margin-top` | **Addressed:** `.hero-actions` in CSS. |
| Navbar shadow | [script.js](script.js) | Inline styles on scroll | **Addressed:** `.navbar--scrolled` class toggled from JS. |
| Capstone copy | Impedance project | Future tense ("will include") reads tentative | **Addressed:** labeled "In progress (Spring 2026)" and tightened wording. |
| `.jobs-container` | HTML | Class with no CSS rules | **Addressed:** class removed from wrappers. |
| README | [README.md](README.md) | Duplicate lines only | **Addressed:** short real description. |
| Orange contrast | `.company`, small accent text | Orange on white can fail WCAG AA | Spot-check with a contrast checker; use a darker orange token for small text if needed (`--uva-orange-contrast`). |
| Project grid | `.projects-grid` | `minmax(350px, 1fr)` tight on small phones | **Addressed:** `minmax(300px, 1fr)`. |

---

## Low

| Item | Location | Issue | Suggested change |
|------|----------|--------|------------------|
| Font Awesome CDN | `<head>` | Pinned to 6.0.0 | Bump to a current 6.x patch or self-host if you want fewer third-party moving parts. |
| Open Graph / Twitter | `<head>` | No social preview tags | **Addressed:** basic `og:*` and `twitter:*` (set `og:image` to a real absolute image URL when you have one). |
| JSON-LD | `<head>` | None | Optional `Person` or `WebSite` schema for rich results. |
| LinkedIn URL | Contact | Unusual profile slug | Verify the URL is your intended public profile. |

---

## Nice-to-have

- **`prefers-reduced-motion`:** **Addressed** in [script.js](script.js) for in-page smooth scrolling (uses `auto` when reduced motion is requested).
- **Canonical URL:** `<link rel="canonical" href="https://alexclunan.com/">` if you care about duplicate URLs.
- **Analytics:** Add only if you want usage data and a privacy policy is acceptable.

---

## Reference tables (original review)

### Content and copy

| Location | Issue | Suggested change |
|----------|--------|------------------|
| NREIP heading | Typos: "Reasearch", "Warefare" | Naval **Research** Enterprise Internship Program; **Warfare** Center |
| Project card title | "ANLYZER" | **ANALYZER** |
| Impedance project | "impedence" | **impedance** |
| SRAM project | "checking acrossing PVT corners" | **across** PVT corners |
| Page title vs hero | Engineer vs Student | Align with actual status |
| README | Duplicate title lines | One-line description + optional deploy note |

### UX and responsive design

- Mobile navigation: hamburger / drawer / or always-visible compact links.
- Logo: prefer `#top` + `id="top"` for semantics and non-JS fallback.
- Avoid inline styles for recurring layout (hero CTA spacing).

### Accessibility

- `aria-label` (or visually hidden text) on icon-only controls.
- `rel="noopener noreferrer"` on `target="_blank"`.
- `:focus-visible` for links and buttons.
- Skip link targeting `<main>`.

### SEO and social sharing

- Open Graph and Twitter Card tags; optional canonical and JSON-LD.

### Technical

- Confirm `resume.pdf` / `vlsi_report.pdf` in deployment.
- Prefer CSS classes over inline navbar shadow from JS.
- Remove or style unused classes such as `.jobs-container`.

---

## Post-review implementation (this repo)

The following were applied in the same change set as this document:

- [WEBSITE_FEEDBACK.md](WEBSITE_FEEDBACK.md) (this file)
- Copy corrections and capstone wording in [index.html](index.html)
- UVA-aligned theme variables and related polish in [styles.css](styles.css)
- Skip link, `<main>`, mobile menu, `rel`/`aria-label`, OG/twitter meta, `#top` in [index.html](index.html)
- Reduced-motion-aware scrolling and `.navbar--scrolled` in [script.js](script.js)
- [README.md](README.md) cleanup
