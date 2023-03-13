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
        db.query(`CREATE TABLE IF NOT EXISTS pessoa(id int not null auto_increment, nome varchar(255), primary key(id))`)
        db.query(`INSERT INTO pessoa(nome) values('Ednelson')`)
    }
}