// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6

// function createButton(background, color) {
//   background = background || 'blue';
//   if (color === undefined) {
//     color = 'red';
//   }
//   const buttonElement = document.createElement('button');
//   buttonElement.style.background = background;
//   return buttonElement;
// }

function createButton(background = 'blue', ...parametros) {
  console.log(parametros)
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  buttonElement.style.color = parametros;
  return buttonElement;
}

const redButton = createButton('red', 'white');
console.log(redButton)

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];

// const spread = [...comidas, ...frutas];
const push = comidas.push(...frutas);
// console.log(spread);
console.log(comidas);
