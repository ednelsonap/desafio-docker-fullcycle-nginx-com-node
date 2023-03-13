const PessoaService = require('../services/PessoaService')

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]}

        let pessoas = await PessoaService.buscarTodos()

        for(let i in pessoas) {
            json.result.push({
                id: pessoas[i].id,
                nome: pessoas[i].nome
            })
        }
        res.json(json)
    }
}