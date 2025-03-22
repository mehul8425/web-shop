const Product = require('../models/Product');

class ProductService {
    async getProducts(query) {
        const { page = 1, perPage = 10 } = query;
        const skip = (page - 1) * perPage;
        return Product.find().skip(skip).limit(Number(perPage));
    }

    async createProduct(data) {
        return Product.create(data);
    }

    async getProductById(id) {
        return Product.findById(id);
    }

    async updateProduct(id, data) {
        return Product.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteProduct(id) {
        return Product.findByIdAndDelete(id);
    }
}

module.exports = new ProductService();
