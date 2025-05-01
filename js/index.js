// Updated JavaScript for section visibility
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section:not(.hero)');
  const heroSection = document.querySelector('.hero');

  // Make hero visible immediately
  if (heroSection) {
    heroSection.classList.add('visible');
  }

  function checkScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        section.classList.add('visible');
      }
    });
  }

  // Verify initially
  checkScroll();

  // Check when scrolling
  window.addEventListener('scroll', checkScroll);
});
