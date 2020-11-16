const express = require('express')
const bodyParser = require('body-parser')
const port = 3000

const app = express()

app.use(bodyParser.urlencoded({extended: false})) //Adicionando body parser na aplicação

/* Fluxo de middlewares vai top to bottom*/
app.get('/', (req, res) => {
    res.send('<h1>Hello Express!</h1>')
})

app.use('/add-product', (req, res) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
})

app.use('/product', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })