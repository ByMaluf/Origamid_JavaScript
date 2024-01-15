var exponencial = 2e10
console.log(exponencial)

// Precisão de 15 digitos, após ocorre um certo arredondamento

var pi = 3.14
// Nosso vírgual é um ponto

// Operadores Aritméticos
// Soma(+) - Subtração(--) - Multiplicação (*) - Divisão (/)
// Expoente(**)
// Módulo(%) Restante inteiro de uma divisão

// lembrando que Soma em Strings server para concatenar
var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

// É possível verificar se uma variável é NaN ou não com a função isNaN()
console.log(isNaN(divisao)) //Retorna True

//Mais exemplos de NaN
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)

// Ordem de precedência também existe na programação
// Parênteses para priorizar
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// OPERADORES ARITMÉTICOS UNÁRIOS
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

// Mesma coisa para o decremento --x

// O + e - tenta transformar o valor seguinte em número
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 

// -----------------------------------------------

// EXERCÍCIO
// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
//35

console.log('Resultado total: ' + total)

// Crie duas expressões que retornem NaN
var somaNaN = '100s' - 5
var conversao = +'200y'
console.log(somaNaN, conversao)

// Somar a string '200' com o número 50 e retornar 250
var soma = +'200' + 50
console.log(soma)

// Incremente o número 5 e retorne o seu valor incrementado
var valorIncrementado = 5
console.log(++valorIncrementado)

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
console.log(peso)


