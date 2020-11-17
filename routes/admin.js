const path = require('path')
const express = require('express')
const { reset } = require('nodemon')

const router = express.Router()

router.get('/add-product', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
})

//Filtrando rota para ser acessível apenas para requisições do tipo POST
router.post('/product', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router