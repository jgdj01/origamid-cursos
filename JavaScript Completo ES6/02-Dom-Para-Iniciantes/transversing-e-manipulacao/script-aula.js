// // outerHTML, innerHTML e innerText

// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-descricao');

// // h1.outerHTML = '<p>Novo Título</p>';

// // console.log(animaisLista.innerHTML);

// // Transversing

// const lista = document.querySelector('.animais-lista');

// console.log(lista.children[--lista.children.length]);
// console.log(lista.querySelector('li:last-child'));

// // Element vs Node
// console.log(lista.childNodes);

// // Manipulando Elementos

// const animais = document.querySelector('.animais')
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// const mapa = document.querySelector('.mapa');

// contato.replaceChild(lista, titulo);

// contato.insertBefore(animais, mapa);

// // Novos Elementos
// const novoh1 = document.createElement('h1');
// novoh1.innerText = 'Novo Titulo';
// novoh1.classList.add('titulo');

// mapa.appendChild(novoh1);

// console.log(novoh1);

// Clonar Elementos

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneh1 = h1.cloneNode(true);

faq.appendChild(cloneh1);