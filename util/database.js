const mysql = require('mysql2')

//Cria pool de conexões
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node',
    password: '1q2w3e4r'
})

//Exporta uma promessa
module.exports = pool.promise()