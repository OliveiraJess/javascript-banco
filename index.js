import{ Cliente }  from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";

//clientes
const cliente1 = new Cliente("Maria", 99988877766);
const cliente2 = new Cliente("João", 99988877755);


//contas
const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1111);
const contaCorrenteCliente2 = new ContaCorrente(cliente2, 1001);


//transações
contaCorrenteCliente1.depositar(500)
// contaCorrenteCliente1.depositar(100);
// contaCorrenteCliente1.depositar(150);
// contaCorrenteCliente1.depositar(100);
// const valorSacado = contaCorrenteCliente1.sacar(100);

let valor = 200
contaCorrenteCliente1.transferir(valor, contaCorrenteCliente2)


//consoles
// console.log(valorSacado);
console.log(contaCorrenteCliente1);
console.log(contaCorrenteCliente2);
// console.log(contaCorrenteCliente2.cliente);
// console.log(contaCorrenteCliente2.saldo);
console.log(contaCorrenteCliente1.cliente);