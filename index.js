class cliente {
    nome;
    cpf;
    rg;
};


class contaCorrente {
    agencia;
    // #saldo = 0 ainda não esta aprovado esse método para tornar privado #
    _saldo = 0

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
        }
    }
    depositar (valor) {
       if (valor > 0) {
           this._saldo += valor
       }
    }
};


const cliente1 = new cliente();
cliente1.nome = "Maria";
cliente1.cpf = 99988877766;
cliente1.rg = 6888888;


const cliente2 = new cliente();
cliente2.nome = "João";
cliente2.cpf = 99988877755;
cliente2.rg = 6888887;


const contaCorrenteCliente1 = new contaCorrente();
contaCorrenteCliente1.agencia = 1001;

const contaCorrenteCliente2 = new contaCorrente();
contaCorrenteCliente2.agencia = 1001;


contaCorrenteCliente1.depositar(100)
contaCorrenteCliente1.depositar(150)
contaCorrenteCliente1.depositar(100)
contaCorrenteCliente1.sacar(50)

console.log(contaCorrenteCliente1);
