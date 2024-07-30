const validCategories = ["Lanche", "Acompanhamento", "Bebida", "Sobremesa"];

class Product {
    constructor({ id, name, price, category, description, createdAt, updatedAt }) {
        this.validateCategory(category)

        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
        this.createdAt = createdAt || new Date();
        this.updatedAt = updatedAt || new Date();
    }

    update(data) {
        this.validateCategory(data.category)

        Object.assign(this, data);
        this.updatedAt = new Date();
    }

    validateCategory(category) {
        if (!validCategories.includes(category)) {
            throw new Error(`Categoria inválida: ${category}. As categorias são: ${validCategories.join(", ")}`);
        }
    }
}

module.exports = Product;
