const nota1 = 7.8;
const nota2 = 7.2;
const nota3 = 4.8;

// entre 7 e 10 aprovado // entre 4 e 6.9 recuperação // entre 3.9 e 0 reprovado

function minimo(a, b) {

    return a <= b ? a : b;

}

function media(a, b, c) {
    const menorNota = minimo(a, minimo(b, c));
    if (menorNota === a) {
        return (b + c) / 2;
    } else if (menorNota === b) {
        return (a + c) / 2;
    } else if (menorNota === c) {
        return (a + b) / 2
    }

}
console.log(media(nota1, nota2, nota3))

function situation(media) {
    if (media >= 7) {
        return "Aprovado!"
    } else if (media <= 6.9) {
        return "Recuperação!"
    } else if (media <= 3.9) {
        return "Reprovado"
    } else if (media <= 0) {
        return null
    }

}
console.log(situation(media(nota1, nota2, nota3)))


