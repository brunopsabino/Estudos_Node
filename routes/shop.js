const path = require('path')
const express = require('express')

const router = express.Router()
const rootDir = require('../util/path')


router.get('/', (req, res) => {
    //res.sendFile(path.join(rootDir, 'views', 'shop.html')) //Envia página HTML na response
    res.render('shop') //Renderizar um template. Arwuivos pug foram definidos como padrão. Pasta views, definida como pasta de templates
})


module.exports = router