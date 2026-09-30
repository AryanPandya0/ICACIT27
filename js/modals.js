/**
 * modals.js
 * Controls interactive modals for Paper Submission (CMT), Registration,
 * Keynote Speakers, Venue Logistics, and Guidelines.
 */

(function () {
  'use strict';

  function initModals() {
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    const closeButtons = document.querySelectorAll('.modal-close-btn');

    // Open Modal
    window.openModal = function (modalId) {
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        targetModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    };

    // Close Modal
    window.closeModal = function (modalId) {
      const targetModal = modalId ? document.getElementById(modalId) : document.querySelector('.modal-overlay.active');
      if (targetModal) {
        targetModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    };

    // Backdrop click
    modalOverlays.forEach((overlay) => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    // Close buttons
    closeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const parentModal = btn.closest('.modal-overlay');
        if (parentModal) {
          parentModal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal-overlay.active');
        if (activeModal) {
          activeModal.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });

    // Trigger buttons
    document.querySelectorAll('[data-modal-target]').forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = trigger.getAttribute('data-modal-target');
        if (targetId) {
          window.openModal(targetId);
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', initModals);
})();
