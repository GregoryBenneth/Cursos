const numeros = [1, 2, 3, 4, 5, 4];

numeros[0] = 100;
numeros.push(6);

console.log(numeros.indexOf(4));
console.log(numeros.indexOf(4, 4));
console.log(numeros.includes(6));
console.log(numeros.includes(10));
console.log(numeros.join (' - '));

console.log(numeros);

const numeros2 =  numeros.concat (7,15,23);

console.log("Aqui ja nao deu",numeros2.splice(0, 4))

numeros2.splice(0,1);
console.log('Hellopapait',numeros2)