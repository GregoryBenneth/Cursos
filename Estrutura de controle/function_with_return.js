function returnOne() {
    return 1;
}

let value = returnOne() + 999;
console.log(value);

function textOrNumber(returntext){
    return returntext ? "I'm okay" : Math.PI;
}

console.log(textOrNumber(false));