const {Router} = require('express');
const cartsControllerBd = require('../controller/carts.controller.bd')


const router =  Router();

router.get('/:cid', cartsControllerBd.bdgetCartId)
router.post('/:cid/product/:pid', cartsControllerBd.addProductToCart);


module.exports = router;