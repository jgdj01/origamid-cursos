// nomeie 3 propriedades ou métodos de strings
var nome = "Joao";
nome.fontsize("1.25em");
console.log(nome.includes("Joao"));
console.log(nome.toUpperCase());
nome;
console.log(nome);

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
// appendChild
// id
// innerHtml
// outerHtml
console.log(btn)


// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
document.execCommand('copy');
document.execCommand('paste');
