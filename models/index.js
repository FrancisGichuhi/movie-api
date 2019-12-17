const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const MovieModel = require('./movies')

const config = allConfigs['development']

const connection = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
})

const Movies = MovieModel(connection, Sequelize)
module.exports = {        
    Movies,
}