/**
 * AT SENSEI ACADEMY — MAIN APPLICATION ENTRY
 * Orchestrator for components, animations, navigation, drawers & interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Submodules
  PolicyModal.init();
  ProgramManager.init();
  FormManager.init();

  // 2. Header Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }, { passive: true });

  // 3. Mobile Navigation Drawer
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileBackdrop = document.getElementById('mobile-drawer-backdrop');
  const mobileCloseBtn = document.getElementById('mobile-drawer-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    if (!mobileDrawer || !mobileBackdrop) return;
    mobileDrawer.classList.add('is-open');
    mobileBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileDrawer || !mobileBackdrop) return;
    mobileDrawer.classList.remove('is-open');
    mobileBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileMenu);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // 4. Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver is unsupported
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // 5. FAQ Accordions
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      const isOpen = item.classList.contains('is-open');

      // Close all accordion items
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('is-open'));

      if (!isOpen) {
        item.classList.add('is-open');
      }
    });
  });

  // 6. Policy Modal Links Trigger
  const policyTriggers = document.querySelectorAll('[data-open-policy]');
  policyTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const policyKey = trigger.getAttribute('data-open-policy');
      PolicyModal.open(policyKey);
    });
  });

  // 7. Smooth Scroll for internal hash links with offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  console.log("AT Sensei Academy platform initialized successfully.");
});
