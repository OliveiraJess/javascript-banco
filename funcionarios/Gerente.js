import { Funcionarios } from "./Funcionarios.js";

export class Gerente extends Funcionarios{
    constructor(nome, cpf, salario) {
       super(nome, cpf, salario)

       this._bonificacao = 1.1;
       
    }
}