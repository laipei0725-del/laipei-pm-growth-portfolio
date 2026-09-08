/**
 * Main Application Logic for 賴沛儒 (Pei-Ju Lai) Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initScrollReveal();
  initCopyHelper();
});

/**
 * Header Scrolled State
 */
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile Drawer Menu
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isExpanded = navMenu.classList.contains('active');
    toggleBtn.setAttribute('aria-expanded', isExpanded);
  });

  // Close menu when clicking nav links
  const navLinks = navMenu.querySelectorAll('.nav-link, .btn-nav-cta');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

/**
 * Scroll Reveal Animation Observer
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Optionally unobserve if single animation desired
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * Copy Email Helper Toast
 */
function initCopyHelper() {
  const copyBtn = document.getElementById('copyEmailBtn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = 'laipei0725@gmail.com';
    
    navigator.clipboard.writeText(email).then(() => {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        已複製信箱！
      `;
      copyBtn.style.backgroundColor = 'var(--accent-sage)';
      copyBtn.style.color = '#FFF';

      setTimeout(() => {
        copyBtn.innerHTML = originalText;
        copyBtn.style.backgroundColor = '';
        copyBtn.style.color = '';
      }, 2500);
    }).catch(err => {
      console.error('Copy failed:', err);
    });
  });
}
