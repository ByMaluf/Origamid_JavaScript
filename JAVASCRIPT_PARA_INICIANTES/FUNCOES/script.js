// FUNÇÕES
// Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.
// Parênteses () executam uma função


// PARÂMETROS E ARGUMENTOS
// Ao criar uma função, você pode definir parâmetros.
// Ao executar uma função, você pode passar argumentos.

// peso e altura são os parâmetros

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

imc(80, 1.80) // 80 e 1.80 são os argumentos
imc(60, 1.70) // 60 e 1.70 são os argumentos

//Atenção: Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também

// ARGUMENTOS PODEM SER FUNÇÕES
// Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

addEventListener('click', function () {
  console.log('Clicou');
});

// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

// Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}

// PODE OU NÃO RETORNAR UM VALOR
// Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}
imc(80, 1.80); // retorna o imc
console.log(imc(80, 1.80)); // retorna o imc e undefined

// VALORES RETORNADOS
// Uma função pode retornar qualquer tipo de dado e até outras funções.
function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
//É uma boa prática que uma função só retorne um tipo de valor específico, ex: number, boolean etc...

// ESCOPO
// Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

// ESCOPO LÉXICO
// Funções conseguem acessar variáveis que foram criadas no contexto pai
var profissao = 'Designer';
function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro

// HOISTING
// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

// EXERCÍCIO ----------
// Crie uma função para verificar se um valor é Truthy

function verificarSeVerdadeiro(dado) {
  console.log(!!dado, `Tipo: ${typeof dado}`)
}
verificarSeVerdadeiro(('Eu18' / 9))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(perimetro) {
  return perimetro * 4
}
console.log(perimetroQuadrado(3))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `Nome completo: ${nome} ${sobrenome}`
}
console.log(nomeCompleto('Brenno Ysrael', 'Maluf Luccas Correia'))

// Crie uma função que verifica se um número é par
function par(number) {
  if (number % 2 === 0) {
    return true
  } else {
    return false
  }
}
console.log(par(19))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dataType) {
  return typeof dataType
}
console.log(tipoDeDado('7oi' - 5))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function () {
  console.log(`Brenno Ysrael Maluf Luccas Correia`)
})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
