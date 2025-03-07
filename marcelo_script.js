document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Hover effects for feature boxes
    const featureBoxes = document.querySelectorAll('.feature-box');
    featureBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
        
        // Add touch events for mobile
        box.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
        }, { passive: true });
        
        box.addEventListener('touchend', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        }, { passive: true });
    });
    
    // Hover effects for benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
            const icon = this.querySelector('.benefit-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            const icon = this.querySelector('.benefit-icon');
            if (icon) {
                icon.style.transform = '';
            }
        });
        
        // Add touch events for mobile
        card.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
            const icon = this.querySelector('.benefit-icon');
            if (icon) {
                icon.style.transform = 'scale(1.05)';
            }
        }, { passive: true });
        
        card.addEventListener('touchend', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            const icon = this.querySelector('.benefit-icon');
            if (icon) {
                icon.style.transform = '';
            }
        }, { passive: true });
    });
    
    // Pulse effect for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        // Add pulse animation
        setInterval(() => {
            button.classList.add('pulse');
            setTimeout(() => {
                button.classList.remove('pulse');
            }, 1000);
        }, 3000);
        
        // Track clicks with Facebook Pixel
        button.addEventListener('click', function(e) {
            // Track click event in Facebook Pixel
            if (typeof fbq === 'function') {
                fbq('track', 'Lead', {
                    content_name: 'Telegram Group Button Click',
                    content_category: 'Conversion'
                });
            }
            
            // Track outbound link to Telegram
            if (typeof fbq === 'function') {
                // Delay navigation slightly to ensure pixel fires
                e.preventDefault();
                const href = this.getAttribute('href');
                
                fbq('trackCustom', 'TelegramRedirect', {
                    destination: href
                });
                
                setTimeout(function() {
                    window.open(href, '_blank');
                }, 300);
            }
        });
    });
    
    // Add animation to icons
    const icons = document.querySelectorAll('.feature-icon, .benefit-icon');
    icons.forEach(icon => {
        icon.style.transition = 'transform 0.3s ease, color 0.3s ease';
    });
    
    // Add floating animation to icons
    const allIcons = document.querySelectorAll('.feature-icon, .benefit-icon');
    allIcons.forEach((icon, index) => {
        // Add a slight delay to each icon for a staggered effect
        const delay = index * 0.2;
        icon.style.animation = `float 3s ease-in-out ${delay}s infinite`;
    });
    
    // Check if it's a mobile device
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    // Add touch events for mobile
    if (isMobile) {
        const touchElements = document.querySelectorAll('.feature-box, .benefit-card');
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            element.addEventListener('touchend', function() {
                this.classList.remove('touch-active');
            });
        });
    }
    
    // Add particle effect to background
    createParticles();
});

// Create particle effect
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles';
    document.body.appendChild(particleContainer);
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 5 + 1;
        
        // Random opacity
        const opacity = Math.random() * 0.5 + 0.1;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        
        // Random delay
        const delay = Math.random() * 10;
        
        // Apply styles
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.opacity = opacity;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        particleContainer.appendChild(particle);
    }
}

// Add CSS for animations
document.head.insertAdjacentHTML('beforeend', `
<style>
@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(0, 136, 204, 0.7);
    }
    70% {
        box-shadow: 0 0 0 15px rgba(0, 136, 204, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(0, 136, 204, 0);
    }
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0px);
    }
}

.pulse {
    animation: pulse 1s ease-in-out;
}

.particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
}

.particle {
    position: absolute;
    background-color: rgba(0, 136, 204, 0.3);
    border-radius: 50%;
}
</style>
`);
