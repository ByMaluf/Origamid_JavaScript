// Todos são primitivos exceto os objetos.
var nome = 'Brenno'; // String
var idade = 24; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object
// Primitivos são dados imutáveis.

var nome = 'Brenno';
console.log(typeof nome);
// retorna string
// typeof null retorna objectm

'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
/* "JavaScript é "super" fácil"; // Inválido */

// TEMPLATE STRING
// Crase + ${}
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String

//EXERCÍCIOS
// Declare uma variável contendo uma string
const name = "BRENNO"
// Declare uma variável contendo um número dentro de uma string
const numeroDentroDeString = "24"
// Declare uma variável com a sua idade
const age = 24;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
const sobrenome = 'YSRAEL'
const nomeCompleto = name + ' ' + sobrenome
const nomeCompleto2 = `${name} ${sobrenome}`
console.log(nomeCompleto, nomeCompleto2)
// Coloque a seguinte frase em uma variável: It's time
const primeiraFrase = "It's time";
const segundaFrase = 'It\'\s time';
console.log(primeiraFrase, segundaFrase)
// Verifique o tipo da variável que contém o seu nome
const verificarTipoDeDado = typeof name
console.log(verificarTipoDeDado)
