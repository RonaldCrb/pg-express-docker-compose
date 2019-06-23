const Sequelize = require('sequelize')

const dbConfig = {
  dialect: 'postgres',
  host: "db"
}

const sequelize = new Sequelize('postgres', 'postgres', 'example', dbConfig)

module.exports = sequelize