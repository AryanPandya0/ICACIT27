/**
 * navigation.js
 * Handles responsive Dynamic Island navigation, on-scroll styling morph,
 * and smooth scrolling for ICACIT 2027.
 */

(function () {
  'use strict';

  function initNavigation() {
    const dynamicIslandNav = document.getElementById('dynamicIslandNav');
    const mobileToggle = document.getElementById('mobileNavToggle');
    const navMenuList = document.getElementById('navMenuList');

    // On-scroll Dynamic Island elevation / morph
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        dynamicIslandNav?.classList.add('is-scrolled');
      } else {
        dynamicIslandNav?.classList.remove('is-scrolled');
      }
    });

    // Mobile Drawer Toggle
    if (mobileToggle && navMenuList) {
      mobileToggle.addEventListener('click', () => {
        const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
        mobileToggle.setAttribute('aria-expanded', !isExpanded);
        navMenuList.classList.toggle('mobile-open');

        const iconSvg = mobileToggle.querySelector('svg');
        if (iconSvg) {
          if (!isExpanded) {
            iconSvg.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
          } else {
            iconSvg.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
          }
        }
      });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenuList && navMenuList.classList.contains('mobile-open')) {
        if (!navMenuList.contains(e.target) && !mobileToggle?.contains(e.target)) {
          navMenuList.classList.remove('mobile-open');
          if (mobileToggle) {
            mobileToggle.setAttribute('aria-expanded', 'false');
            const iconSvg = mobileToggle.querySelector('svg');
            if (iconSvg) {
              iconSvg.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
            }
          }
        }
      }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            if (navMenuList && navMenuList.classList.contains('mobile-open')) {
              navMenuList.classList.remove('mobile-open');
              if (mobileToggle) {
                mobileToggle.setAttribute('aria-expanded', 'false');
                const iconSvg = mobileToggle.querySelector('svg');
                if (iconSvg) {
                  iconSvg.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
                }
              }
            }

            const headerOffset = 90;
            const elementPosition = targetEl.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', initNavigation);
})();
