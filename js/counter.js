/**
 * Numeric Counter Animation for Metrics Dashboard
 */

document.addEventListener('DOMContentLoaded', () => {
  const metricCards = document.querySelectorAll('.metric-card');
  if (!metricCards.length) return;

  let animated = false;

  const animateCounters = () => {
    if (animated) return;
    
    metricCards.forEach(card => {
      const numElement = card.querySelector('.metric-number');
      if (!numElement) return;

      const targetValue = parseInt(card.dataset.value, 10);
      const suffix = card.dataset.suffix || '';
      const prefix = card.dataset.prefix || '';

      if (isNaN(targetValue)) return;

      let current = 0;
      const step = Math.max(1, Math.floor(targetValue / 50));
      const duration = 1500; // ms
      const intervalTime = Math.max(16, duration / (targetValue / step));

      const timer = setInterval(() => {
        current += step;
        if (current >= targetValue) {
          current = targetValue;
          clearInterval(timer);
        }
        numElement.textContent = `${prefix}${current.toLocaleString()}${suffix}`;
      }, intervalTime);
    });

    animated = true;
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  metricCards.forEach(card => observer.observe(card));
});
