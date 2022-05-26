export class SistemaAutenticacao {
    static login(autenticacao, senha) {
        return autenticacao.autenticar(senha);

    }
}