function returnOneFunction(){
    return function (){
        return "Boa tarde!";
    }
}

console.log(returnOneFunction);
console.log(returnOneFunction());
console.log(returnOneFunction()());

const retornar = returnOneFunction()

console.log(retornar(returnOneFunction()))
