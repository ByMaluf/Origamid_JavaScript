// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const cepValue = form.cep.value;
  viaCep(cepValue);
})

function viaCep(cep) {
  const resultado = document.querySelector('.resultado');
  const url = `https://viacep.com.br/ws/${cep}/json/`
  fetch(url)
    .then(data => data.text()).then(data => resultado.innerText = data);
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s


const btcDisplay = document.querySelector('.bitCoin');

function fetchBtc() {
  fetch('https://blockchain.info/ticker')
    .then(r => r.json())
    .then(body => btcDisplay.innerText = ('R$ ' + body.BRL.buy).replace('.', ','))
}
fetchBtc();

// setInterval(fetchBtc, 4000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const next = document.querySelector('.next')

next.addEventListener('click', fetchJoke);

function fetchJoke() {
  const joke = document.querySelector('.joke');
  const imgJoke = document.querySelector('.imgJoke');
  fetch('https://api.chucknorris.io/jokes/random')
    .then(r => r.json())
    .then(body => {
      joke.innerText = body.value;
      imgJoke.src = body.icon_url;
    })
}

fetchJoke()

