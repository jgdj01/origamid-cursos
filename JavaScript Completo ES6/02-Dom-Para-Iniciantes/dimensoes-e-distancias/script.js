// Verifique a distância da primeira imagem
// em relação ao topo da página
const distImg = document.querySelector('img');

console.log(distImg.offsetTop);


// Retorne a soma da largura de todas as imagens
function somaImagens() {
    const widthAllImg = document.querySelectorAll('img');
    let soma = 0;
    widthAllImg.forEach(img => {
        soma = soma + img.offsetWidth
    });
    console.log(soma);
}
window.onload = function () {
    somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const linksMin = document.querySelectorAll('a');

linksMin.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;

    if (linkWidth >= 48 && linkHeight >= 48) {
        console.log(link, "Possui boa acessibilidade");
    } else {
        console.log(link, "Não possui boa acessibilidade");
    }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browser = window.matchMedia('(max-width: 720px)');

if (browser.matches) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
} else {
    console.log("Browser maior que 720px");
}