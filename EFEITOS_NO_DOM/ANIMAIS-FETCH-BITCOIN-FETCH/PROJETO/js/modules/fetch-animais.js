import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  async function fetchData() {
    try {
      const animaisResponse = await fetch('./animaisapi.json');
      const animaisJSON = await animaisResponse.json();
      animaisJSON.forEach((animal) => {
        const container = document.querySelector('.numeros-grid');
        container.appendChild(createAnimal(animal));
      });
      initAnimaNumeros();
    } catch (error) {
      console.log(Error(error));
    }
  }

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
    return div
  }
  fetchData()
}



