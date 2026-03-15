let atual = 0;
const total = 4;
const track = document.getElementById('track');
const dots = document.querySelectorAll('.dot');
const contador = document.getElementById('contador');
const btnEsq = document.getElementById('btnEsq');
const btnDir = document.getElementById('btnDir');

function atualizar() {
  track.style.transform = `translateX(-${atual * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('ativo', i === atual));
  contador.textContent = `${atual + 1} / ${total}`;
  btnEsq.disabled = atual === 0;
  btnDir.disabled = atual === total - 1;

  // Volta ao topo do slide ao navegar
  const slides = document.querySelectorAll('.slide');
  slides[atual].scrollTop = 0;
}

function mover(dir) {
  const novo = atual + dir;
  if (novo >= 0 && novo < total) {
    atual = novo;
    atualizar();
  }
}

dots.forEach(d => {
  d.addEventListener('click', () => {
    atual = parseInt(d.dataset.i);
    atualizar();
  });
});

// Navegação por teclado
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') mover(1);
  if (e.key === 'ArrowLeft') mover(-1);
});

// Suporte a swipe no celular
let touchX = null;
document.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; });
document.addEventListener('touchend', e => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) mover(dx < 0 ? 1 : -1);
  touchX = null;
});

// Botão "Quero esta opção" abre WhatsApp com mensagem personalizada
function escolher(opcao) {
  const nomes = ['', 'Institucional Moderno', 'Catálogo de Loja', 'Comercial Regional', 'Premium (identidade do cartão)'];
  const msg = encodeURIComponent(
    `Olá! Vi as opções de site da Naturevi e gostei da Opção ${opcao} — ${nomes[opcao]}. Podemos conversar sobre o projeto? 🌿`
  );
  window.open(`https://wa.me/5551997262356?text=${msg}`, '_blank');
}
