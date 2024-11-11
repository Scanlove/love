// Obtener todos los elementos con la clase .photo
const photos = document.querySelectorAll('.photo');

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
