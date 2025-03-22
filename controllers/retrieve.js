const productService = require('../../services/productService');

module.exports = async (req, res, next) => {
    const product = await productService.getProductById(req.params.product_id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
};
