var sequelize = require('./database')
const Sequelize = require('sequelize')

var Material = sequelize.define('material', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: ''
  },
  class: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: ''
  },
  box: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: ''
  },
  quality: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: ''
  },
  describe: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: ''
  },
  pic: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue: ''
  }
}, {
  timestamp: true
})
module.exports = Material