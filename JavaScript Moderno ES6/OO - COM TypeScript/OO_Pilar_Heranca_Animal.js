"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(cor, tamanho) {
        this.cor = cor;
        this.tamanho = tamanho;
    }
    Animal.prototype.dormir = function () {
        console.log('Dormir');
    };
    return Animal;
}());
exports.Animal = Animal;
