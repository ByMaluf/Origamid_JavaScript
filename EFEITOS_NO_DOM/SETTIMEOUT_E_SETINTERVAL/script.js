
// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// function toggleBgColor() {
//   document.body.classList.toggle('active')
// }

// setInterval(toggleBgColor, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const startPause = document.querySelector('[data-start]');
const reset = document.querySelector('[data-reset]');
const temporizador = document.querySelector('[data-timer]');

let valor = 0.0;
let timer; // Variável para armazenar o intervalo
let isRunning = false; // Para controlar se o timer está rodando

const events = ['click', 'dblclick'];

events.forEach((event) => {
  startPause.addEventListener(event, stopwatch);
  reset.addEventListener(event, resetTimer);
});

function stopwatch(e) {
  if (e.type === 'dblclick') {
    if (timer) {
      clearInterval(timer);
      timer = null;
      startPause.textContent = 'Play'
      isRunning = false; // Atualiza o estado
    }
  }

  if (e.type === 'click') {
    if (!isRunning) {
      // Inicia ou continua o timer
      timer = setInterval(() => {
        temporizador.innerText = valor++;
      }); // Incrementa a cada segundo
      startPause.textContent = 'Pause'
      isRunning = true; // Atualiza o estado
    }
  }
}

function resetTimer(e) {
  clearInterval(timer); // Para o temporizador, se estiver rodando
  timer = null;
  valor = 0.0; // Reseta o valor
  temporizador.innerText = valor; // Atualiza o display
  isRunning = false; // Atualiza o estado
}