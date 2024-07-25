// OBJETOS
// Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? É possível com o Object.create, mas veremos ele mais tarde.

/*
const carro = {
  marca: 'Marca',
  preco: 0,
}

const honda = carro;
honda.marca = 'Honda';
honda.preco = 4000;

const fiat = carro;
fiat.marca = 'Fiat';
fiat.preco = 3000;
*/

// Honda e Fiat fazem referência ao mesmo objeto e o sobrescrevem.

// Constructor Functions
// Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.
// Usar Pascal Case, ou seja, começar com letra maiúscula.

/*
function Carro() {
  this.marca = 'Marca';
  this.preco = 0;

}

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 3000;

const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 2000;
*/

// NEW KEYWORD
// A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela.

/*
1 Cria um novo objeto
honda = {};

2 Define o protótipo
honda.prototype = Carro.prototype;

3 Aponta a variável this para o objeto
this = honda;

4 Executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;

5 Retorna o novo objeto
return honda = {
  marca: 'Marca',
  preco: 0,
}
*/

/*
PARÂMETROS E ARGUMENTOS
Podemos passar argumentos que serão utilizados no momento da criação do objeto.

function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}
const honda = new Carro('Honda', 4000);
const fiat = new Carro('Fiat', 3000);
*/

/*
 THIS KEYWORD
 O this faz referência ao próprio objeto construído com a Constructor Function.
*/
// function Carro(marca, precoInicial) {
//   const taxa = 1.2;
//   const precoFinal = precoInicial * taxa;
//   this.marca = marca;
//   this.preco = precoFinal;
// }

// const honda = new Carro('Honda', 2000);


// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.element().classList.add('ativo');
//   }
// }

// Dom.seletor = 'ul';
// Dom.ativar();

// function Dom(seletor) {
//   this.element = function () {
//     return document.querySelector(seletor);
//   },
//     this.ativar = function () {
//       this.element().classList.add('ativo');
//     }
// }


// const li = new Dom('li');
// const ul = new Dom('ul');
// console.log(ul.element());
// console.log(li.element());

// Exercícios
// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + ' andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(elementos) {
  this.elements = document.querySelectorAll(elementos);
  this.addClass = function (...classe) {
    this.elements.forEach((element) => {
      element.classList.add(...classe)
    })
  }
  this.removeClass = function (...classe) {
    this.elements.forEach((element) => {
      element.classList.remove(...classe)
    })
  }
}

const listLi = new Dom('li');
listLi.addClass('Deus', 'vs', 'Demonio');
listLi.removeClass('Demonio');
