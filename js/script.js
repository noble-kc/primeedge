document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = contactForm.querySelector('.form-submit');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.style.backgroundColor = '#4CAF50';
            btn.style.borderColor = '#4CAF50';
            
            setTimeout(() => {
                alert('Thank you for your message. Prime Edge will contact you shortly.');
                contactForm.reset();
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.style.borderColor = '';
            }, 1000);
        });
    }
});
