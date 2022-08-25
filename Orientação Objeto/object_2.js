const produto = {
    nome: "Água",
    codacess: 5458,
    preco:29.90,
    desconto: 0.18,
    precoFinal: function (){
        return this.preco - (this.preco * this.desconto)

    }
    
}
console.log(produto.precoFinal())