// JavaScript para revelar seções ao rolar
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section:not(.hero)');

  function checkScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        section.classList.add('visible');
      }
    });
  }

  // Verificar inicialmente
  checkScroll();

  // Verificar ao rolar
  window.addEventListener('scroll', checkScroll);
});
