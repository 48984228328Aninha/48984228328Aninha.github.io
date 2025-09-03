const scroll = document.querySelector('.scroll');
const images = scroll.querySelectorAll('img');

// Calcula a largura total do **primeiro grupo**
let totalWidth = 0;
for (let i = 0; i < images.length / 2; i++) {
  totalWidth += images[i].offsetWidth;
}

// Define a variável CSS para a animação
scroll.style.setProperty('--scroll-width', `${totalWidth}px`);
