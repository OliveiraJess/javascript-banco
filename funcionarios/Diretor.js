import { Funcionarios } from "./Funcionarios.js";

export class Diretor extends Funcionarios{
    constructor(nome, cpf, salario) {
       super(nome, cpf, salario)
       
       this._bonificacao = 2.0;
    }
}