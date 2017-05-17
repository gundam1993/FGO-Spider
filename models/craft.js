module.exports = function (sequelize, DataTypes) {
  return sequelize.define('craft', {
    id: { type: DataTypes.BIGINT(11), primaryKey: true, autoIncrement: true, unique: true },
    cname: { type: DataTypes.TEXT, defaultValue: '' },
    jname: { type: DataTypes.TEXT, defaultValue: '' },
    ename: { type: DataTypes.TEXT, defaultValue: '' },
    star: { type: DataTypes.INTEGER },
    baseHP: { type: DataTypes.INTEGER },
    baseATK: { type: DataTypes.INTEGER },
    maxHP: { type: DataTypes.INTEGER },
    maxATK: { type: DataTypes.INTEGER },
    cost: { type: DataTypes.INTEGER },
    illust: { type: DataTypes.TEXT, defaultValue: '' },
    skillPic: { type: DataTypes.TEXT, defaultValue: '' },
    baseSkill: { type: DataTypes.TEXT, defaultValue: '' },
    maxSkill: { type: DataTypes.TEXT, defaultValue: '' },
    describe: { type: DataTypes.TEXT, defaultValue: '' },
    pic: { type: DataTypes.TEXT, defaultValue: '' }
  }, 
  {
    timestamp: true,
    underscored: true,
    tableName: 'craft',
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })
}
