const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const carouselInner = document.getElementById('carousel-inner');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function updateCarousel() {
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}

// Cambiar cada 4 segundos (4000 ms)
setInterval(nextSlide, 4000);

// Si querés seguir manteniendo botones manuales (opcionales):
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

nextBtn.addEventListener('click', () => {
  nextSlide();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});
