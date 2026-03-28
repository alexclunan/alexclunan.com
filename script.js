const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const scrollBehavior = () => (prefersReducedMotion() ? 'auto' : 'smooth');

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        const behavior = scrollBehavior();

        if (targetId !== '#' && targetId !== '') {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior });
            }
        } else {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior,
            });
        }
    });
});

// Mobile navigation
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('#primary-nav');

const closeMobileNav = () => {
    if (!navbar || !navToggle) return;
    navbar.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
};

navToggle?.addEventListener('click', () => {
    if (!navbar) return;
    const open = !navbar.classList.contains('nav-open');
    navbar.classList.toggle('nav-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

primaryNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        if (window.matchMedia('(max-width: 768px)').matches) {
            closeMobileNav();
        }
    });
});

window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 769px)').matches) {
        closeMobileNav();
    }
});

// Navbar scroll effect (CSS class instead of inline styles)
window.addEventListener('scroll', () => {
    if (!navbar) return;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    navbar.classList.toggle('navbar--scrolled', scrollTop > 100);
});
