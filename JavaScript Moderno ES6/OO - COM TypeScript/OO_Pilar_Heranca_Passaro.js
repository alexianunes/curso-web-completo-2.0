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
var OO_Pilar_Heranca_Animal_1 = require("./OO_Pilar_Heranca_Animal");
var Passaro = /** @class */ (function (_super) {
    __extends(Passaro, _super);
    function Passaro(cor, tamanho, bico) {
        var _this = _super.call(this, cor, tamanho) || this;
        _this.bico = bico;
        return _this;
    }
    Passaro.prototype.voar = function () {
        console.log('Voar');
    };
    Passaro.prototype.dormir = function () {
        console.log('Dormir Passaro');
    };
    return Passaro;
}(OO_Pilar_Heranca_Animal_1.Animal));
exports.Passaro = Passaro;
