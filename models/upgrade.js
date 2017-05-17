module.exports = function (sequelize, DataTypes) {
  return sequelize.define('upgrade', {
    id: { type: DataTypes.BIGINT(11), primaryKey: true, autoIncrement: true, unique: true },
    servantId: { type: DataTypes.BIGINT(11), field: 'servant_id', allowNull: false },
    n: { type: DataTypes.BIGINT(11) },
    material: { type: DataTypes.TEXT, defaultValue: '' },
    pic: { type: DataTypes.TEXT, defaultValue: '' },
    num: { type: DataTypes.BIGINT(11) },
    qp: { type: DataTypes.BIGINT(11) },
  }, {
    timestamp: true,
    underscored: true,
    tableName: 'upgrade',
    charset: 'utf8',
    collate: 'utf8_general_ci',
    indexes: [{
      name: 'upgrade_servantId',
      method: 'BTREE',
      fields: ['servant_id']
    }]
  });
}