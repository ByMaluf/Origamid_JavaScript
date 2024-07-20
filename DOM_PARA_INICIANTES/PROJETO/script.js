const menu = document.querySelector('.menu');

menu.classList.add('ativo')
menu.classList.remove('azul')

if (menu.classList.contains('azul')) {
  menu.classList.add('possui-azul')
} else {
  menu.classList.add('nao-possui-azul')
}

console.log(menu.classList) //Retorna um DOMTokenList (Um Array-like - falso Array);
console.log(menu.className) //Retorna todas as classes em uma String;

// menu.className = `${menu.className} stringSomada`;
menu.className += ' stringSomada';
menu.className = 'classNameEsteveAqui' //Aqui estrou sobrescrevendo todas as classe pela string digitada;

const animais = document.querySelector('.animais');
console.log(animais.attributes); //Retorna um NamedNodeMap (Um Array-like - falso Array);

const img = document.querySelector('img');
console.log(img.getAttribute('src')); //Retorna o atributo 'src' da primeira imagem encontrada.
img.setAttribute('alt', 'Raposa'); //inclui o atributo 'alt' na primeira imagem encontrada.
console.log(img.getAttribute('alt')); //Retorna o atributo recém incluído alt da primeira imagem encontrada.
console.log(img.hasAttribute('alt'));//Verifica se o elemento possui o atributo desejado.
img.removeAttribute('alt'); //Remover o atributo 'alt' da primeira imagem.

