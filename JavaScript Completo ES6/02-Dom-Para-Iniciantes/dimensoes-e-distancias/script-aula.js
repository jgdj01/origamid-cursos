// Height e Width
const section = document.querySelector('.animais-lista');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

// Mesma coisa para o Width, clientWidth

// offsetTop e offsetLeft

// Distância entre o topo do elemento e o topo da página
section.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section.offsetLeft;

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;

console.log(h2left);

// getBoundingClientRect()
const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

// console.log(rect);

// Window
window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerWidth; // soma a barra de endereço

window.pageYOffset; // distância total do scroll horizontal
window.pageXOffset; // distância total do scroll vertical

if (window.innerWidth < 600) {
    console.log('Tela menor que 600px');
}

// matchMedia();
const small = window.matchMedia('(max-width: 600px)');

if (small.matches) {
    console.log('Tela menor que 600px')
} else {
    console.log('Tela maior que 600px')
}
