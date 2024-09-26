
// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// function toggleBgColor() {
//   document.body.classList.toggle('active')
// }

// setInterval(toggleBgColor, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

// const startPause = document.querySelector('[data-start]');
// const reset = document.querySelector('[data-reset]');
// const temporizador = document.querySelector('[data-timer]');

// let valor = 0.0;
// let timer;
// let isRunning = false;

// ['click', 'dblclick'].forEach((event) => {
//   startPause.addEventListener(event, stopwatch);
//   reset.addEventListener(event, resetTimer);
// });

// function stopwatch(e) {
//   if (e.type === 'dblclick') {
//     if (timer) {
//       clearInterval(timer);
//       timer = null;
//       startPause.textContent = 'Play'
//       isRunning = false;
//     }
//   }

//   if (e.type === 'click') {
//     if (!isRunning) {
//       timer = setInterval(() => {
//         temporizador.innerText = valor++;
//       });
//       startPause.textContent = 'Pause'
//       isRunning = true;
//     }
//   }
// }

// function resetTimer(e) {
//   clearInterval(timer);
//   timer = null;
//   valor = 0.0;
//   temporizador.innerText = valor;
//   isRunning = false;
// }

const start = document.querySelector('[data-start]');
const pause = document.querySelector('[data-pause]');
const reset = document.querySelector('[data-reset]');
const timer = document.querySelector('[data-timer]');

let clock;
let value;

start.addEventListener('click', startTime);
pause.addEventListener('dblclick', pauseTime);
reset.addEventListener('click', resetTime);

function startTime() {
  value = +timer.textContent
  clock = setInterval(() => {
    timer.textContent = value++
  }, 100)
  start.setAttribute('disabled', '')
}

function pauseTime() {
  clearInterval(clock);
  start.removeAttribute('disabled')
}

function resetTime() {
  clearInterval(clock)
  value = 0;
  timer.innerHTML = value
  start.removeAttribute('disabled')
}

