//Função COM parêmetro & return

function somar(a, b) {
    return a + b;

}

let resultado = somar(30, 16);
console.log(`O resultado final é: ${resultado}`);
console.log(`O resultado final é: ${somar(30, 16)}`);

//function with parameter & without return

function multiplicar(a, b) {
    console.log("O resultado final é: ", a * b);
}

multiplicar(15, 10);

// function without parameter & with return

function returndatenow() {
    return new Date();

}
console.log(returndatenow())

// function without parameter & without return

function hournow(){
    console.log(new Date().getFullYear())
}
hournow();





function newUser(Nome, idade){

    return {Nome,idade}
    
}

newUser('Pedro',17);

console.log(newUser('Pedro',17));
 
 