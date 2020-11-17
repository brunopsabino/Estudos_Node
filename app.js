const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const port = 3000

const app = express()

//Routes
const adminRoutes = require('./routes/admin')
const shopRoutes  = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false})) //Adicionando body parser na aplicação

/* Fluxo de middlewares vai top to bottom*/
app.use('/admin', adminRoutes)
app.use(shopRoutes)

//Adicionando Page not Found
app.use((req, res) =>{
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'))
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })