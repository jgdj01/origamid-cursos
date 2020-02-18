// const comida = "Pizza";
// const agua = new String("Agua");

// const frase = "A melhor comida";

// console.log(frase[frase.length - 1]);
// console.log(frase.charAt(2));

const frase = "A melhor linaguagem é ";
const linguagem = "Javascript";

const fraseFinal = frase.concat(linguagem, "!!!");

console.log(fraseFinal);

const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false

console.log(fruta.startsWith("Ba"));

console.log(fruta.endsWith("na"));

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

console.log(transacao1.slice(0, -2));

const preco = "R$ 99,00";

const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach(item => {
  console.log(item.padStart(10, "-"));
});

let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
// listaItens = listaItens.replace(/[ ]+/g, ", ");

listaItens = listaItens.replace("Camisas", "Shirts");

console.log(listaItens);

const arrayLista = listaItens.split(",");

console.log(arrayLista);

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const novoHtml = htmlArray.join("section");

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const frutasArray = ["Banana", "Melancia", "Laranja"];
