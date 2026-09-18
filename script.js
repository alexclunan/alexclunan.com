// Mobile navigation ---------------------------------------------------------
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('#primary-nav a');
const mobileQuery = window.matchMedia('(max-width: 720px)');

const setMenu = (open) => {
    if (!nav || !navToggle) return;
    nav.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
};

navToggle?.addEventListener('click', () => {
    setMenu(!nav.classList.contains('is-open'));
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (mobileQuery.matches) setMenu(false);
    });
});

mobileQuery.addEventListener('change', (e) => {
    if (!e.matches) setMenu(false);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav?.classList.contains('is-open')) {
        setMenu(false);
        navToggle?.focus();
    }
});

// Highlight the nav link for the section in view ---------------------------
const sections = [...document.querySelectorAll('main section[id]')];
const linkFor = new Map(
    [...navLinks]
        .filter((a) => a.getAttribute('href')?.startsWith('#'))
        .map((a) => [a.getAttribute('href').slice(1), a])
);

if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const link = linkFor.get(entry.target.id);
                if (!link) return;
                if (entry.isIntersecting) {
                    linkFor.forEach((a) => a.classList.remove('is-active'));
                    link.classList.add('is-active');
                }
            });
        },
        { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
}
