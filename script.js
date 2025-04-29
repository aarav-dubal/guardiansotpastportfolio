// Reveal animations on scroll
document.addEventListener("DOMContentLoaded", () => {
  const revealSections = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  revealSections.forEach(section => {
    observer.observe(section);
  });
});
