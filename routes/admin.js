const path = require('path')
const express = require('express')

const router = express.Router()
const adminController = require('../controllers/admin')


//Rota get para adicionar produtos
router.get('/add-product', adminController.getAddProduct)

//Filtrando rota para ser acessível apenas para requisições do tipo POST
router.post('/product', adminController.postAddProduct)

// /admin/products => GET
router.get('/products', adminController.getProducts)


module.exports = router

