class ClientPresenter {
    static present(client) {
        return {
            cpf: client.cpf,
            nome: client.nome,
            email: client.email
        };
    }
}

module.exports = ClientPresenter;
