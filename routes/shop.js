const path = require('path')
const express = require('express')

const router = express.Router()

const shopController = require('../controllers/shop')
 

router.get('/', shopController.getIndex)

//Rota para Cart
router.get('/shop/cart', shopController.getCart)

router.get('/shop/products', shopController.getProducts)

router.get('/shop/checkout', shopController.getCart)


module.exports = router