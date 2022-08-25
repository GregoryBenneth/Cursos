const numeros = [16, 22, 35, 44, 52, 49];

function forelement (elemento, indice, array){
    console.log(elemento, indice, array);

}

numeros.forEach(forelement);
numeros.forEach(function(el){
    console.log(el);
    
})