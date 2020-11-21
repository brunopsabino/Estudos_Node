const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const port = 3000

const app = express()

app.set('view engine', 'pug')//variável global
app.set('views', 'views')

//Routes
const adminRoutes = require('./routes/admin')
const shopRoutes  = require('./routes/shop')

//Adicionando body parser na aplicação para possibilitar a leitura das responses
app.use(bodyParser.urlencoded({extended: false}))
//Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

/* Fluxo de middlewares vai top to bottom*/
app.use('/admin', adminRoutes.routes)//Usando filter /admin para as rotas de adminRoutes
app.use(shopRoutes)

//Adicionando Page not Found
app.use((req, res) =>{
    //res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'))
    res.status(404).render('page-note-found', {docTitle: 'Page not Found'})
})

//Escutar porta definida
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })