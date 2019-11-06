// Adicione a classe ativo a todos os itens do menu
const classeAtivo = document.querySelectorAll('.menu a');

classeAtivo.forEach((item) => {
    item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
classeAtivo.forEach((item) => {
    item.classList.remove('ativo');
});

classeAtivo[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const img = document.querySelectorAll('img');

img.forEach((item) => {
    const possuiAtributoAlt = item.hasAttribute('alt');
    console.log(img, possuiAtributoAlt);
});

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
console.log(link);
link.setAttribute("link", "https://google.com/");

console.log(link);