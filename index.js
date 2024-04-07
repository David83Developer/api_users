//CONFIGURAÇÂO INICIAL:

//configuração de express:
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()



//forma de ler o JSON/ middlewares:

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//Rotas da API

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// rota inicial / endpoint

app.get('/', (req, res)=>{

    //mostrar requisição

    res.json('Hello World!')

})

//entregar uma porta

const db_user = process.env.DB_USER
const db_password = encodeURIComponent(process.env.DB_PASSWORD)
const port = process.env.PORT

mongoose.connect(`mongodb+srv://${db_user}:${db_password}@fortests.lbml0f2.mongodb.net/?retryWrites=true&w=majority&appName=fortests`)
.then(()=>{

console.log('conectado ao banco de dados')
app.listen(port || 3333, ()=> console.log('rodando'))

})
.catch((err)=> console.log(err))

