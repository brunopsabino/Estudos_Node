const path = require('path')
const express = require('express')

const router = express.Router()

const productsController = require('../controllers/products')
 

router.get('/', productsController.getProducts)

//Rota para Cart
router.get('/shop/cart', productsController.getCart)


module.exports = router