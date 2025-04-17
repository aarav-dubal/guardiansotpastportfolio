// Smooth reveal on scroll
const revealElements = document.querySelectorAll(".container, section, .dropdown");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition = "all 0.8s ease-out";
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  observer.observe(el);
});

// Button click feedback
document.querySelectorAll('.dropbtn').forEach(button => {
  button.addEventListener('click', () => {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => button.style.transform = 'scale(1)', 150);
  });
});

// Scroll to top when clicking the header
document.querySelector('header').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
