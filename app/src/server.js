require('dotenv').config({path:'variaveis.env'})
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const PessoaService = require('./services/PessoaService')

const routes = require('./routes')

const server = express()
server.use(cors())
server.use(bodyParser.urlencoded({extended: false}))

server.use('/api', routes)

PessoaService.inserirPessoa()
server.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})