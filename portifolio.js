var progress = new ProgressBar.Circle('#progress-container', {
    color: '#9f7be7',         // cor da barra
  strokeWidth: 10,           // largura da barra
  trailWidth: 10,            // largura da trilha (fundo)
  trailColor: '#eee',       // cor da trilha
  duration: 2000,           // duração da animação em ms
  easing: 'easeInOut'
});
function updateProgressText(state, circle) {
      // Atualiza o texto conforme o progresso
      circle.setText(Math.round(circle.value() * 100) + '%');
}
progress.animate(0.75, {
  step: updateProgressText
});

var progress1 = new ProgressBar.Circle('#progress-container1', {
    color: '#9f7be7',         // cor da barra
  strokeWidth: 10,           // largura da barra
  trailWidth: 10,            // largura da trilha (fundo)
  trailColor: '#eee',       // cor da trilha
  duration: 2000,           // duração da animação em ms
  easing: 'easeInOut'
});
function updateProgressText(state, circle) {
      // Atualiza o texto conforme o progresso
      circle.setText(Math.round(circle.value() * 100) + '%');
}
progress1.animate(0.80, {
  step: updateProgressText
});

var progress2 = new ProgressBar.Circle('#progress-container2', {
    color: '#9f7be7',         // cor da barra
  strokeWidth: 10,           // largura da barra
  trailWidth: 10,            // largura da trilha (fundo)
  trailColor: '#eee',       // cor da trilha
  duration: 2000,           // duração da animação em ms
  easing: 'easeInOut'
});
function updateProgressText(state, circle) {
      // Atualiza o texto conforme o progresso
      circle.setText(Math.round(circle.value() * 100) + '%');
}
progress2.animate(0.90, {
  step: updateProgressText
});

var progresso = new ProgressBar.Circle('#progress-container6', {
    color: '#9f7be7',         // cor da barra
  strokeWidth: 10,           // largura da barra
  trailWidth: 10,            // largura da trilha (fundo)
  trailColor: '#eee',       // cor da trilha
  duration: 2000,           // duração da animação em ms
  easing: 'easeInOut'
});
function updateProgressText(state, circle) {
      // Atualiza o texto conforme o progresso
      circle.setText(Math.round(circle.value() * 100) + '%');
}
progresso.animate(0.75, {
  step: updateProgressText
});
var progresso1 = new ProgressBar.Circle('#progress-container7', {
    color: '#9f7be7',         // cor da barra
  strokeWidth: 10,           // largura da barra
  trailWidth: 10,            // largura da trilha (fundo)
  trailColor: '#eee',       // cor da trilha
  duration: 2000,           // duração da animação em ms
  easing: 'easeInOut'
});
function updateProgressText(state, circle) {
      // Atualiza o texto conforme o progresso
      circle.setText(Math.round(circle.value() * 100) + '%');
}
progresso1.animate(0.75, {
  step: updateProgressText
});

var progresso2 = new ProgressBar.Circle('#progress-container8', {
    color: '#9f7be7',         // cor da barra
  strokeWidth: 10,           // largura da barra
  trailWidth: 10,            // largura da trilha (fundo)
  trailColor: '#eee',       // cor da trilha
  duration: 2000,           // duração da animação em ms
  easing: 'easeInOut'
});
function updateProgressText(state, circle) {
      // Atualiza o texto conforme o progresso
      circle.setText(Math.round(circle.value() * 100) + '%');
}
progresso2.animate(0.75, {
  step: updateProgressText
});
    



