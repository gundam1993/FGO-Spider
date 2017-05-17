module.exports = function (sequelize, DataTypes) {
  return sequelize.define('material', {
    id: { type: DataTypes.BIGINT(11), primaryKey: true, autoIncrement: true, unique: true },
    name: { type: DataTypes.TEXT, allowNull: false, defaultValue: '' },
    class: { type: DataTypes.TEXT, allowNull: false, defaultValue: '' },
    box: { type: DataTypes.TEXT, allowNull: false, defaultValue: '' },
    quality: { type: DataTypes.TEXT, allowNull: false, defaultValue: '' },
    describe: { type: DataTypes.TEXT, allowNull: false, defaultValue: '' },
    pic: { type: DataTypes.TEXT, allowNull: false, defaultValue: '' }
  }, 
  {
    timestamp: true,
    underscored: true,
    tableName: 'material',
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })
}