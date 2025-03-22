const productService = require('../../services/productService');

module.exports = async (req, res, next) => {
    await productService.deleteProduct(req.params.product_id);
    res.status(204).send();
};
