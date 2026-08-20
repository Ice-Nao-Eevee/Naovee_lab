// ── Scroll Reveal ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ── Nav background on scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 50
    ? 'rgba(5,5,16,0.92)' : 'rgba(5,5,16,0.6)';
});

// ── Stagger project card reveal ──
document.querySelectorAll('.project-card.reveal').forEach((card, i) => {
  card.style.transitionDelay = (i * 0.08) + 's';
});
