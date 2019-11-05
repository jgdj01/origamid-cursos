var nome = "Joao";
var idade = 22;
var time = null;
console.log(typeof time);

var nome = "João";
var sobrenome = "Dornellas";

var nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);

var gols = 1000;
var frase = "Romário fez " + gols + " gols";
console.log(typeof frase);

var ano = "2019";
var mes = 11;
console.log(ano + mes);

var gols = 1000;
var frase1 = "Romário fez " + gols + " gols";
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String

// Exercício
// Declare uma variável contendo uma string
var comida = "sopa";
console.log(typeof comida);

// Declare uma variável contendo um número dentro de uma string
var numString = "Ano 2019";

// Declare uma variável com a sua idade
var age = 22;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var primeiroNome = "João Gabriel";
var sobreNome = "Dornellas Joaquim";

var nomeCompleto = `${primeiroNome} ${sobreNome}`;

console.log(nomeCompleto);

// Coloque a seguinte frase em uma variável: It's time
var frase3 = "It's time";
console.log(frase3);

// Verifique o tipo da variável que contém o seu nome
console.log(typeof primeiroNome);
