module.exports = function (DataTypes, DataTypes) {
  return DataTypes.define('skill', {
    id: { type: DataTypes.BIGINT(11), primaryKey: true, autoIncrement: true, unique: true },
    servantId: { type: DataTypes.BIGINT(11), field: 'servant_id', allowNull: false },
    name: { type: DataTypes.TEXT, defaultValue: '' },
    pic: { type: DataTypes.TEXT, defaultValue: '' },
    rank: { type: DataTypes.TEXT, defaultValue: '' },
    cold: { type: DataTypes.BIGINT(11) },
    effect: { type: DataTypes.TEXT, defaultValue: '' },
    upGradeEffect: { type: DataTypes.TEXT, defaultValue: '' },
    materialName: { type: DataTypes.TEXT, defaultValue: '' },
    materialImg: { type: DataTypes.TEXT, defaultValue: '' },
    materialBorder: { type: DataTypes.TEXT, defaultValue: '' },
    materialNumber: { type: DataTypes.TEXT, defaultValue: '' },
    materialQr: { type: DataTypes.TEXT, defaultValue: '' },
  }, {
    timestamp: true,
    underscored: true,
    tableName: 'skill',
    charset: 'utf8',
    collate: 'utf8_general_ci',
    indexes: [{
      name: 'skill_servantId',
      method: 'BTREE',
      fields: ['servant_id']
    }]
  });
}
