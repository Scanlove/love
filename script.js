// Obtener elementos principales
const countdownNumber = document.querySelector('.countdown-number');
const preloader = document.querySelector('.preloader');
const content = document.querySelector('.content');
const photos = document.querySelectorAll('.photo');
const modalOverlay = document.querySelector('.modal-overlay');
const modalPhoto = document.querySelector('.modal-photo');
const modalCloseBtn = document.querySelector('.modal-close');

// Función de cuenta regresiva y revelación del contenido
function countdown() {
  let count = 10;
  const countdownInterval = setInterval(() => {
    countdownNumber.textContent = count;
    count--;

    if (count === -1) {
      clearInterval(countdownInterval);
      preloader.style.display = 'none';
      content.classList.remove('hidden');
    }
  }, 1000);
}

// Modal para mostrar la foto seleccionada
photos.forEach((photo, index) => {
  photo.addEventListener('click', () => {
    modalPhoto.src = `foto${index + 1}.jpg`;
    modalOverlay.style.display = 'flex';
  });
});

// Cerrar el modal al hacer clic en la 'X'
modalCloseBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

// Iniciar el conteo regresivo
countdown();
