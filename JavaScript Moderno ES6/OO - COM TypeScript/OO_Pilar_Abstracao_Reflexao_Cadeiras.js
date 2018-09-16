"use strict";
//um software de marcenaria
//cadeira e sofa
exports.__esModule = true;
var Cadeira = /** @class */ (function () {
    function Cadeira(qtd_pernas, giratoria, cor) {
        this.qtd_pernas = qtd_pernas;
        this.giratoria = giratoria;
        this.cor = cor;
    }
    Cadeira.prototype.girarCadeira = function () {
        if (this.giratoria) {
            console.log('Girou');
        }
        else {
            console.log('A cadeira não é giratória');
        }
        //return this.giratoria
    };
    Cadeira.prototype.qtdPernas = function () {
        console.log('A qtd de prnas dessa cadeira é: ' + this.qtd_pernas);
    };
    Cadeira.prototype.corCadeira = function () {
        console.log('A cor dessa cadeira é: ' + this.cor);
    };
    return Cadeira;
}());
exports.Cadeira = Cadeira;
