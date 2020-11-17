const path = require('path')
const express = require('express')

const router = express.Router()
const rootDir = require('../util/path')

//Rota get para adicionar produtos
router.get('/add-product', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

//Filtrando rota para ser acessível apenas para requisições do tipo POST
router.post('/product', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router