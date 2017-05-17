var sequelize = require('./database')
const Sequelize = require('sequelize')
const Servant = require('./servant')

var Treasure = sequelize.define('treasure', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  servantId: {
    type: Sequelize.INTEGER,
    references: {
      model: Servant,
      key: 'id'
    }
  },
  name: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  prop: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  rank: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  kind: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  effect: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  textArr: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  numArr: {
    type: Sequelize.TEXT,
    defaultValue: ''
  }
}, {
  timestamp: true
})
module.exports = Treasure
