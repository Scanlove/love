// Obtener todos los elementos con la clase .photo
const photos = document.querySelectorAll('.photo');
const countdownNumber = document.querySelector('.countdown-number');
const modalOverlay = document.querySelector('.modal-overlay');
const modalPhoto = document.querySelector('.modal-photo');
const modalCloseBtn = document.querySelector('.modal-close');

// Función para observar la aparición de las fotos
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  rootMargin: '0px',
  threshold: 0.5
});

// Observar cada foto
photos.forEach((photo) => {
  observer.observe(photo);
});

// Función para el contador regresivo
function countdown() {
  let count = 10;
  const countdownInterval = setInterval(() => {
    countdownNumber.textContent = count;
    count--;

    if (count === -1) {
      clearInterval(countdownInterval);
      countdownNumber.textContent = '';
    }
  }, 1000);
}

// Función para abrir la imagen en modal
photos.forEach((photo, index) => {
  photo.addEventListener('click', () => {
    modalPhoto.src = `foto${index + 1}.png`;
    modalOverlay.style.display = 'flex';
  });
});

// Función para cerrar el modal
modalCloseBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

// Iniciar el contador regresivo
countdown();
