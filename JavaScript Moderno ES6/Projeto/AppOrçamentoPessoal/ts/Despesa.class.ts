export class Despesa {

	private ano: string
	private mes: string
	private dia: string;
	private tipo: string
	private descricao: string
	private valor: string

	constructor(ano: string, mes: string, dia: string, tipo: string, descricao: string, valor: string) {
		this.ano = ano
		this.mes = mes
		this.dia = dia
		this.tipo = tipo
		this.descricao = descricao
		this.valor = valor
	}

	public validarDados() : boolean{
		for(let i in this){
			if(this[i] == undefined || this[i].toString() == '' || this[i] == null){
				return false
			}
		}
		return true
	}
}

