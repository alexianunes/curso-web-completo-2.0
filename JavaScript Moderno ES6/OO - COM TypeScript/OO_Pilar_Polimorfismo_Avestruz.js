"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var OO_Pilar_Heranca_Passaro_1 = require("./OO_Pilar_Heranca_Passaro");
var Avestruz = /** @class */ (function (_super) {
    __extends(Avestruz, _super);
    function Avestruz(cor, tamanho, bico) {
        return _super.call(this, 'Banco e Preto', 250, 'Grande') || this;
    }
    Avestruz.prototype.enterrarCabeca = function () {
        console.log('Entrerrar Cabeça');
    };
    Avestruz.prototype.voar = function () {
        console.log('Animal não sabe voar');
    };
    return Avestruz;
}(OO_Pilar_Heranca_Passaro_1.Passaro));
exports.Avestruz = Avestruz;
