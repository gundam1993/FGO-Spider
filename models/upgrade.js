module.exports = function (DataTypes, DataTypes) {
  return DataTypes.define('upgrade', {
    id: { type: DataTypes.BIGINT(11), primaryKey: true, autoIncrement: true, unique: true },
    servantId: { type: DataTypes.BIGINT(11), field: 'servant_id', allowNull: false },
    n: { type: DataTypes.BIGINT(11) },
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