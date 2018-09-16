"use strict";
//modelo do objeto
exports.__esModule = true;
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(agencia, numeroConta, saldo, limite) {
        this.agencia = agencia;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.limite = limite;
    }
    ContaBancaria.prototype.despositar = function (valroDeposito) {
        this.saldo += valroDeposito;
        console.log("Valor depositado com sucesso, agora o seu saldo é de " + this.saldo);
    };
    ContaBancaria.prototype.sacar = function (valorSaque) {
        this.saldo -= valorSaque;
        console.log("Valor sacado com sucesso, agora o seu saldo é de " + this.saldo);
    };
    ContaBancaria.prototype.consultarSaldo = function (agencia, numeroConta) {
        console.log("Seu saldo é: " + this.saldo);
    };
    return ContaBancaria;
}());
exports.ContaBancaria = ContaBancaria;
