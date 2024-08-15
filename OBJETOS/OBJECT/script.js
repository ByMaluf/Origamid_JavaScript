// Object
// Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.

const carro1 = {
  marca: 'Ford',
  ano: 2018,
}

const pessoa = new Object({
  nome: 'André',
  idade: 28,
})


// Métodos de Object
// Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.

const carro = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
}

const honda = Object.create(carro);
honda.init('Honda').acelerar();

// Object.assign()
// Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.

const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

const moto = {
  rodas: 2,
  capacete: true,
}

const carro2 = {
  rodas: 4,
  mala: true,
}

Object.assign(moto, funcaoAutomovel);
Object.assign(carro, funcaoAutomovel);


// Object.defineProperties()
// Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.

const moto1 = {}
Object.defineProperties(moto1, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudança de valor
    enumarable: true, // torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  },
})

moto1.rodas = 4;
delete moto1.capacete;
moto1;
// {rodas: 2}

// Existe também o Object.defineProperty, para uma propriedade única.


// get e set
// É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada.

const moto2 = {}
Object.defineProperties(moto2, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = 'Velocidade ' + valor;
    }
  },
})

moto2.velocidade = 200;
moto2.velocidade;
// Velocidade 200

//Exercícios

// Crie uma função que verifique
// corretamente o tipo de dado

//Object.prototype.toString()retorna "[object Type]", onde Type é o tipo de objeto.
console.log(verificarTipoDeDados(''));

function verificarTipoDeDados(dado) {
  return Object.prototype.toString.call(dado);
}


// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {};

Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    configurable: false,
    writable: false,
  }
})

console.log(quadrado)

// Previna qualquer mudança
// no objeto abaixo
const configuracao = Object.freeze({
  width: 800,
  height: 600,
  background: '#333'
});

// Tentativas de modificar o objeto não devem ter efeito
configuracao.width = 900; // Não deve surtir efeito
configuracao.height = 700; // Não deve surtir efeito

console.log(configuracao.width = 900); // 800
console.log(configuracao.height); // 600
console.log(configuracao.background); // #333

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

const propriedadesArray = Object.getOwnPropertyNames(Array.prototype)
propriedadesArray.forEach((propriedade) => {
  console.log(propriedade);
});

console.log('--------------------------------')
const propriedadeString = Object.getOwnPropertyNames(String.prototype);
propriedadeString.forEach((propriedade) => {
  console.log(propriedade);
});

