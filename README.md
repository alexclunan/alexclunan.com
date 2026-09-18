# alexclunan.com

Static portfolio site for Alex Clunan (plain HTML, CSS, and a small amount of JavaScript). Served via GitHub Pages; custom domain is set in [CNAME](CNAME).

## Layout

- `index.html`, `styles.css`, `script.js` — the site. Content comes from `resume.pdf`.
- `assets/img/` — web-sized images used by the page (headshot, impedance analyzer photos, architecture diagram, social preview). Regenerate from the originals with `sips` if the originals change.
- `resume.pdf`, `SAR_ADC.pdf`, `vlsi_report.pdf` — linked documents.
- Raw photo originals in the repo root (`headshot.png`, `*.jpeg`, `microfludic_setup.png`, `iza_final_arch.png`) are gitignored; only the resized copies in `assets/img/` are published.

## Preview locally

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765.
