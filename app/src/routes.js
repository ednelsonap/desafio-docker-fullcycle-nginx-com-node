const express = require('express')
const router = express.Router()

const PessoaController = require('./controllers/PessoaController')

router.get('/pessoas', PessoaController.buscarTodos)

module.exports = router