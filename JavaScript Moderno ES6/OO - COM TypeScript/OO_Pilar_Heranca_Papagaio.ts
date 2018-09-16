import { Passaro } from "./OO_Pilar_Heranca_Passaro";

export class Papagaio extends Passaro{

    private sabeFalar = true

    constructor (cor: string , tamanho: number, bico: string, sabeFalar: boolean) {
        super(cor, tamanho, bico) 
        this.sabeFalar = sabeFalar
    }

    public falar() : void {
        console.log('Falar')
    }


}