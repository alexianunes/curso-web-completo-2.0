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
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(cor, tamanho, orelhas) {
        var _this = _super.call(this, cor, tamanho) || this;
        _this.orelhas = orelhas;
        return _this;
    }
    Cachorro.prototype.correr = function () {
        console.log('Correr');
    };
    Cachorro.prototype.rosnar = function () {
        console.log('rosnar');
    };
    return Cachorro;
}(OO_Pilar_Heranca_Animal_1.Animal));
exports.Cachorro = Cachorro;
