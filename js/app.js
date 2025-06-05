// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

// Observe all project cards and contact section
document.querySelectorAll('.projectos-card, .contacto-seccion').forEach((element) => {
  observer.observe(element);
});