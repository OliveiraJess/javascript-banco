import {Cliente} from "./Cliente.js"
import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import {ContaCorrente} from "./contas/ContaCorrente.js"
import { ContaPoupanca } from "./contas/ContaPoupanca.js";
import { ContaSalario } from "./contas/ContaSalario.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

//clientes
const cliente1 = new Cliente("Maria", 99988877766);
const cliente2 = new Cliente("João", 99988877755);


//contas correntes
const contaCorrenteCliente1 = new ContaCorrente(0, cliente1, 1111);
const contaCorrenteCliente2 = new ContaCorrente(0, cliente2, 1001);


//contas poupanças
const contaPoupancaCliente1 = new ContaPoupanca(50, cliente1, 1111);
const contaPoupancaCliente2 = new ContaPoupanca(200, cliente2, 1001);


//contas salários
const contaSalarioCliente1 = new ContaSalario(cliente1);
const contaSalarioCliente2 = new ContaSalario(cliente2);

//funcionários
const diretor = new Diretor("Pedro",  99933377766, 15000);
const gerente = new Gerente("Ana",  99933355566, 12000);

diretor.cadastrarSenha("123456")
gerente.cadastrarSenha("0123456")

// const estaLogado = SistemaAutenticacao.login(diretor, "123456");
const estaLogado = SistemaAutenticacao.login(gerente, "0123456");




//consoles transações
// contaCorrenteCliente1.depositar(500)
// contaCorrenteCliente1.sacar(100)
// contaSalarioCliente1.depositar(100)
// contaSalarioCliente1.sacar(10)


//consoles contas corrente 
// console.log(contaCorrenteCliente1);
// console.log(contaCorrenteCliente2);

//consoles contas poupança
// console.log(contaPoupancaCliente1);
// console.log(contaPoupancaCliente2);

//consoles contas salário
// console.log(contaSalarioCliente1);
// console.log(contaSalarioCliente2);

//console numero de contas
// console.log(ContaCorrente.numeroDeContas);

//esta logado?
console.log(estaLogado)

