const db = require('../db')

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM pessoa', (error, results) => {
                if(error) {
                    rejeitado(error)
                    return
                }
                aceito(results)
            })
        })
    }
}

module.exports = {
    inserirPessoa: () => {
        db.query(`INSERT INTO pessoa(nome) values('Ednelson')`)
    }
}