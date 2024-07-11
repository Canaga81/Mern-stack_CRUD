const express = require('express');
const routes = express.Router();

const { getAllProducts, getProductByID, createProduct, updateProductFunc, deleteProductFunc } = require('../controllers/productController.js');

routes.get('/', getAllProducts);
routes.get('/:id', getProductByID);
routes.post('/', createProduct);
routes.put('/:id', updateProductFunc);
routes.delete('/:id', deleteProductFunc);

module.exports = routes;