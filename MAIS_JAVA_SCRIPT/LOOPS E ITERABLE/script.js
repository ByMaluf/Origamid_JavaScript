// Crie 4 li's na página //
// Utilizando o for...of adicione uma classe a cada li //

const li = document.querySelectorAll('li');
//Um objeto NodeList, que é semelhante a um array (array-like), é um objeto iterável.
for (const line of li) {
  // line.className = 'active';
  // line.className = `${line.className} hidden`;
  line.classList.add('active');
  // console.log(line)
}

////
// Utilize o for...in para listar todos as propriedades e valores do objeto window

for (const props in window) {
  console.log('CHAVE: ' + props + ' -- ', window[props]);
}



