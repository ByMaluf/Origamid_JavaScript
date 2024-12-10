// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));


// Crie uma IIFE e isole o escopo
// de qualquer código JS.

const oi = 'Oi';
(() => {
  const oi = 'Olá';
  console.log(oi);
})()

console.log(oi);

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

active(function () {
  console.log('Teste de Active');
})
