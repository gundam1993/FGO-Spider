module.exports = function (DataTypes, DataTypes) {
  return DataTypes.define('talent', {
    id: { type: DataTypes.BIGINT(11), primaryKey: true, autoIncrement: true, unique: true },
    servantId: { type: DataTypes.BIGINT(11), field: 'servant_id', allowNull: false },
    name: { type: DataTypes.TEXT, defaultValue: '' },
    pic: { type: DataTypes.TEXT, defaultValue: '' },
    rank: { type: DataTypes.TEXT, defaultValue: '' },
    effect: { type: DataTypes.TEXT, defaultValue: '' },
  }, {
    timestamp: true,
    underscored: true,
    tableName: 'talent',
    charset: 'utf8',
    collate: 'utf8_general_ci',
    indexes: [{
      name: 'talents_servantId',
      method: 'BTREE',
      fields: ['servant_id']
    }]
  });
}
