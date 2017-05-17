module.exports = function (DataTypes, DataTypes) {
  return DataTypes.define('break', {
    id: { type: DataTypes.BIGINT(11), primaryKey: true, autoIncrement: true, unique: true },
    servantId: { type: DataTypes.BIGINT(11), field: 'servant_id', allowNull: false },
    stage: { type: DataTypes.BIGINT(11) },
    materialId: { type: DataTypes.BIGINT(11), field: 'material_id', allowNull: false },
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
    },
    {
      name: 'break_materialId',
      method: 'BTREE',
      fields: ['material_id']
    }]
  });
}
