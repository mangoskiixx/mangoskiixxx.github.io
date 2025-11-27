// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Current Date Display
function displayCurrentDate() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString('en-US', options);
    }
}

// CTA Button Interaction
const ctaButton = document.getElementById('cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        alert('Exploring more Tyler The Creator content! Redirecting to albums...');
        window.location.href = 'albums.html';
    });
}

// Form Validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Name validation
        const name = document.getElementById('name');
        const nameError = document.getElementById('name-error');
        if (name.value.trim().length < 2) {
            nameError.textContent = 'Name must be at least 2 characters long';
            isValid = false;
        } else {
            nameError.textContent = '';
        }
        
        // Email validation
        const email = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        } else {
            emailError.textContent = '';
        }
        
        // Subject validation
        const subject = document.getElementById('subject');
        const subjectError = document.getElementById('subject-error');
        if (!subject.value) {
            subjectError.textContent = 'Please select a subject';
            isValid = false;
        } else {
            subjectError.textContent = '';
        }
        
        // Message validation
        const message = document.getElementById('message');
        const messageError = document.getElementById('message-error');
        if (message.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters long';
            isValid = false;
        } else {
            messageError.textContent = '';
        }
        
        if (isValid) {
            const formMessage = document.getElementById('form-message');
            formMessage.textContent = 'Thank you for your message! We\'ll get back to you soon.';
            formMessage.style.backgroundColor = '#d4edda';
            formMessage.style.color = '#155724';
            formMessage.style.border = '1px solid #c3e6cb';
            
            // Reset form
            contactForm.reset();
            
            // Clear message after 5 seconds
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.style.backgroundColor = '';
                formMessage.style.color = '';
                formMessage.style.border = '';
            }, 5000);
        }
    });
}

// Album Button Interactions
document.addEventListener('DOMContentLoaded', function() {
    const albumButtons = document.querySelectorAll('.album-button');
    albumButtons.forEach(button => {
        button.addEventListener('click', function() {
            const albumTitle = this.closest('.album-details').querySelector('h3').textContent;
            alert(`Viewing details for: ${albumTitle}`);
        });
    });
});

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayCurrentDate();
});