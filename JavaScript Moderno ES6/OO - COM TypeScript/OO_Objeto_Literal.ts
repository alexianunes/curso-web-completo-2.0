export class Produto {
    private descricao : string 
    private preco : number

    
    constructor (descricao, preco){
        this.descricao = descricao
        this.preco = preco 
    }

    public verDescricao() {
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }

}