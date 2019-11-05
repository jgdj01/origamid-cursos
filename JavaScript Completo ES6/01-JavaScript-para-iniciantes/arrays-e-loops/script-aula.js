// Array
// É um grupo de valores geralmente relacionados.
// Servem para guardarmos diferentes valores em uma única variável.

var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames[0] // Switch
videoGames[2] // Xbox

// Métodos e Propriedades de uma Array
var videoGames = ['Switch', 'PS4', 'XBox'];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3

// For Loop
// Fazem algo repetidamente até que uma condição seja atingida.
for (var numero = 0; numero < 10; numero++) {
    console.log(numero);
}
// Retorna de 0 a 9 no console

// While Loop
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
// Retorna de 0 a 9 no console

// Arrays e Loops
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
}

// Break
// O loop irá parar caso encontro e palavra break
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
    if (videoGames[i] === 'PS4') {
        break;
    }
}

// forEach
// forEach é um método que executa uma função para cada item da Array. 
// É uma forma mais simples de utilizarmos um loop com arrays(ou array - like)
videoGames.forEach(function (item) {
    console.log(item);
})

// O argumento item será atribuído dinamicamente

// Não se confunda com a sintaxe
var numero = 0;
var maximo = 50;
for (; numero < maximo;) {
    console.log(numero);
    numero++;
}
