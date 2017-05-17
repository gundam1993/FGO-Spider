module.exports = function (sequelize, DataTypes) {
  return sequelize.define('break', {
    id: { type: DataTypes.BIGINT(11), primaryKey: true, autoIncrement: true, unique: true },
    servantId: { type: DataTypes.BIGINT(11), field: 'servant_id', allowNull: false },
    stage: { type: DataTypes.BIGINT(11) },
    material: { type: DataTypes.TEXT, defaultValue: '' },
    pic: { type: DataTypes.TEXT, defaultValue: '' },
    num: { type: DataTypes.BIGINT(11) },
    qp: { type: DataTypes.BIGINT(11) },
  }, {
    timestamp: true,
    underscored: true,
    tableName: 'break',
    charset: 'utf8',
    collate: 'utf8_general_ci',
    indexes: [{
      name: 'break_servantId',
      method: 'BTREE',
      fields: ['servant_id']
    }]
  });
}
