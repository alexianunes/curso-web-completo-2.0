"use strict";
exports.__esModule = true;
var Produto = /** @class */ (function () {
    function Produto(descricao, preco) {
        this.descricao = descricao;
        this.preco = preco;
    }
    Produto.prototype.verDescricao = function () {
        console.log(this.descricao + " por apenas " + this.preco);
    };
    return Produto;
}());
exports.Produto = Produto;
