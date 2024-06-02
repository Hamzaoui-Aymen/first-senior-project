const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController');

router.get('/getAll', ProductController.getAllProducts);
router.get('/getone/:id', ProductController.getProduct);
router.post('/post', ProductController.createProduct);
router.put('/update/:id', ProductController.updateProduct);
router.delete('/delet/:id', ProductController.deleteProduct);

module.exports = router;