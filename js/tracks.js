/**
 * tracks.js
 * Controls interactive research thematic focus areas accordion expansion
 * for ICACIT 2027.
 */

(function () {
  'use strict';

  function initTracks() {
    const trackCards = document.querySelectorAll('.track-item-card');

    trackCards.forEach((card) => {
      card.addEventListener('click', () => {
        const isActive = card.classList.contains('active');

        // Optional: toggle others
        trackCards.forEach((c) => {
          if (c !== card) {
            c.classList.remove('active');
            c.setAttribute('aria-expanded', 'false');
          }
        });

        card.classList.toggle('active', !isActive);
        card.setAttribute('aria-expanded', String(!isActive));
      });

      // Keyboard accessibility
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', initTracks);
})();
