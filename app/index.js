const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sqlCreateTable = `CREATE TABLE IF NOT EXISTS pessoa(id int not null auto_increment, nome varchar(255), primary key(id))`
const sqlInsert = `INSERT INTO pessoa(nome) values('Ednelson')`
connection.query(sqlCreateTable)
connection.query(sqlInsert)
connection.end()

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle</h1>')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})