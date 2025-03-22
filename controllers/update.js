const productService = require('../../services/productService');

module.exports = async (req, res, next) => {
    const product = await productService.updateProduct(req.params.product_id, req.body);
    res.json(product);
};
