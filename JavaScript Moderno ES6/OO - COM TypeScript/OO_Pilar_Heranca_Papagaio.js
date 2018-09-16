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
var Papagaio = /** @class */ (function (_super) {
    __extends(Papagaio, _super);
    function Papagaio(cor, tamanho, bico, sabeFalar) {
        var _this = _super.call(this, cor, tamanho, bico) || this;
        _this.sabeFalar = true;
        _this.sabeFalar = sabeFalar;
        return _this;
    }
    Papagaio.prototype.falar = function () {
        console.log('Falar');
    };
    return Papagaio;
}(OO_Pilar_Heranca_Passaro_1.Passaro));
exports.Papagaio = Papagaio;
