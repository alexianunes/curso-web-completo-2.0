define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Bd = /** @class */ (function () {
        function Bd() {
            var id = localStorage.getItem('id');
            if (id === null) {
                localStorage.setItem('id', '0');
            }
        }
        Bd.prototype.getProximoId = function () {
            var proximoId = localStorage.getItem('id');
            return parseInt(proximoId) + 1;
        };
        Bd.prototype.gravar = function (despesa) {
            var id = this.getProximoId().toString();
            //JSON.stringfy = transforma um objeto literal em JSON
            localStorage.setItem(id, JSON.stringify(despesa));
            localStorage.setItem('id', id);
        };
        Bd.prototype.recuperarTodosRegistros = function () {
            //array de despesas
            var despesas = Array();
            var id = parseInt(localStorage.getItem('id'));
            //recuperar todas as despesas cadastradas em localStorage
            for (var i = 1; i <= id; i++) {
                var iAtual = i.toString();
                //recuperar a despesa
                //JSOn.parse = transforma um JSON em um objeto literal
                var despesa = JSON.parse(localStorage.getItem(iAtual));
                //existe a possibilidade he haver índices que foram pulados/removidos 
                if (despesa === null) {
                    continue;
                }
                despesa.id = i;
                despesas.push(despesa);
            }
            return despesas;
        };
        Bd.prototype.pesquisar = function (despesa) {
            var despesasFiltradas = Array();
            despesasFiltradas = this.recuperarTodosRegistros();
            //ano
            if (despesa.ano != '') {
                despesasFiltradas = despesasFiltradas.filter(function (d) { return d.ano == despesa.ano; });
            }
            //mes
            if (despesa.mes != '') {
                despesasFiltradas = despesasFiltradas.filter(function (d) { return d.mes == despesa.mes; });
            }
            //dia
            if (despesa.dia != '') {
                despesasFiltradas = despesasFiltradas.filter(function (d) { return d.dia == despesa.dia; });
            }
            //tipo 
            if (despesa.tipo != 'Tipo') {
                despesasFiltradas = despesasFiltradas.filter(function (d) { return d.tipo == despesa.tipo; });
            }
            //descricao
            if (despesa.descricao != '') {
                despesasFiltradas = despesasFiltradas.filter(function (d) { return d.descricao == despesa.descricao; });
            }
            //valor
            if (despesa.valor != '') {
                despesasFiltradas = despesasFiltradas.filter(function (d) { return d.valor == despesa.valor; });
            }
            return despesasFiltradas;
        };
        Bd.prototype.remover = function (id) {
            localStorage.removeItem(id);
        };
        return Bd;
    }());
    exports.Bd = Bd;
});
