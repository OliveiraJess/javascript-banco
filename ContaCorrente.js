import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

// #saldo = 0  -- ainda não esta aprovado esse método para tornar privado, utilizando #


export class ContaCorrente extends Conta {

    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas += 1;
    }

//sobreescrevendo o comportamento de sacar de Conta
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }

};
