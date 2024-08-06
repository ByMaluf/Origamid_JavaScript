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

//Exercícios

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');
const cursosArray = Array.from(cursos);
const cursosDados = cursosArray.map((curso) => {
  return {
    titulo: curso.querySelector('h1').innerText,
    descricao: curso.querySelector('p').innerText,
    aulas: curso.querySelector('.aulas').innerText,
    horas: curso.querySelector('.horas').innerText,
  }
})
console.log(cursosDados)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

console.log(numeros.reduce((acumulador, atual) => {
  let maiorQueCem = atual > 100 ? acumulador.concat(atual) : acumulador
  return maiorQueCem
}, []))

//Retorna um array com todos os valores truthy
console.log(numeros.filter(function (numero) {
  return numero > 100
}))

//Retornar o primeiro elemento maior que 100
console.log(numeros.find((n) => {
  return n > 100
}))

//Retorna o index do primeiro elemento truthy
console.log(numeros.findIndex((n) => {
  return n > 100
}))

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado', 'Baixo']
console.log(instrumentos.some((palavra) => palavra === 'Baixo')); // retorna true para o primeiro lemento truthy;
console.log(instrumentos.includes('Baixo')); // Verifica se existe algum 'Baixo' na array;

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valorDasCompras = compras.reduce((valorTotal, valor, index, array) => {
  let valores = +valor.preco.toUpperCase().replace('R$ ', '').replace(',', '.')
  return valorTotal + valores;
}, 0)

console.log(valorDasCompras.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
