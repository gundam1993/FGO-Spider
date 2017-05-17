var sequelize = require('./models/database');
var Craft = sequelize.import('./models/craft');
var Material = sequelize.import('./models/material');
var Servant = sequelize.import('./models/servant');
var Talent = sequelize.import('./models/talent');
var Skill = sequelize.import('./models/skill');
var Treasure = sequelize.import('./models/treasure');
var Break = sequelize.import('./models/break');
var Upgrade = sequelize.import('./models/upgrade');

Servant.hasOne(Treasure);
Treasure.belongsTo(Servant);
Servant.hasMany(Talent, {foreignKey:'servant_id', targetKey:'id', as:'Talent'});
Servant.hasMany(Skill, {foreignKey:'servant_id', targetKey:'id', as:'Skill'});
Servant.hasMany(Break, {foreignKey:'servant_id', targetKey:'id', as:'Break'});
Servant.hasMany(Upgrade, {foreignKey:'servant_id', targetKey:'id', as:'Upgrade'});

sequelize.sync();