// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // Prevent default action and scroll only if it's a valid ID, not just "#"
        if (targetId !== '#' && targetId !== '') {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } else {
            // If it's just "#" (like the logo), prevent the jump to top default behavior
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 100) {
        // Use a subtle shadow
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)"; 
    } else {
        navbar.style.boxShadow = "none";
    }
});