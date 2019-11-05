// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dados = {
  nome: "João Gabriel",
  sobrenome: "D. Joaquim",
  idade: 22,
  nomeCompleto() {
    return console.log(`${this.nome} ${this.sobrenome}`);
  },
}
console.log(dados);
console.log(dados.nomeCompleto());

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latido(pessoa) {
    if (pessoa === "homem") {
      return "Cachorro Late";
    } else {
      return "Não late";
    }
  },
}
