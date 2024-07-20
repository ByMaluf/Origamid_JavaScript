const menu = document.querySelector('.menu');

// menu.classList.add('ativo')
// menu.classList.remove('azul')

// if (menu.classList.contains('azul')) {
//   menu.classList.add('possui-azul')
// } else {
//   menu.classList.add('nao-possui-azul')
// }

console.log(menu.classList) //Retorna um DOMTokenList (Um Array-like - falso Array);
console.log(menu.className) //Retorna todas as classes em uma String;

// menu.className = `${menu.className} stringSomada`;
//menu.className += ' stringSomada';
//menu.className = 'classNameEsteveAqui' //Aqui estrou sobrescrevendo todas as classe pela string digitada;

const animais = document.querySelector('.animais');
console.log(animais.attributes); //Retorna um NamedNodeMap (Um Array-like - falso Array);

const img = document.querySelector('img');
console.log(img.getAttribute('src')); //Retorna o atributo 'src' da primeira imagem encontrada.
img.setAttribute('alt', 'Raposa'); //inclui o atributo 'alt' na primeira imagem encontrada.
console.log(img.getAttribute('alt')); //Retorna o atributo recém incluído alt da primeira imagem encontrada.
//console.log(img.hasAttribute('alt'));//Verifica se o elemento possui o atributo desejado.
img.removeAttribute('alt'); //Remover o atributo 'alt' da primeira imagem.

//Read Only vs Writable
// https://developer.mozilla.org/en-US/docs/Web/API/Element

// Adicione a classe ativo a todos os itens do menu
const menuLista = document.querySelectorAll('.menu a');
menuLista.forEach((li) => {
  li.classList.add('ativo')
  // console.log(li.classList.contains('ativo'));
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuLista.forEach((li, index) => {
  index != 0 ? li.classList.remove('ativo') : null;
  console.log(li.classList.contains('ativo'));
})

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img) => console.log(img.hasAttribute('alt')));

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^=\'https\']');
linkExterno.setAttribute('href', 'https://www.origamid.com')








