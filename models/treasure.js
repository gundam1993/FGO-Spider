module.exports = function (sequelize, DataTypes) {
  return sequelize.define('treasure', {
    id: { type: DataTypes.BIGINT(11), primaryKey: true, autoIncrement: true, unique: true },
    servantId: {
      type: DataTypes.BIGINT(11),
      field: 'servant_id',
      references: {
        model: 'Servant',
        key: 'id'
      }
    },
    name: { type: DataTypes.TEXT, defaultValue: '' },
    prop: { type: DataTypes.TEXT, defaultValue: '' },
    rank: { type: DataTypes.TEXT, defaultValue: '' },
    kind: { type: DataTypes.TEXT, defaultValue: '' },
    effect: { type: DataTypes.TEXT, defaultValue: '' },
    textArr: { type: DataTypes.TEXT, defaultValue: '' },
    numArr: { type: DataTypes.TEXT, defaultValue: ''}
  }, 
  {
    timestamp: true,
    underscored: true,
    tableName: 'treasure',
    charset: 'utf8',
    collate: 'utf8_general_ci',
    indexes: [{
      name: 'treasure_servantId',
      method: 'BTREE',
     fields: ['servant_id']
    }]
  })
}