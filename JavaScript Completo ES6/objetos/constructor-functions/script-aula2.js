// Exemplo Real

// const Dom = {
//   seletor: "li",
//   element() {
//     return (elementoSelecionado = document.querySelector(this.seletor));
//   },
//   ativar() {
//      this.element().classList.add('ativar');
//   }
// };

function Dom(seletor) {
  this.element = function() {
    return document.querySelector(seletor);
  };
  this.ativar = function(classe) {
    this.element().classList.add(classe);
  };
}

const li = new Dom("li");
const ul = new Dom("ul");

const lastli = new Dom("li:last-child");
lastli.ativar("ativar");
