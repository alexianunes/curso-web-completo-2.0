//um software de marcenaria
//cadeira e sofa

export class Cadeira {
    
    private qtd_pernas: number
    private giratoria: boolean
    private cor: string

    constructor (qtd_pernas: number, giratoria: boolean, cor: string){
        this.qtd_pernas = qtd_pernas
        this.giratoria = giratoria
        this.cor = cor
    }

    public girarCadeira():void {
        if(this.giratoria){
            console.log('Girou')
        } else {
            console.log('A cadeira não é giratória')
        }
        //return this.giratoria
    }

    public qtdPernas(): void {
        console.log('A qtd de prnas dessa cadeira é: '+this.qtd_pernas)
    }

    public corCadeira(): void {
        console.log('A cor dessa cadeira é: '+this.cor)
    }


}