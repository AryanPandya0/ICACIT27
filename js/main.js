/**
 * main.js
 * Core application initialization, toast feedback system, and utilities for ICACIT 2027
 */

(function () {
  'use strict';

  // --- Toast Notification System ---
  function showToast(message, duration = 3500) {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c084fc" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  window.showToast = showToast;

  // --- Scroll to Top Button ---
  function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 450) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- Interactive Speaker Card Trigger ---
  function initSpeakerCards() {
    document.querySelectorAll('.speaker-card').forEach((card) => {
      card.addEventListener('click', () => {
        const speakerName = card.querySelector('.speaker-name')?.textContent || 'Keynote Speaker';
        window.showToast(`Viewing research profile for ${speakerName}`);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initScrollToTop();
    initSpeakerCards();
    console.log('ICACIT 2027 International Conference Platform Initialized.');
  });
})();
