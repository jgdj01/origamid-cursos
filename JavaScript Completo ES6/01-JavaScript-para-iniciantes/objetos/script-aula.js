// Objetos
// Conjunto de variáveis e funções, que são chamadas de 
// propriedades e métodos.
var pessoa = {
  nome: 'André',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
}
pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true

// Métodos
// Propriedade que possui uma função no local do seu valor.
var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  }
}

console.log(quadrado.area(5));

console.log(quadrado.perimetro(5));

// Abreviação de area: function() {} para area() {}, no ES6+
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

// Organizar o Código
// Objetos -> Organizam código em pequenas partes reutilizáveis
Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

// Criar um objeto
// Um objeto é criado usando {}
var carro = {}

console.log(typeof carro);

// Dot Notation Get
// Propriedades de um objeto são acessadas utilizando o ponto .
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

var bg = menu.backgroundColor; // '#84E'

// Substituindo o valor usando . e = após o nome
menu.backgroundColor = '#000';
console.log(menu.backgroundColor); // '#000'

// Protótipo e Herença
// O objeto herda propriedades e métodos do objeto
// que foi utilizado para criar o mesmo
var menu = {
  width: 800,
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false
