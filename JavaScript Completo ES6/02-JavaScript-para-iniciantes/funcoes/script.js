// Exercício

// 1
// Crie uma função para verificar se um valor é Truthy
function verificaVerdade(valor) {
  return !!valor;
}

val1 = -0;
val2 = null;
val3 = +"51NaN";
// val1, val2, val3 == Falsy
console.log(verificaVerdade(val3));

// 2
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(l) {
  return l * 4;
}

// 3
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

// 4
// Crie uma função que verifica se um número é par
function par(val) {
  if ((val % 2) == 0) {
    console.log("O valor é par");
    return true;
  }
  else {
    console.log("O valor é impar");
    return false;
  }
}

// 5
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado) {
  return typeof (dado);
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function () {
  console.log("João Gabriel");
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
