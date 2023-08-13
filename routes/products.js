// including required files into product.js
const express = require('express');

const productController = require('../controller/productController')
const Product = require('../models/product');
const { parse } = require('path');

//creating router
const router = express.Router();

//defining the routes
router.get('/', productController.getProducts);
router.post('/create', productController.create);
router.get('/showById/:id', productController.getProductById);
router.delete('/delete/:productID', productController.delete);
router.post('/updateQuantity/:productID', productController.updateQuantity);

//exporting the router
module.exports = router;