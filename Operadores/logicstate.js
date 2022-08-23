const t1 = true;
const t2 = true;


//console.log('Vamos comprar a TV 50" ')

let comprarTV50 = t1 && t2;
console.log('Vamos comprar a TV 50"?', comprarTV50);

let comprarTV32 = t1 !== t2;
console.log('Vamos comprar a TV 32"?', comprarTV32);

let tomarSorvete = t1 || t2;
console.log('Vamos tomar sorvete"?', tomarSorvete);

let ficarEmCasa = !tomarSorvete;
console.log('Vamos ficar em casa"?', ficarEmCasa);
