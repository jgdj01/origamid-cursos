// forEach
const imgs = document.querySelectorAll('img');

// imgs.forEach(function (item) {
//     console.log(item);
// });

// Parâmetros do forEach
// O primeiro parâmetro é o callback, ou seja, 
// a função que será ativada a cada item. 
// Esse função pode receber três parâmetros: valorAtual, index e array;
imgs.forEach(function (item, index, array) {
    // console.log(item); // o item atual no loop
    // console.log(index); // o número do index
    // console.log(array); // a Array completa
});

// forEach e Array
// forEach é um método de Array
// Caso o método não seja array-like, o ideal é transforma-lo em um array
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
    // console.log(item);
});

// Arrow Function
// Sintaxe curta em relação a function expression.
imgs.forEach((item) => {
    // console.log(item);
});

// Argumentos e Parênteses
// argumento único não precisa de parênteses
imgs.forEach(item => {
    // console.log(item);
});

// multiplos argumentos precisam de parênteses
imgs.forEach((item, index) => {
    // console.log(item, index);
});

// sem argumentos precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
    console.log(i++);
});

// Return
// É possível omitir as chaves { } para uma função que retorna uma linha.
imgs.forEach(item =>
    console.log(item)
);

imgs.forEach(item => console.log(item));