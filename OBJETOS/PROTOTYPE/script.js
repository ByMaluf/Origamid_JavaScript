// PROTOTYPE
// A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.

// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.andar = function () {
//     return this.nome + 'andou';
//   }
// }
// Definindo um método estático diretamente na função construtora
// Pessoa.levantar = function (nome) {
//   return nome + ' levantou';
// }
// const andre = new Pessoa('André', 28);

// console.log()

//console.log(Pessoa.prototype); // retorna o objeto
//console.log(andre.prototype); // undefined

/*
function Pessoa(nome) {
  this.nome = nome;
  this.idade = 25;
}

Pessoa.prototype.levantar = function () {
  return this.nome + ' levantou';
}

const brenno = new Pessoa('Brenno');

FUNCAO.PROTOTYPE
É possível adicionar novas propriedades e métodos ao objeto prototype.
*/

/*
Pessoa.prototype.andar = function() {
  return this.nome + ' andou';
}
Pessoa.prototype.nadar = function() {
  return this.nome + ' nadou';
}
console.log(Pessoa.prototype); // retorna o objeto
*/

// ACESSO AO PROTÓTIPO
// O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor. Lembrando, prototype é uma propriedade de funções apenas

/*
const andre = new Pessoa('André', 28);
andre.nome;
andre.idade;
andre.andar();
andre.nadar();
*/

// PROTO
// O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__. É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente.

// Acessam o mesmo método
// mas __proto__ não terá

/*
acesso ao this.nome
andre.andar();
andre.__proto__.andar();
*/

//Exercício
// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`
}

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

const dadosNodeList = Object.getOwnPropertyNames(NodeList.prototype);
const dadosHTMLCollection = Object.getOwnPropertyNames(HTMLCollection.prototype);
const dadosDocument = Object.getOwnPropertyNames(Document.prototype)
console.log(dadosDocument);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

// li; //HTMLLIElement
// li.click; //Function
// li.innerText; // String
// li.value; // Number
// li.hidden; // Boolean
// li.offsetLeft; // Number
// li.click(); //Undefined

// Qual o construtor do dado abaixo:
// li.hidden.constructor.name;
