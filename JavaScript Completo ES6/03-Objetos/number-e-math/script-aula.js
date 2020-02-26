console.log(Number.isNaN(5));

console.log(Number.isInteger(20)); // true
Number.isInteger(23.6); // false

console.log(parseFloat("325212.5125"));
console.log(Number.parseInt("100 Reais", 10));

// n.toFixed(decimais)
// const preco = 10.24354;
// console.log(preco.toFixed());

// n.toLocaleString(lang, options);
const preco = 59.49;
console.log(
  preco.toLocaleString("en-US", { style: "currency", currency: "USD" })
); // $59.49
preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); // R$ 59,49

let valor = 48.49;
valor = valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

console.log(valor);

const aleatorio = Math.floor(Math.random() * (40 - 20 + 1) + 20);

console.log(aleatorio);

// Número random entre 72 e 32
// Math.floor(Math.random() * (72 - 32 + 1)) + 32;
// Math.floor(Math.random() * (max - min + 1)) + min;
