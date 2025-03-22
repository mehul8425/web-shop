const express = require('express');
const create = require('../controllers/products/create');
const retrieve = require('../controllers/products/retrieve');
const update = require('../controllers/products/update');
const deleteProduct = require('../controllers/products/delete');
const search = require('../controllers/products/search');

const router = express.Router();

router.get('/', search);
router.post('/', create);
router.get('/:product_id', retrieve);
router.put('/:product_id', update);
router.delete('/:product_id', deleteProduct);

module.exports = router;
