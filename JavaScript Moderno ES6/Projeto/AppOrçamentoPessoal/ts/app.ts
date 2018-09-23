import {Despesa} from "./Despesa.class"
import {Bd} from "./Bd.class"
import * as $ from "jquery";
import 'bootstrap';	

let btnPlus = <HTMLInputElement>document.getElementById('btnPlus')
let bodyConsulta = <HTMLInputElement>document.getElementById('consulta')
let btnPesquisar = <HTMLInputElement>document.getElementById('btnPesquisar')

let bd = new Bd()

function cadastrarDespesa() {
	
	let ano = <HTMLInputElement>document.getElementById('ano')
	let mes = <HTMLInputElement>document.getElementById('mes')
	let dia = <HTMLInputElement>document.getElementById('dia')
	let tipo = <HTMLInputElement>document.getElementById('tipo')
	let descricao = <HTMLInputElement>document.getElementById('descricao')
	let valor = <HTMLInputElement>document.getElementById('valor')

	//console.log(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)
	
	let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)

	

	if(despesa.validarDados()){
		bd.gravar(despesa)
		
		document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso'
		document.getElementById('modal_titulo_div').className = 'modal-header text-success'

		document.getElementById('modal_body').innerHTML = 'Despesa foi cadastrada com sucesso'

		document.getElementById('btn_footer').innerHTML = 'Voltar'
		document.getElementById('btn_footer').className = 'btn btn-success'

		$('#modalRegistraDespesa').modal('show')

		ano.value = ''
		mes.value = ''
		dia.value = ''
		tipo.value =  ''
		descricao.value =  ''
		valor.value = ''

	}else{
		document.getElementById('modal_titulo').innerHTML = 'Erro na Gravação'
		document.getElementById('modal_titulo_div').className = 'modal-header text-danger'

		document.getElementById('modal_body').innerHTML = 'Existem campos obrigatório que não foram preenchidos corretamente'

		document.getElementById('btn_footer').innerHTML = 'Voltar e Corrigir'
		document.getElementById('btn_footer').className = 'btn btn-danger'

		$('#modalRegistraDespesa').modal('show')
	}
	

}

function carregarListaDespesas(despesas = Array(), filtro = false){

	if(despesas.length == 0 && filtro == false){
		despesas = bd.recuperarTodosRegistros()
	}
	

	//selecionando o elemento tbody da tabela
	let listaDespesas: HTMLTableElement = <HTMLTableElement>document.getElementById('listaDespesas')	
	listaDespesas.innerHTML = ''
	//percorrer o arry despesas, listand cada despesa de forma dinâmica

	despesas.forEach(function(d){

		//criando a linha (tr)
		let linha = listaDespesas.insertRow()

		//criar as colunas (td)
		linha.insertCell(0).innerHTML = `${d.dia} / ${d.mes} / ${d.ano}`


		//ajustar o tipo
		switch(d.tipo) {
			case '1': 
				d.tipo = 'Alimentação'
				break;
			case '2': 
				d.tipo = 'Educação'
				break;
			case '3': 
				d.tipo = 'Lazer'
				break;
			case '4': 
				d.tipo = 'Saúde'
				break;	
			case '5': 
				d.tipo = 'Transporte'
				break;	
		}

		linha.insertCell(1).innerHTML = d.tipo

		linha.insertCell(2).innerHTML = d.descricao
		linha.insertCell(3).innerHTML = d.valor

		//criar o botão de exclusão
		let btn = document.createElement("button")
		btn.className = 'btn btn-danger'
		btn.innerHTML = '<i class="fas fa-times"></i>'
		btn.id = `id_despesa_${d.id}`
		btn.onclick = function() {
    		//remover a despesa
    		let id = this.id.replace('id_despesa_','')
    		bd.remover(id)
    		window.location.reload()
		};
		linha.insertCell(4).appendChild(btn)
	})
}


function pesquisarDespesa() {
	let ano = <HTMLInputElement>document.getElementById('ano')
	let mes = <HTMLInputElement>document.getElementById('mes')
	let dia = <HTMLInputElement>document.getElementById('dia')
	let tipo = <HTMLInputElement>document.getElementById('tipo')
	let descricao = <HTMLInputElement>document.getElementById('descricao')
	let valor = <HTMLInputElement>document.getElementById('valor')

	let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)

	let despesas = bd.pesquisar(despesa)

	carregarListaDespesas(despesas, true)

}


if(btnPlus){
	btnPlus.onclick = function() {
    	cadastrarDespesa()
	};
}

if(bodyConsulta){
	bodyConsulta.onload = function(){
		carregarListaDespesas()
	};
}

if(btnPesquisar){
	btnPesquisar.onclick = function() {
    	pesquisarDespesa()
	};
}
