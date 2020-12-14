const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const port = 3000

const app = express()

app.set('view engine', 'ejs')//variável global para definir a templete engine que sera usada
app.set('views', 'views')

//Controller
const erroController  = require('./controllers/error')

//Routes
const adminRoutes = require('./routes/admin')
const shopRoutes  = require('./routes/shop')

//Adicionando body parser na aplicação para possibilitar a leitura das responses
app.use(bodyParser.urlencoded({extended: false}))
//Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

/* Fluxo de middlewares vai top to bottom*/
app.use('/admin', adminRoutes)//Usando filter /admin para as rotas de adminRoutes
app.use(shopRoutes)

//Adicionando Page not Found
app.use(erroController.get404)

//Escutar porta definida
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })