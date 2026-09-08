/**
 * Antigravity 3D Tilt Parallax Effect for Portfolio Cards
 * Soft mouse interaction without heavy libraries
 */

document.addEventListener('DOMContentLoaded', () => {
  const tiltCards = document.querySelectorAll('.tilt-card, .project-card, .hero-profile-card');

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within element
      const y = e.clientY - rect.top;  // y position within element

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles (-8deg to +8deg limit)
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      card.style.transition = 'transform 0.6s ease';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });
  });
});
