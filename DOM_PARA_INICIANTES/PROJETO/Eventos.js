// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('[href^="#"]');
function adicionarClasse(event) {
  event.preventDefault();
  linksInternos.forEach(link => {
    link.classList.remove('ativo'); //Percorro todos os links removendo a classe ativo;
  });
  this.classList.add('ativo') //Depois adiciono a classe ativo ao link atualmente clicado;
}
linksInternos.forEach(link => {
  link.addEventListener('click', adicionarClasse);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

function todosOsElementos(event) {
  event.preventDefault();
  console.log(this)
}

window.addEventListener('click', todosOsElementos);

const AllElements = document.querySelectorAll('body *')
AllElements.forEach(elemento => {
  elemento.addEventListener('click', todosOsElementos);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function removentoOsElementos(event) {
  event.preventDefault();
  event.target.remove()
}

window.addEventListener('click', removentoOsElementos);

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function aumentarTexto(event) {
  if (event.key === 't') {
    document.documentElement.classList.toggle('textoMaior');
  }
}

window.addEventListener('keydown', aumentarTexto);
