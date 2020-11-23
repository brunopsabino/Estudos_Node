const path = require('path')
const express = require('express')

const router = express.Router()
const rootDir = require('../util/path')
const adminData = require('./admin')


router.get('/', (req, res) => {
    //res.sendFile(path.join(rootDir, 'views', 'shop.html')) //Envia página HTML na response
    const products = adminData.products
    //console.log(products)
    res.render('shop', {prods: products, docTitle: 'Shop', path: '/'}) //Renderizar um template. Arwuivos pug foram definidos como padrão. Pasta views, definida como pasta de templates
})


module.exports = router