const data = {
    dia: 12,
    mes:"Abril",
    ano: 1995,

    exibirData: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}
console.log(data.exibirData())