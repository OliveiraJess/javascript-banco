class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
};

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Maria";
cliente1.cpf = 99988877766;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "João";
cliente2.cpf = 99988877755;
cliente2.agencia = 1001;
cliente2.saldo = 0;


console.log(cliente1);