// Números

var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000

// Operadores Aritméticos
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

// Op. Arit. (Strings)
var soma = 100 + "50"; //10050

var testeNaN = "Isso é 100" / 2;
console.log(isNaN(testeNaN));

// A ordem importa
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// Operadores Arit. Unários
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

// O + e - tenta transformar o valor seguinte em número
var frase = "Isso é um teste";
+frase; // NaN
-frase; // NaN

var idade = "28";
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// Exercício
// 1
var total = 10 + (5 * 2) / 2 + 20; // 35

// 2
var nan1 = "Não é um numero";
var nan2 = "s22d";
console.log(isNaN(nan2));

// 3
var stringsNum = +"200" + 50;
console.log(stringsNum);

// 4
var num = 5;
num++;

// 5
var numero = +"80" / 2;
var unidade = "kg";
var peso = numero + unidade; // '80kg'
// var pesoPorDois = peso / 2; // NaN (Not a Number)

console.log(peso);
