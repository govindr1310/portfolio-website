/**
 * Modern Effects - Advanced JavaScript for UI interactions
 * 2025 Edition
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all effects (custom cursor removed)
  initParallaxEffect();
  initScrollAnimations();
  init3DCardEffect();
  initTextSplitting();
  initSmoothScrolling();
  initPageTransitions();
  initNavbarEffects();
});

/**
 * Custom Cursor Effect - Disabled
 * Function kept for reference but not used
 */
function initCustomCursor() {
  // Cursor functionality removed as requested
  return;
}

/**
 * Parallax Effect
 * Creates depth with parallax scrolling for layers
 */
function initParallaxEffect() {
  const layers = document.querySelectorAll('.layer');
  
  window.addEventListener('scroll', throttle(() => {
    const scrollY = window.scrollY;
    
    layers.forEach(layer => {
      const speed = layer.getAttribute('data-speed') || 0.1;
      const yPos = -(scrollY * speed);
      layer.style.transform = `translateY(${yPos}px)`;
    });
  }, 10));
  
  // Parallax mouse movement
  const hero3d = document.querySelector('.hero-3d');
  if (hero3d) {
    hero3d.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const { width, height } = hero3d.getBoundingClientRect();
      
      const xPos = (clientX / width - 0.5) * 20;
      const yPos = (clientY / height - 0.5) * 20;
      
      const layers = hero3d.querySelectorAll('.layer');
      layers.forEach(layer => {
        const speed = layer.getAttribute('data-speed') || 1;
        layer.style.transform = `translateX(${xPos * speed}px) translateY(${yPos * speed}px) translateZ(${layer.getAttribute('data-z') || 0}px)`;
      });
    });
    
    hero3d.addEventListener('mouseleave', () => {
      const layers = hero3d.querySelectorAll('.layer');
      layers.forEach(layer => {
        layer.style.transition = 'transform 0.5s ease-out';
        layer.style.transform = `translateX(0) translateY(0) translateZ(${layer.getAttribute('data-z') || 0}px)`;
      });
    });
    
    hero3d.addEventListener('mouseenter', () => {
      const layers = hero3d.querySelectorAll('.layer');
      layers.forEach(layer => {
        layer.style.transition = 'transform 0.2s ease-out';
      });
    });
  }
}

/**
 * Scroll Animations
 * Animates elements as they come into view
 */
function initScrollAnimations() {
  // Select elements to animate
  const animatedElements = document.querySelectorAll('.text-reveal, .stagger-children, .skill-progress-bar, .card, .project-card');
  
  // Set up Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // For skill bars, set the width when visible
        if (entry.target.classList.contains('skill-progress-bar')) {
          const percentage = entry.target.getAttribute('data-percent');
          entry.target.style.width = `${percentage}%`;
        }
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Observe each element
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

/**
 * 3D Card Effect
 * Adds depth and 3D rotation to cards on hover
 */
function init3DCardEffect() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      // Calculate rotation values
      const rotateY = ((x / width) * 2 - 1) * 5; // -5 to 5 degree rotation
      const rotateX = ((y / height) * 2 - 1) * -5; // -5 to 5 degree rotation
      
      // Apply transform
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      
      // Add highlight effect
      const shine = card.querySelector('.card-shine') || document.createElement('div');
      if (!card.querySelector('.card-shine')) {
        shine.classList.add('card-shine');
        card.appendChild(shine);
      }
      
      // Position the shine effect
      shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 80%)`;
    });
    
    // Reset transform on mouse leave
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      const shine = card.querySelector('.card-shine');
      if (shine) {
        shine.remove();
      }
    });
  });
}

/**
 * Text Splitting
 * Splits text into characters for animated effects
 */
function initTextSplitting() {
  const textElements = document.querySelectorAll('.split-text');
  
  textElements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    
    // Split by words and then by characters
    const words = text.split(' ');
    
    words.forEach((word, wordIndex) => {
      const wordEl = document.createElement('span');
      wordEl.classList.add('word');
      wordEl.style.display = 'inline-block';
      
      const characters = word.split('');
      characters.forEach((char, charIndex) => {
        const charEl = document.createElement('span');
        charEl.classList.add('char');
        charEl.textContent = char;
        charEl.style.display = 'inline-block';
        charEl.style.opacity = '0';
        charEl.style.transform = 'translateY(20px)';
        charEl.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
        charEl.style.transitionDelay = `${(wordIndex * 0.05) + (charIndex * 0.03)}s`;
        
        wordEl.appendChild(charEl);
      });
      
      element.appendChild(wordEl);
      
      // Add space after words
      if (wordIndex < words.length - 1) {
        element.appendChild(document.createTextNode(' '));
      }
    });
    
    // Animate characters when element is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const chars = entry.target.querySelectorAll('.char');
          chars.forEach(char => {
            char.style.opacity = '1';
            char.style.transform = 'translateY(0)';
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    observer.observe(element);
  });
}

/**
 * Smooth Scrolling
 * Provides smooth scroll to anchor links
 */
function initSmoothScrolling() {
  // Select all anchor links with hash references
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Page Transitions
 * Adds smooth transitions between pages
 */
function initPageTransitions() {
  // Create transition element if it doesn't exist
  if (!document.querySelector('.page-transition')) {
    const transitionEl = document.createElement('div');
    transitionEl.classList.add('page-transition');
    document.body.appendChild(transitionEl);
  }
  
  const transitionEl = document.querySelector('.page-transition');
  
  // Handle clicks on links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && !link.target && link.href && !link.getAttribute('href').startsWith('#') && link.hostname === window.location.hostname) {
      e.preventDefault();
      
      // Start page transition
      transitionEl.classList.add('active');
      
      // Navigate after transition
      setTimeout(() => {
        window.location.href = link.href;
      }, 600);
    }
  });
  
  // On page load, handle exit transition
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      transitionEl.classList.add('exit');
      setTimeout(() => {
        transitionEl.classList.remove('active', 'exit');
      }, 600);
    }
  });
}

/**
 * Navbar Effects
 * Handle navbar animations and scrolling effects
 */
function initNavbarEffects() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  // Change navbar style on scroll
  window.addEventListener('scroll', throttle(() => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }, 100));
  
  // Handle mobile menu toggle
  const menuToggle = document.querySelector('.navbar-toggle');
  const menuItems = document.querySelector('.navbar-links');
  
  if (menuToggle && menuItems) {
    menuToggle.addEventListener('click', () => {
      menuItems.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!menuItems.contains(e.target) && !menuToggle.contains(e.target)) {
        menuItems.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  }
}

/**
 * Utility Functions
 */

// Throttle function to limit execution rate
function throttle(func, delay) {
  let lastCall = 0;
  return function(...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

// Debounce function
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

