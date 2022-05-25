import{ Cliente }  from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";

const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.agencia = 1111;
contaCorrenteCliente1.cliente = new Cliente();
contaCorrenteCliente1.cliente.nome  = "Maria";
contaCorrenteCliente1.cliente.cpf = 99988877766;
contaCorrenteCliente1.cliente.rg = 6888888;


contaCorrenteCliente1.depositar(500)


const contaCorrenteCliente2 = new ContaCorrente();
contaCorrenteCliente2.agencia = 1001;
contaCorrenteCliente2.cliente = new Cliente();
contaCorrenteCliente2.cliente.nome  = "João";
contaCorrenteCliente2.cliente.cpf = 99988877755;
contaCorrenteCliente2.cliente.rg = 6888887;

// contaCorrenteCliente1.depositar(100);
// contaCorrenteCliente1.depositar(150);
// contaCorrenteCliente1.depositar(100);

// const valorSacado = contaCorrenteCliente1.sacar(100);

let valor = 200
contaCorrenteCliente1.transferir(valor, contaCorrenteCliente2)

// console.log(valorSacado);
console.log(contaCorrenteCliente1);
console.log(contaCorrenteCliente2);
console.log(contaCorrenteCliente2.cliente);
console.log(contaCorrenteCliente2.saldo);
