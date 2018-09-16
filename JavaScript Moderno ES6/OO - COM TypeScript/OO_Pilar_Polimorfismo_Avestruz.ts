import { Passaro } from "./OO_Pilar_Heranca_Passaro";

export class Avestruz extends Passaro {


    constructor (cor: string , tamanho: number, bico: string) {
        super('Banco e Preto', 250, 'Grande')
    }

    public enterrarCabeca(){
        console.log('Entrerrar Cabeça')
    }

    public voar() {
        console.log('Animal não sabe voar')
    }
}