export class Bd{


	constructor () {
		let id : string = localStorage.getItem('id')

		if(id === null){
			localStorage.setItem('id', '0')
		}
	}

	public getProximoId(){
		let proximoId = localStorage.getItem('id')
		return parseInt(proximoId) + 1

	}

	public gravar(despesa: any) : any{
		let id = this.getProximoId().toString()

		//JSON.stringfy = transforma um objeto literal em JSON
		localStorage.setItem(id, JSON.stringify(despesa))
		localStorage.setItem('id', id)	
	}

	public recuperarTodosRegistros() {

		//array de despesas
		let despesas = Array()

		let id = parseInt(localStorage.getItem('id'))

		//recuperar todas as despesas cadastradas em localStorage
		for(let i = 1; i <= id; i++ ){

			let iAtual = i.toString()

			//recuperar a despesa
			//JSOn.parse = transforma um JSON em um objeto literal
			let despesa = JSON.parse(localStorage.getItem(iAtual))

			//existe a possibilidade he haver índices que foram pulados/removidos 
			if(despesa === null){
				continue
			}

			despesa.id = i
			despesas.push(despesa)

		}

		return despesas
		
	}

	public pesquisar (despesa) {
		let despesasFiltradas = Array()

		despesasFiltradas = this.recuperarTodosRegistros()


		//ano
		if(despesa.ano != ''){
			despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano)
		}
		//mes
		if(despesa.mes != ''){
			despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes)
		}
		//dia
		if(despesa.dia != ''){
			despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)
		}
		//tipo 
		if(despesa.tipo != 'Tipo'){
			despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo)
		}
		//descricao
		if(despesa.descricao != ''){
			despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao)
		}
		//valor
		if(despesa.valor != ''){
			despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor)
		}


		return despesasFiltradas
	}

	public remover(id) {
		localStorage.removeItem(id)
	}
}
