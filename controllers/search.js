const productService = require('../../services/productService');

module.exports = async (req, res, next) => {
    const products = await productService.getProducts(req.query);
    res.json(products);
};
