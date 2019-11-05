// Tudo é Objeto
// Strings, Números, Boolean, Objetos e mais, 
// possuem propriedades e métodos.Por isso são objetos.
var nome = 'André';

nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei'); // 'Andrei'
nome; // 'André'
// Uma string herda propriedades e métodos do construtor String()

// Números
var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'
// Por um breve momento o número é envolvido em um Objeto (coerção),
// tendo acesso assim as suas propriedades e métodos

// Funções
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1

// Elementos do DOM
var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function () {
  console.log('Clicou')
})


