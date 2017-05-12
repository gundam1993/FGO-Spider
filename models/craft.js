var sequelize = require('./database')
const Sequelize = require('sequelize')

var Craft = sequelize.define('craft', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cname: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  jname: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  ename: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  star: {
    type: Sequelize.INTEGER
  },
  baseHP: {
    type: Sequelize.INTEGER
  },
  baseATK: {
    type: Sequelize.INTEGER
  },
  maxHP: {
    type: Sequelize.INTEGER
  },
  maxATK: {
    type: Sequelize.INTEGER
  },
  cost: {
    type: Sequelize.INTEGER
  },
  illust: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  skillPic: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  baseSkill: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  maxSkill: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  describe: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  pic: {
    type: Sequelize.TEXT,
    defaultValue: ''
  }
}, {
  timestamp: true
})
module.exports = Craft
