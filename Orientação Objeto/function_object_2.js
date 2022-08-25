//function contrutora => criar objetos com função
function Data(dia = 1,mes = 1,ano = 2021){
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;

}
const d1 = new Data();

console.log(typeof d1)
console.log(d1)