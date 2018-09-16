import { ContaBancaria } from "./OO_Pilar_Abstracao_Conta_Bancaria";
import { Cadeira } from "./OO_Pilar_Abstracao_Reflexao_Cadeiras";
import { Sofa } from "./OO_Pilar_Abstracao_Reflexao_Sofa";
import { Tv } from "./OO_Pilar_Encapsulamento";
import { Cachorro } from "./OO_Pilar_Heranca_Cachorro";
import { Passaro } from "./OO_Pilar_Heranca_Passaro";
import { Papagaio } from "./OO_Pilar_Heranca_Papagaio";
import { Avestruz } from "./OO_Pilar_Polimorfismo_Avestruz";
import { Produto } from "./OO_Objeto_Literal";

//OO_Pilar_Abstracao_Conta_Bancaria

/*let conta1 = new ContaBancaria(256, 123, 2568, 9000)
let conta2 = new ContaBancaria(458, 567, 9587, 10000)

conta1.consultarSaldo(256, 123)
conta1.despositar(3000)
conta1.sacar(1000)
conta1.consultarSaldo(256, 123)

conta2.consultarSaldo(458, 567)
conta2.despositar(100)
conta2.sacar(300)
conta2.consultarSaldo(458, 567)*/


//OO_Pilar_Abstracao_Reflexao_Cadeira

/*let cadeira1 = new Cadeira(3, true, 'Preta')
let cadeira2 = new Cadeira(2, false, 'Laranja')

cadeira1.girarCadeira()
cadeira1.qtdPernas()
cadeira1.corCadeira()

cadeira2.girarCadeira()
cadeira2.qtdPernas()
cadeira2.corCadeira()*/

//OU COM ARRAY

/*let cadeiras = Array()
cadeiras.push(new Cadeira(3, true, 'Preta'))
cadeiras.push(new Cadeira(2, false, 'Laranja'))

console.log(cadeiras)

console.log(cadeiras[0].qtdPernas())*/

//OO_Pilar_Abstracao_Reflexao_Sofa

/*let sofa1 = new Sofa(2, 'Vermelho', false)
let sofa2 = new Sofa(3, 'Amarelo', true)

sofa1.retornarCor()
sofa1.retornarQtdLugares()
sofa1.reclinarSofa()

sofa2.retornarCor()
sofa2.retornarQtdLugares()
sofa2.reclinarSofa()*/

//OO_Pilar_Encapsulamento
// let tv = new Tv()
// console.log(tv.canalAtivo)

//OO_Pilar_Heranca

/*let cachorro = new Cachorro('Preto',30,'Grandes e Caídas')
let passaro = new Passaro('Branco e Marron',10,'Curto')

console.log(cachorro)
cachorro.correr()
cachorro.dormir()
cachorro.rosnar()

console.log(passaro)
passaro.dormir()
passaro.voar()

let papagaio = new Papagaio('Verde', 10, 'Curto', true)

console.log(papagaio)
papagaio.dormir()
papagaio.voar()
papagaio.falar()*/

//OO_Pilar_Polimorfismo

/*let avestruz = new Avestruz('Banco e Preto', 250, 'Grande')
avestruz.enterrarCabeca()
avestruz.voar()*/


//OO_Objeto_Literal

//let produto = new Produto('Notebook', 2200)
//produto.verDescricao()

//Geralmente são objetos únicos dentro da aplicação
//Exemplo: formulário -> servidor recupera dados e monta um obj literal -> obj literal -> json
// json -> http -> Server -> Armazena

/*let produtoLiteral = {
    descricao: 'Geladeira',
    preco: 1800,
    verDescricao: function() {
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

produtoLiteral.verDescricao()*/

//OO_Objeto_Literal_Melhorias

/*let nomeObjeto :string = 'Alexia'
let idadeObjeto : number = 20
let sexoObjeto = 'Feminino'
let profissaoObjeto = 'Programadora'

let objeto = {
    nomeObjeto,
    idadeObjeto,
    sexoObjeto,
    profissaoObjeto,
    exibirResumo() {
        console.log(`${this.nomeObjeto}, ${this.idadeObjeto} anos, ${this.sexoObjeto} é ${this.profissaoObjeto}`)
    }
}

console.log(objeto)
objeto.exibirResumo()*/

//Operador Rest/Spread

//contexto spread
/*let titutoloArtigo = 'Como utilizar o operador rest/spread'
console.log(titutoloArtigo)
console.log(...titutoloArtigo)
console.log([...titutoloArtigo])*/

//Destructing parte 1

/*let frutas = ['Abacaxi', 'Uva', 'Pera', 'Mamão']
let [a, b, , c] = frutas
console.log(a,b,c)

let coisas = [['Abacaxi', 'Uva', 'Pera', 'Mamão'], ['José', 'Maria']]
let [,[,nome2]] = coisas
let[[,,fruta3],] = coisas
console.log(nome2)
console.log(fruta3)*/


//Destructing parte 2

/*let produto = {
    descricao: 'Notebook',
    preco: 1800,
    detalhes: {
        fabricante: 'abc',
        modelo: 'xyz'
    }
}*/

//token
//array utiliza []
//objeto utiliza {}

//let { descricao, preco} = produto
//let { descricao: d, preco: p} = produto
//let { detalhes: {fabricante, modelo} } = produto
//console.log(fabricante, modelo)

//Destructing parte 3

//let arr = [10, 20, 30, 40]

/*function teste([a, b]) {
    console.log(a,b)
}

teste(arr)*/

//objeto
/*let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}

function teste({a, b, z = 10}){
    console.log(a, b, z)
}

teste(obj)*/

//Destructing parte 4

/*let arr = [10, 20, 30, 40]
let [a, ...resto] = arr
console.log(a)
console.log(resto)*/

/*let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}

let {a, ...z} = obj
console.log(a)
console.log(z)*/

