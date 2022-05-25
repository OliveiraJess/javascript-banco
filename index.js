import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

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




//consoles transações
// contaCorrenteCliente1.depositar(500)
// contaCorrenteCliente1.sacar(100)
contaSalarioCliente1.depositar(100)
contaSalarioCliente1.sacar(10)


//consoles contas corrente 
// console.log(contaCorrenteCliente1);
// console.log(contaCorrenteCliente2);

//consoles contas poupança
// console.log(contaPoupancaCliente1);
// console.log(contaPoupancaCliente2);

//consoles contas salário
console.log(contaSalarioCliente1);
// console.log(contaSalarioCliente2);

//console numero de contas
// console.log(ContaCorrente.numeroDeContas);



