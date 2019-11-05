// Boolean
var possuiGraduacao = true;
var possuiDoutorado = false;

// Condicionais IF e ELSE
var possuiGraduacao = false;

if (possuiGraduacao) {
  console.log("Possui graduação");
} else {
  console.log("Não possui graduação");
}
// retorna Possui Graduação e não executa o else

// ELSE IF
var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}
// retorna Possui Graduação, mas não possui doutorado

// TRUTY E FALSY
// Existem valores que retornam true e
// outros que retornam false quando verificados em uma expressão booleana.
// Falsy
if (false)
  if (0)
    if (NaN)
      if (null)
        if (undefined)
          // ou -0
          if ("") { } // ou "" ou ``



// Operador Lógico de Negação !
// Truthy
if (!true) // false
  if (!1) // false
    if (!'') // true
      if (!undefined) // true
        if (!!' ') // true
          if (!!'') { } // false

// Operadores de comparação
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

// O == faz uma comparação não tão estrita e o === faz uma comparação estrita,
// ou seja, o tipo de dado deve ser o mesmo quando usamos ===

// Operadores Lógicos &&
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

// Switch
var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}

// Exercício

// 1
var idadeIrmao = 18;
var idade = 22;

if (idade > idadeIrmao) {
  console.log("É maior")
} else if (idade === idadeIrmao) {
  console.log("É igual");
} else if (idade < idadeIrmao) {
  console.log("É menor");
}

// 2
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // True

// 3
var nome = 'Andre'; // Truthy
var idade = 28; // Truthy
var possuiDoutorado = false; // Falsy
var empregoFuturo; // Falsy
var dinheiroNaConta = 0; // Falsy

// 4
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("Brasil é maior que a China");
} else {
  console.log("China maior que Brasil");
}

// 5
if (('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
// Irá aparecer "Falso"


// O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

// Irá aparecer "Cão"