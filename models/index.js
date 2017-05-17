var Servant = require('./servant');
var Treasure = require('./treasure');
var sequelize = require('./database')

Servant.hasOne(Treasure);
Treasure.belongsTo(Servant);
sequelize.sync();
