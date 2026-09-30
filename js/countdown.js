/**
 * countdown.js
 * Manages live countdown calculations for ICACIT 2027 (June 2027)
 */

(function () {
  'use strict';

  // Tentative Target Dates matching ICACIT 2027
  const TARGET_DATES = {
    // Tentative Submission Deadline: March 31, 2027 23:59:59 IST
    submission: new Date('2027-03-31T23:59:59').getTime(),
    // Tentative Conference Start: June 1, 2027 09:00:00 IST
    conference: new Date('2027-06-01T09:00:00').getTime()
  };

  /**
   * Calculates remaining days, hours, minutes, and seconds
   */
  function calculateTimeRemaining(targetTimestamp) {
    const now = new Date().getTime();
    const difference = targetTimestamp - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isExpired: false };
  }

  function updateElement(id, value) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = String(value).padStart(2, '0');
    }
  }

  function tick() {
    const subTime = calculateTimeRemaining(TARGET_DATES.submission);
    const confTime = calculateTimeRemaining(TARGET_DATES.conference);

    updateElement('cd-days', confTime.days);
    updateElement('cd-hours', confTime.hours);
    updateElement('cd-mins', confTime.minutes);
    updateElement('cd-secs', confTime.seconds);

    updateElement('sub-days', subTime.days);
    updateElement('sub-hours', subTime.hours);
    updateElement('sub-mins', subTime.minutes);
    updateElement('sub-secs', subTime.seconds);
  }

  function initCountdown() {
    tick();
    setInterval(tick, 1000);
  }

  document.addEventListener('DOMContentLoaded', initCountdown);
})();
