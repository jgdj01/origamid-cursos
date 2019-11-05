// Document Object Model(DOM)
// É uma interface que representa documentos HTML e XML através de objetos. 
// Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.
console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser

// Window e Document
window.alert('Isso é um alerta');
alert('Isso é um alerta'); // Funciona

document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body

// Node
const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

// titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo

// Exercício
// Retorne o url da página atual utilizando o objeto window
const urlPagina = window.location.href;
console.log(urlPagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const classeAtivo = document.querySelector('.ativo');
console.log(classeAtivo);
console.log(classeAtivo.innerText);

// Retorne a linguagem do navegador
const navegadorLinguagem = window.navigator.language;
console.log(navegadorLinguagem);

// Retorne a largura da janela 
const larguraJanela = window.innerWidth;
console.log(larguraJanela);