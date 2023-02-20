const express = require('express');
const router = express.Router();
const productController = require('../controllers/product_controller');

//routes for the api
router.get('/',productController.get);
router.post('/create',productController.create);
router.delete('/:id',productController.delete);
router.post('/:id/update_quantity',productController.update);
module.exports = router;
