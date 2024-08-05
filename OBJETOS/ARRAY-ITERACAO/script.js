// [].forEach()

// [].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).

const carros1 = ['Ford', 'Fiat', 'Honda'];
carros1.forEach(function (item, index, array) {
  console.log(item.toUpperCase());
});

// com Arrow Function
carros1.forEach((item, index, array) => {
  console.log(item.toUpperCase());
});

// O método sempre retorna undefinedv // ForEach não retorna nada! É um método void.


//Arrow Function

// const li = document.querySelectorAll('li');
// li.forEach(i => i.classList.add('ativa'));
// li.forEach(function(item) {
//   item.classList.add('ativa');
// });

// Modificar a Array Original
// O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original.

// const carros = ['Ford', 'Fiat', 'Honda'];
// carros.forEach((item, index, array) => {
//   array[index] = 'Carro ' + item;
// });

// carros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']

// ----------------------------------------------------------

// [].map()

// [].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.

const carros2 = ['Ford', 'Fiat', 'Honda'];
const newCarros1 = carros2.map((item) => {
  return 'Carro ' + item;
});

carros2; // ['Ford', 'Fiat', 'Honda']
newCarros1; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']; 

// Valor Retornado
// Se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que não possui o return, será undefined.

// Valor Retornado
// Se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que não possui o return, será undefined.

const carros = ['Ford', 'Fiat', 'Honda'];
const newCarros2 = carros.map((item) => {
  const novoValor = 'Carro ' + item;
});

newCarros2; // [undefined, undefined, undefined];

// Arrow Function e [].map()
// Uma Arrow Function de linha única e sem chaves irá retornar o valor após a fat arrow =>.

// const numeros = [2, 4, 6, 8, 10, 12, 14];
// const numerosX3 = numeros.map(n => n * 3);

// numerosX3; // [6, 12, 18, 24, 30, 36, 42];

// [].map() vs [].forEach()
// Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores.

// [].map() com Objetos
// Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min);
// [15, 10, 20, 25];

const puxarNomes = aula => aula.nome;
const nomesAulas = aulas.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']


// [].reduce()
// [].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.

const aulas1 = [10, 25, 30];
const total1 = aulas1.reduce((acumulador, atual) => {
  return acumulador + atual;
});
total1; // 65

const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
total2; // 165



const arrayDeNumeros = [100, 45, 3, 60];

console.log(arrayDeNumeros.reduce((acumulador, valorAtual, index, array) => {
  return acumulador + valorAtual
}, 0))



