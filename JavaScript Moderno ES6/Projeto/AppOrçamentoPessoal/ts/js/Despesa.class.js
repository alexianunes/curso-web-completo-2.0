define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Despesa = /** @class */ (function () {
        function Despesa(ano, mes, dia, tipo, descricao, valor) {
            this.ano = ano;
            this.mes = mes;
            this.dia = dia;
            this.tipo = tipo;
            this.descricao = descricao;
            this.valor = valor;
        }
        Despesa.prototype.validarDados = function () {
            for (var i in this) {
                if (this[i] == undefined || this[i].toString() == '' || this[i] == null) {
                    return false;
                }
            }
            return true;
        };
        return Despesa;
    }());
    exports.Despesa = Despesa;
});
