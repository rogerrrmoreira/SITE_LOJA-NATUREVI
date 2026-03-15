document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('[data-scroll]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id && id.startsWith('#')) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  document.querySelectorAll('[data-whatsapp]').forEach(btn => {
    btn.addEventListener('click', () => {
      const phone = '5551997262356';
      const text = encodeURIComponent('Olá! Vim pelo site da Naturevi e gostaria de mais informações.');
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    });
  });
});