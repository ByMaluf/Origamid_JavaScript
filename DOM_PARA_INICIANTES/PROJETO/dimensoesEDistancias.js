// HEIGHT E WIDTH
// Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only

const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

// Mesma coisa para o Width, clientWidth ...

// OFFSETTOP E OFFSETLEFT

// Distância entre o topo do elemento e o topo da página
section.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section.offsetLeft;


// GETBOUNDINGCLIENTRECT()
// Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

// WINDOW

window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.scrollY; // distância total do scroll vertical - 'pageYOffset' is deprecated.
window.scrollX; // distância total do scroll horizontal - 'pageXOffset' is deprecated.

if (window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

// MATCHMEDIA();
// Utilize um media-querie como no CSS para verificar a largura do browser

const small = window.matchMedia('(max-width: 600px)');

if (small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}

// Verifique a distância da primeira imagem
// em relação ao topo da página

const imagem = document.querySelector('img');
console.log(imagem.offsetTop);

// Retorne a soma da largura de todas as imagens

const imagens = document.querySelectorAll('img')

let somaDasLarguras = 0;
function somarLarguaraImgs() {
  imagens.forEach((imagem) => {
    somaDasLarguras += imagem.offsetWidth;
  });
  console.log(somaDasLarguras);
}

window.onload = () => {
  somarLarguaraImgs();
}

//A principal razão para usar window.onload é garantir que seu código JavaScript seja executado apenas após todos os elementos da página terem sido carregados.

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');
links.forEach((link) => {
  const minimoLargura = link.offsetWidth;
  const minimoAltura = link.offsetHeight;
  if (minimoLargura >= 48 && minimoAltura >= 48) {
    console.log(link.innerHTML + ' Possui boa acessibilidade.');
  } else {
    console.log(link.innerHTML + ' Não possui boa acessibilidade.');
  }
  // console.log(`Altura: ${possuiOminimoAltura} Largura: ${possuiOminimoLargura}, ${link}`,)
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const janela = window.matchMedia('(max-width: 720px)');
const menu = document.querySelector('.menu');
if (janela.matches) {
  menu.classList.add('menu-mobile');
} else {
  menu.classList.remove('menu-mobile');
}