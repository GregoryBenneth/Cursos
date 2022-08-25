function criarData(dia, mes, ano) {
    return{
        dia,
        mes,
        ano,

        exibirData() {
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    
};
}

const d1 = criarData(10, 5, 1975)
const d2 = criarData(11, 7, 1775)
const d3 = criarData(25, 11, 1574)

console.log(d1.exibirData())
console.log(d2.exibirData())
console.log(d3.exibirData())


