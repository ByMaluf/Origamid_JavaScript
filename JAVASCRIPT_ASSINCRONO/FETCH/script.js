// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima


const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const cep = form.cep.value;
  viaCep(cep).then(cep => console.log(cep))
})

function viaCep(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`
  return fetch(url).then(data => data.json());
}