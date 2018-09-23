define(["require", "exports", "./Despesa.class", "./Bd.class", "jquery", "bootstrap"], function (require, exports, Despesa_class_1, Bd_class_1, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var btnPlus = document.getElementById('btnPlus');
    var bodyConsulta = document.getElementById('consulta');
    var btnPesquisar = document.getElementById('btnPesquisar');
    var bd = new Bd_class_1.Bd();
    function cadastrarDespesa() {
        var ano = document.getElementById('ano');
        var mes = document.getElementById('mes');
        var dia = document.getElementById('dia');
        var tipo = document.getElementById('tipo');
        var descricao = document.getElementById('descricao');
        var valor = document.getElementById('valor');
        //console.log(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)
        var despesa = new Despesa_class_1.Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value);
        if (despesa.validarDados()) {
            bd.gravar(despesa);
            document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso';
            document.getElementById('modal_titulo_div').className = 'modal-header text-success';
            document.getElementById('modal_body').innerHTML = 'Despesa foi cadastrada com sucesso';
            document.getElementById('btn_footer').innerHTML = 'Voltar';
            document.getElementById('btn_footer').className = 'btn btn-success';
            $('#modalRegistraDespesa').modal('show');
            ano.value = '';
            mes.value = '';
            dia.value = '';
            tipo.value = '';
            descricao.value = '';
            valor.value = '';
        }
        else {
            document.getElementById('modal_titulo').innerHTML = 'Erro na Gravação';
            document.getElementById('modal_titulo_div').className = 'modal-header text-danger';
            document.getElementById('modal_body').innerHTML = 'Existem campos obrigatório que não foram preenchidos corretamente';
            document.getElementById('btn_footer').innerHTML = 'Voltar e Corrigir';
            document.getElementById('btn_footer').className = 'btn btn-danger';
            $('#modalRegistraDespesa').modal('show');
        }
    }
    function carregarListaDespesas(despesas, filtro) {
        if (despesas === void 0) { despesas = Array(); }
        if (filtro === void 0) { filtro = false; }
        if (despesas.length == 0 && filtro == false) {
            despesas = bd.recuperarTodosRegistros();
        }
        //selecionando o elemento tbody da tabela
        var listaDespesas = document.getElementById('listaDespesas');
        listaDespesas.innerHTML = '';
        //percorrer o arry despesas, listand cada despesa de forma dinâmica
        despesas.forEach(function (d) {
            //criando a linha (tr)
            var linha = listaDespesas.insertRow();
            //criar as colunas (td)
            linha.insertCell(0).innerHTML = d.dia + " / " + d.mes + " / " + d.ano;
            //ajustar o tipo
            switch (d.tipo) {
                case '1':
                    d.tipo = 'Alimentação';
                    break;
                case '2':
                    d.tipo = 'Educação';
                    break;
                case '3':
                    d.tipo = 'Lazer';
                    break;
                case '4':
                    d.tipo = 'Saúde';
                    break;
                case '5':
                    d.tipo = 'Transporte';
                    break;
            }
            linha.insertCell(1).innerHTML = d.tipo;
            linha.insertCell(2).innerHTML = d.descricao;
            linha.insertCell(3).innerHTML = d.valor;
            //criar o botão de exclusão
            var btn = document.createElement("button");
            btn.className = 'btn btn-danger';
            btn.innerHTML = '<i class="fas fa-times"></i>';
            btn.id = "id_despesa_" + d.id;
            btn.onclick = function () {
                //remover a despesa
                var id = this.id.replace('id_despesa_', '');
                bd.remover(id);
                window.location.reload();
            };
            linha.insertCell(4).appendChild(btn);
        });
    }
    function pesquisarDespesa() {
        var ano = document.getElementById('ano');
        var mes = document.getElementById('mes');
        var dia = document.getElementById('dia');
        var tipo = document.getElementById('tipo');
        var descricao = document.getElementById('descricao');
        var valor = document.getElementById('valor');
        var despesa = new Despesa_class_1.Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value);
        var despesas = bd.pesquisar(despesa);
        carregarListaDespesas(despesas, true);
    }
    if (btnPlus) {
        btnPlus.onclick = function () {
            cadastrarDespesa();
        };
    }
    if (bodyConsulta) {
        bodyConsulta.onload = function () {
            carregarListaDespesas();
        };
    }
    if (btnPesquisar) {
        btnPesquisar.onclick = function () {
            pesquisarDespesa();
        };
    }
});
