export class Sofa{
    private qtdLugares : number
    private cor: string 
    private reclinavel: boolean

    constructor(qtdLugares: number, cor: string, reclinavel: boolean) {
        this.qtdLugares = qtdLugares
        this.cor = cor
        this.reclinavel = reclinavel
    }

    public retornarQtdLugares(): void {
        console.log("Esse sofá possui " + this.qtdLugares + " lugares")
    }

    public retornarCor(): void {
        console.log("A cor desse sofá é " + this.cor)
    }

    public reclinarSofa() : void {
        if(this.reclinavel){
            console.log('O sofá foi reclinado')
        }else{
            console.log('Esse sofá não pode ser reclinado')
        }
    }
}