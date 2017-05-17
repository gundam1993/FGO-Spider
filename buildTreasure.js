const Servant = require('./models/servant.js');
const Treasure = require('./models/treasure.js');

const buildTreasure = async () => {
  let servants = await Servant.findAll()
  const len = servants.length
  for (var i = 0; i < len; i++) {
    let sv = servants[i]
    console.log(sv)
    if (sv.treasureName === '') {
      continue
    } else {
      let t = await Treasure.create({
        id: sv.id,
        servantId: sv.id,
        name: sv.treasureName,
        prop: sv.treasureProp,
        rank: sv.treasureLv,
        kind: sv.treasureType,
        effect: sv.treasureEffect,
        textArr: sv.treasureTextArr,
        numArr: sv.treasureNumArr
      })
      console.log(t)
    }
  }
};
