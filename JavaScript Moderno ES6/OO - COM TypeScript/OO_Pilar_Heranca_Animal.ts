export class Animal {

    private cor : string 
    private tamanho : number 

    constructor (cor: string , tamanho: number) {
        this.cor = cor
        this.tamanho = tamanho 
    }

    public dormir() {
        console.log('Dormir')
    }
    
}