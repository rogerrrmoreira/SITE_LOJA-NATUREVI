// ===== NAV: shrink ao rolar + menu mobile =====
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Fecha menu ao clicar em link
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ===== FADE-IN ao entrar na viewport =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ===== SMOOTH SCROLL nos links internos =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Cards de produto: clique abre WhatsApp =====
document.querySelectorAll('.produto-card').forEach(card => {
  card.addEventListener('click', () => {
    const produto = card.querySelector('h3')?.textContent || '';
    const msg = encodeURIComponent(`Olá! Gostaria de saber mais sobre: ${produto}`);
    window.open(`https://wa.me/5551997262356?text=${msg}`, '_blank');
  });
});

// ===== Ano dinâmico no footer =====
const anoEl = document.getElementById('ano-atual');
if (anoEl) anoEl.textContent = new Date().getFullYear();
