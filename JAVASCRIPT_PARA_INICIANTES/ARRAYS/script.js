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
