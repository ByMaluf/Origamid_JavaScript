var nome = "Brenno"
var idade = 24;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade)

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco)

// Variáveis servem para evitar repetição
// Conceito básico da programação (NÃO REPITA!)
//CONCEITO DRY (DONT'T REPEAT YOURSELF)

// Utiliza-se a vírgula para criar mais de uma variável, sem repetir a palavra chave var.

var nome = 'Brenno',
  idade = 24,
  possuiFaculdade = true;

var semDefinir;
// retorna undefined
console.log(semDefinir)

// COMO DECLARAR VARIÁVEIS
/*
Os nomes podem iniciar com $, _, ou letras;
Podem conter números mas não iniciar com eles;
Case sensitive nome é diferente de Nome;
Camel case - É comum nomearmos assim: abrirModal.
*/

/*
// INVÁLIDO
var §nome;
var function;
var 1possuiFaculdade;

// VÁLIDO
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;
*/

// HOISTING
// São movidas para cima do código, porém o valor atribuído não é movido.
console.log(Nome);
var Nome = 'BRENNO';
// Retorna undefined

var profissao = 'Designer';
console.log(profissao);
// Retornar Designer


//MUDAR VALOR ATRIBUIDO
/*
É possível mudar os valores atribuídos a variáveis declaradas com var e let. Porém não é possível modificar valores das declaradas com const
*/

var IDADE = 28;
IDADE = 29;

let PRECO = 50;
PRECO = 25;

// const jaPossuiFaculdade = true;
// jaPossuiFaculdade = false;
// Retorna um erro

//EXERCÍCIOS
// Declarar uma variável com o seu nome

const Name = 'Brenno'

// Declarar uma variável com a sua idade
const age = 24

// Declarar uma variável com a sua comida
// favorita e não atribuir valor

let comidaFavorita;

// Atribuir valor a sua comida favorita

comidaFavorita = 'Yakisoba'

// Declarar 5 variáveis diferentes sem valores
let variavelSemValor1,
  variavelSemValor2,
  variavelSemValor3,
  variavelSemValor4,
  variavelSemValor5;

console.log(Name, age, comidaFavorita, variavelSemValor1, variavelSemValor2, variavelSemValor3, variavelSemValor4, variavelSemValor5)