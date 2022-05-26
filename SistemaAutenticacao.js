export class SistemaAutenticacao {
    static login(autenticacao, senha) {
        if (SistemaAutenticacao.autenticavel(autenticacao)) {

            return autenticacao.autenticar(senha);
        }
        return false;
    }

    static autenticavel(autenticacao) {
        return "autenticar" in autenticacao && autenticacao.autenticar instanceof Function;
    }
}


