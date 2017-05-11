const config = require('../config').db
const Sequelize = require('sequelize')

// 连接数据库
var sequlize = new Sequelize(config.name, config.username, config.password, {
  host: config.host,
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  },
  storage: 'ChaldeaNotes.db',
})

module.exports = sequlize
