import{ Cliente }  from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente();
cliente1.nome = "Maria";
cliente1.cpf = 99988877766;
cliente1.rg = 6888888;


const cliente2 = new Cliente();
cliente2.nome = "João";
cliente2.cpf = 99988877755;
cliente2.rg = 6888887;


const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.agencia = 1001;

const contaCorrenteCliente2 = new ContaCorrente();
contaCorrenteCliente2.agencia = 1001;


contaCorrenteCliente1.depositar(100);
contaCorrenteCliente1.depositar(150);
contaCorrenteCliente1.depositar(100);


const valorSacado = contaCorrenteCliente1.sacar(100);

console.log(valorSacado);
console.log(contaCorrenteCliente1);
