var Servant = require('./models/servant');
var Treasure = require('./models/treasure');
var sequelize = require('./models/database')

Servant.hasOne(Treasure);
Treasure.belongsTo(Servant);
sequelize.sync();
