const scroll = document.querySelector('.scroll');
const images = scroll.querySelectorAll('img');

// Calcula a largura total do **primeiro grupo**
let totalWidth = 0;
for (let i = 0; i < images.length / 2; i++) {
  totalWidth += images[i].offsetWidth;
}

// Define a variável CSS para a animação
scroll.style.setProperty('--scroll-width', `${totalWidth}px`);

function MudarTema() {
  document.getElementById("MudarCor").onclick = MudarTemaEscuro;
  document.getElementById("MudarCor").innerHTML = "Versão escura";
  document.body.style.backgroundImage = "url('escuro.jpg')";

}

function MudarTemaEscuro() {
  document.getElementById("MudarCor").onclick = MudarTema;
  document.getElementById("MudarCor").innerHTML = "Versão clara";
  document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1638272181967-7d3772a91265?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG15c3RpYyUyMHB1cnBsZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')";
}

// Fade-in lateral ao rolar (scroll)
function fadeSobre() {
  const sobreSection = document.getElementById('sobre');
  if (!sobreSection) return;
  const fadeElements = sobreSection.querySelectorAll('.fade-in-left, .fade-in-right');
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) {
      el.style.animationPlayState = 'running';
    }
  });
}

window.addEventListener('scroll', fadeSobre);
window.addEventListener('DOMContentLoaded', fadeSobre);