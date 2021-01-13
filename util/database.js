const Sequelize = require('sequelize')

const sequelize = new Sequelize('node', 'root', '1q2w3e4r', {
    dialect: 'mysql', 
    host: 'localhost'})

module.exports = sequelize