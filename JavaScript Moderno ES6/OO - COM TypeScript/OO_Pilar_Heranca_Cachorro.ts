import { Animal } from "./OO_Pilar_Heranca_Animal";

export class Cachorro extends Animal{

    private orelhas : string 

    constructor (cor: string , tamanho: number, orelhas: string) {
        super(cor, tamanho)
        this.orelhas = orelhas
    }

    public correr(){
        console.log('Correr')
    }

    public rosnar() {
        console.log('rosnar')
    }

}