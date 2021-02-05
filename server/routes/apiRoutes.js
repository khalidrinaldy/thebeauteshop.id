//Initialize router api
const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        status: 'Good',
        message: 'Welcome to thebeauteshop api'
    });
});

//Product Controller
const productController = require('../controller/productController');
router.route('/data-products')
    .get(productController.getAll)
    .post(productController.create)

router.route('/data-products/:id')
    .get(productController.getOne)
    .put(productController.edit)
    .delete(productController.delete)
    
module.exports = router;