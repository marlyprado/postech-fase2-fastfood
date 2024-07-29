class Client {
    constructor({ id, cpf, nome, email, createdAt, updatedAt }) {
        this.id = id;
        this.cpf = cpf;
        this.nome = nome;
        this.email = email;
        this.createdAt = createdAt || new Date();
        this.updatedAt = updatedAt || new Date();
    }

    update(data) {
        Object.assign(this, data);
        this.updatedAt = new Date();
    }
}

module.exports = Client;
