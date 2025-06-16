const container = document.getElementById('cartes-conteneur');
const nextBtn = document.querySelector('.slider-btn.next');
const prevBtn = document.querySelector('.slider-btn.prev');

nextBtn.addEventListener('click', () => {
  container.scrollBy({ left: container.clientWidth * 0.9, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  container.scrollBy({ left: -container.clientWidth * 0.9, behavior: 'smooth' });
});