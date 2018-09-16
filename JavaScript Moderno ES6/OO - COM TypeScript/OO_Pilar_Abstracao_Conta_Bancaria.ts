//modelo do objeto

export class ContaBancaria{
    private agencia : number
    private numeroConta: number 
    private saldo: number 
    private limite: number

    constructor(agencia: number, numeroConta: number, saldo: number, limite: number) {

        this.agencia = agencia
        this.numeroConta = numeroConta
        this.saldo = saldo
        this.limite = limite
    
    }

    public despositar(valroDeposito: number): void  {
        this.saldo += valroDeposito

        console.log("Valor depositado com sucesso, agora o seu saldo é de "+this.saldo)
    }

    public sacar(valorSaque: number):void {
        this.saldo -= valorSaque

        console.log("Valor sacado com sucesso, agora o seu saldo é de "+this.saldo)
    }

    public consultarSaldo(agencia: number, numeroConta: number): void{
        console.log("Seu saldo é: "+this.saldo)
    }

}