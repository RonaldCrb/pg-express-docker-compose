const Sequelize = require('sequelize')

const dbConfig = {
  dialect: 'postgres',
  host: "db",
  port: 5432
}

const sequelize = new Sequelize('postgres', 'postgres', 'example', dbConfig)

module.exports = sequelize