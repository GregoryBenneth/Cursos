let temDinheiro = false;
let estaEnsolarado =  true;
let carOnGarage = true;

let resultadoE = 'Vai pro shopping?'

resultadoE += temDinheiro && estaEnsolarado;

console.log(resultadoE);


let resultadoOU = 'Vai pro shopping?';
resultadoOU += estaEnsolarado || carOnGarage; 
console.log(resultadoOU);