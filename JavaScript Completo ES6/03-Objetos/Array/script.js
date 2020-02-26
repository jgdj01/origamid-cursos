const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primeiraComida = comidas.shift();
console.log(primeiraComida);

const ultimaComida = comidas.pop();
console.log(ultimaComida);

const comidaArroz = comidas.push("Arroz");
console.log(comidaArroz);
console.log(comidas);

const inicioArray = comidas.unshift("Peixe", "Batata");
console.log(inicioArray);
console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
const estudantesOrdem = estudantes.sort();
const estudantesInvertido = estudantes.reverse();
console.log(estudantesOrdem);

console.log(estudantes.includes("Joana"));
console.log(estudantes.includes("Juliana"));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join

html = html
  .split("section")
  .join("ul")
  .split("div")
  .join("li");
console.log(html);

let carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const copiaCarros = carros.slice();
carros.pop();
console.log(carros);
console.log(copiaCarros);
