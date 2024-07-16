var videoGames = ['Switch', 'PS4', 'XBox'];

const ultimoItem = videoGames.pop(); // Remove o último item e retorna ele
const adicionarAoFinalDaArray = videoGames.push('3DS'); // Adiciona ao final da array
console.log(ultimoItem)
console.log(videoGames)
console.log(videoGames.length) // Total de elementos da na array.

//Foor loop
console.log('For loop')
for (let i = 0; i < videoGames.length; i++) { //Declaração de variável - Condicional - Incremento
  console.log(videoGames[i]);
}

console.log('While')
var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// O loop irá parar caso encontro e palavra break
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === 'PS4') {
    break;
  }
}

// FOREACH
// forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

videoGames.forEach(function (item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente
// Podemos passar os seguintes parâmetros item, index e array

// ----------------------------------------------------------------

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

const copa = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

copa.forEach((anoCopa) => console.log(`O Brasil ganhou a copa de ${anoCopa}`));

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (let i = 0; i < frutas.length; i++) {
  if (frutas[i] === 'Pera') {
    break;
  }
  console.log(frutas[i]);
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

const ultimaFruta = frutas[frutas.length - 1];
console.log('Última Fruta: ', ultimaFruta)
console.log(frutas)
