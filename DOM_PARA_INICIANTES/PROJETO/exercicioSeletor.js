// Retorne no console todas as imagens do site
const todasAsImagens = document.querySelectorAll('.animais-lista img')
console.log(todasAsImagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensComImagem = document.querySelectorAll('[src^="img/imagem"]');
console.log(imagensComImagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const titulo = document.querySelector('.animais-descricao h2');
console.log(titulo);

// Selecione o último p do site
const ultimoParagrafo = document.querySelectorAll('p');
console.log(ultimoParagrafo[--ultimoParagrafo.length]);


