/*
String

String
É a construtora de strings, toda string possui as propriedades e métodos do prototype de String.
*/

const comida = 'Pizza'; // Retorna um String
const liquido = new String('Água'); // Retorna um objeto do tipo String
const ano = new String(2018); //Erro

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let totalTaxa = 0;
let totalRecebimento = 0;
transacoes.forEach((preco) => {
  const isTaxa = preco.descricao.includes('Taxa');
  const precos = +preco.valor.replace('R$ ', '');
  if (isTaxa) {
    totalTaxa += precos
  } else {
    totalRecebimento += precos;
  }
})
console.log(totalTaxa);
console.log(totalRecebimento);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
console.log(transportes.split(';'));

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

console.log(html.split('span').join('a'))

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length - 1));

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalTaxas = 0;
transacoes2.forEach((taxa) => {
  const string = taxa.toLocaleLowerCase().includes('taxa');
  if (string) {
    console.log(string.length);
    totalTaxas++
  }
})
console.log(totalTaxas)
