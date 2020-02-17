// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function() {
  // return this.nome + " " + this.sobrenome + " possui " + this.idade;
  return `${this.nome} ${this.sobrenome} possui ${this.idade}`;
};

const joao = new Pessoas("Joao", "Joaquim", 23);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
// NodeList = entries. forEach. item, keys, length
// HTMLCollection = item, namedItem, lenght ...
// Document = (.....)
Object.getOwnPropertyNames(NodeList);
Object.getOwnPropertyNames(HTMLCollection);
Object.getOwnPropertyNames(Document);

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; //HTMLLIElement
li.click; // Function
li.innerText; //String
li.value; //Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // Undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
