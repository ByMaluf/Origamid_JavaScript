export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semamaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1])

  if (horarioAberto && semamaAberto) {
    funcionamento.classList.add('aberto')
  }
}

/*
function transformarDia(tempo) {
  return tempo / (24 * 60 * 60 * 1000)
}
const agora = new Date();
const futuro = new Date('Dec 24 2024 23:59');

const diasAgora = transformarDia(agora.getTime())
const diasFuturo = transformarDia(futuro.getTime())

console.log(Math.floor(diasFuturo - diasAgora))
*/

