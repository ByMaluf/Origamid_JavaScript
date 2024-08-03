"use strict";
// Retorne um número aleatório
// entre 1050 e 2000
const numeroAletorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(numeroAletorio)

// Retorne o maior número da lista abaixo
// const numeros = '4, 5, 20, 8, 9';
console.log(Math.max(...numeros.split(',')));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
  'R$ 230  ', 'r$  200'];
 
let total = 0;
listaPrecos.forEach((preco) => {
  const minusculo = preco.toLocaleLowerCase();
  const semSifrao = minusculo.replace('r$', '').replace(',', '.').trim();
  const numeroConvertido = Math.round(+semSifrao)
  total += numeroConvertido
})
console.log(total)