var sequelize = require('./database')
const Sequelize = require('sequelize')

var Servant = sequelize.define('servant', {
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
  class: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  avatar: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  pic1: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  pic2: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  pic3: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  pic4: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  baseHP: {
    type: Sequelize.INTEGER
  },
  baseATK: {
    type: Sequelize.INTEGER
  },
  max0HP: {
    type: Sequelize.INTEGER
  },
  max0ATK: {
    type: Sequelize.INTEGER
  },
  max1HP: {
    type: Sequelize.INTEGER
  },
  max1ATK: {
    type: Sequelize.INTEGER
  },
  max2HP: {
    type: Sequelize.INTEGER
  },
  max2ATK: {
    type: Sequelize.INTEGER
  },
  max3HP: {
    type: Sequelize.INTEGER
  },
  max3ATK: {
    type: Sequelize.INTEGER
  },
  max4HP: {
    type: Sequelize.INTEGER
  },
  max4ATK: {
    type: Sequelize.INTEGER
  },
  lv90HP: {
    type: Sequelize.INTEGER
  },
  lv90ATK: {
    type: Sequelize.INTEGER
  },
  lv100HP: {
    type: Sequelize.INTEGER
  },
  lv100ATK: {
    type: Sequelize.INTEGER
  },
  cost: {
    type: Sequelize.INTEGER
  },
  illust: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  cv: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  gluten: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  durable: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  agile: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  magic: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  lucky: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  treasure: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  skill1Name: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  skill1Pic: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  skill1Rank: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  skill1Cold: {
    type: Sequelize.INTEGER
  },
  skill1Effect: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  skill2Name: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  skill2Pic: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  skill2Rank: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  skill2Cold: {
    type: Sequelize.INTEGER
  },
  skill2Effect: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  skill3Name: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  skill3Pic: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  skill3Rank: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  skill3Cold: {
    type: Sequelize.INTEGER
  },
  skill3Effect: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  talent1Name: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  talent1Pic: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  talent1Lv: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  talent1Effect: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  talent2Name: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  talent2Pic: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  talent2Lv: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  talent2Effect: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  talent3Name: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  talent3Pic: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  talent3Lv: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  talent3Effect: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  talent4Name: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  talent4Pic: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  talent4Lv: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  talent4Effect: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  treasureName: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  treasureProp: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  treasureLv: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  treasureType: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  treasureEffect: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  cardA: {
    type: Sequelize.INTEGER
  },
  cardB: {
    type: Sequelize.INTEGER
  },
  cardQ: {
    type: Sequelize.INTEGER
  },
  intro1: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  intro2: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  intro3: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  intro4: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  intro5: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  intro6: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  intro7: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  property: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  camp: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  crit: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  death: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  critPr: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  initiativeNp: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  passiveRate: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  hitA: {
    type: Sequelize.INTEGER
  },
  hitB: {
    type: Sequelize.INTEGER
  },
  hitQ: {
    type: Sequelize.INTEGER
  },
  hitEX: {
    type: Sequelize.INTEGER
  },
  height: {
    type: Sequelize.INTEGER
  },
  weight: {
    type: Sequelize.INTEGER
  },
  origin: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  region: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  nature: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  gender: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  treasureTextArr: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  treasureNumArr: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  skill1Lv: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  skill2Lv: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  skill3Lv: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  skillNameArr: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  skillImgArr: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  skillBorderArr: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  skillNumberArr: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  skillQrArr: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  breakNameArr: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  breakImgArr: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  breakBorderArr: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  breakNumberArr: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  breakQpArr: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  circle: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  tdPointQ: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  tdPointA: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  tdPointB: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  tdPointEX: {
    type: Sequelize.TEXT,
    defaultValue: ''
  },
  whereform: {
    type: Sequelize.TEXT,
    defaultValue: ''
  }
}, {
  timestamp: true
})
module.exports = Servant
