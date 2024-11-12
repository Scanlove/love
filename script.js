// Obtener elementos principales
const countdownNumber = document.querySelector('.countdown-number');
const preloader = document.querySelector('.preloader');
const photos = document.querySelectorAll('.photo');
const photoWrappers = document.querySelectorAll('.photo-wrapper');
const modalOverlay = document.querySelector('.modal-overlay');
const modalPhoto = document.querySelector('.modal-photo');
const modalCloseBtn = document.querySelector('.modal-close');
const heartsContainer = document.querySelector('.hearts-container');
const message = document.querySelector('.message');

// Función para generar corazones
function createHearts() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Duración aleatoria para cada corazón
  heart.innerText = '❤';
  heartsContainer.appendChild(heart);

  // Remover el corazón después de la animación
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Función de cuenta regresiva y revelación del contenido
function countdown() {
  let count = 10;
  const countdownInterval = setInterval(() => {
    countdownNumber.textContent = count;
    createHearts(); // Genera un corazón en cada segundo de cuenta regresiva
    count--;

    if (count === -1) {
      clearInterval(countdownInterval);
      preloader.style.display = 'none';  // Ocultar preloader
      startPhotoSlideshow(); // Iniciar presentación de fotos una vez finalizada la cuenta regresiva
    }
  }, 1000);
}

// Función para mostrar la foto actual y ocultar las demás
let currentPhotoIndex = 0;

function showPhoto(index) {
  photoWrappers.forEach((wrapper, i) => {
    wrapper.classList.toggle('active', i === index);
  });
 
}

// Función para avanzar a la siguiente foto
function nextPhoto() {
  currentPhotoIndex = (currentPhotoIndex + 1) % photoWrappers.length;
  showPhoto(currentPhotoIndex);
}

// Iniciar la presentación de fotos
function startPhotoSlideshow() {
  showPhoto(currentPhotoIndex);
  setInterval(nextPhoto, 3000); // Cambiar la foto cada 3 segundos
}

// Modal para mostrar la foto seleccionada al hacer clic
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
