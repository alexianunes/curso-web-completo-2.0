export class  Tv {

    private relacaoCanais : Array<number> 
    private _canalAtivo : number 
    private volume : number

    constructor(){

        this.relacaoCanais = Array(2, 4, 5, 7, 10)
        this._canalAtivo = 5
        this. volume = 5
    
    }

    //getters setters
    // get canalAtivo() {
    //     return this._canalAtivo
    // }
}