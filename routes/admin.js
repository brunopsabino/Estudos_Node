const path = require('path')
const express = require('express')

const router = express.Router()
const rootDir = require('../util/path')

const products = [];


//Rota get para adicionar produtos
router.get('/add-product', (req, res) => {
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('add-product', {docTitle: 'Add Product'})
})

//Filtrando rota para ser acessível apenas para requisições do tipo POST
router.post('/product', (req, res) => {
    products.push({ title: req.body.title });
    res.redirect('/')
})

exports.routes = router;
exports.products = products;
