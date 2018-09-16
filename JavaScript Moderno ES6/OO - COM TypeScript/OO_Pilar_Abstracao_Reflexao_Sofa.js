"use strict";
exports.__esModule = true;
var Sofa = /** @class */ (function () {
    function Sofa(qtdLugares, cor, reclinavel) {
        this.qtdLugares = qtdLugares;
        this.cor = cor;
        this.reclinavel = reclinavel;
    }
    Sofa.prototype.retornarQtdLugares = function () {
        console.log("Esse sofá possui " + this.qtdLugares + " lugares");
    };
    Sofa.prototype.retornarCor = function () {
        console.log("A cor desse sofá é " + this.cor);
    };
    Sofa.prototype.reclinarSofa = function () {
        if (this.reclinavel) {
            console.log('O sofá foi reclinado');
        }
        else {
            console.log('Esse sofá não pode ser reclinado');
        }
    };
    return Sofa;
}());
exports.Sofa = Sofa;
