const nota1 = 7.8;
const nota2 = 3.2;
const nota3 = 5.8;

// entre 7 e 10 aprovado // entre 4 e 6.9 recuperação // entre 3.9 e 0 reprovado

function media(a, b) {

    return (a + b) / 2;
    
}

console.log(media(nota1, nota2));
function situation(media){
    
    return media >=7 
? "Aprovado" : media(nota1, nota2) <=6.9
? "Recuperação" : media(nota1, nota2) <= 3.9
? "Reprovado": null

}
console.log(situation(media))

