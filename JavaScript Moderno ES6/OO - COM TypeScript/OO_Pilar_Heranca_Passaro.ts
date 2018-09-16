import { Animal } from "./OO_Pilar_Heranca_Animal";

export class Passaro extends Animal{

    private bico : string 

    constructor (cor: string , tamanho: number, bico: string) {
        super(cor, tamanho)
        this.bico = bico
    }

    public voar(){
        console.log('Voar')
    }

    public dormir() {
        console.log('Dormir Passaro')
    }
}