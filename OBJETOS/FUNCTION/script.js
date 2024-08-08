// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const caracter = document.querySelectorAll('p');
const carcterArray = Array.prototype.reduce.call(caracter, (acumulador, caracterAtual, index, array) => {
  const textos = caracterAtual.innerText.length;
  return acumulador + textos
}, 0);

console.log(carcterArray);


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function createElementHtml(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  elemento.setAttribute('class', classe);
  elemento.innerText = conteudo
  return elemento
}

const tituloTeste = createElementHtml('h1', 'tituloTeste', 'Direto da função createElementHtml');
const body = document.querySelector('body');
body.appendChild(tituloTeste);

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1 = createElementHtml.bind(null, 'h1', 'titulo');
body.appendChild(h1('Por meio do método Bind'));



