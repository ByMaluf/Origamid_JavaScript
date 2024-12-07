import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchBitcoin() {
  setInterval(fetchData, 15000);

  function fetchData() {
    fetch('https://blockchain.info/ticker')
      .then((response) => response.json())
      .then((bitcoin) => {
        const btc = document.querySelector('.btc-preco');
        btc.textContent = (1000 / bitcoin.BRL.sell).toFixed(4);
      }).catch(error => {
        console.log(Error(error));
      })
  }

  fetchData();
}

