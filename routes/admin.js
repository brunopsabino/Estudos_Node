const path = require('path')
const express = require('express')

const router = express.Router()
const productsController = require('../controllers/products')


//Rota get para adicionar produtos
router.get('/add-product', productsController.getAddProduct)

//Filtrando rota para ser acessível apenas para requisições do tipo POST
router.post('/product', productsController.postAddProduct)


module.exports = router

