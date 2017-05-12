const Material = require('./models/material.js');
const Craft = require('./models/craft.js')
var fs = require('fs');

const importMaterial = async () => {
  let raw = fs.readFileSync('material.json')
  let info = JSON.parse(JSON.parse(raw))
  let materials = info.material
  let len = materials.length
  for (let i = 0; i < len; i++) {
    let target = materials[i]
    let ma = await Material.create({
      id: target['NO'],
      name: target['NAME'],
      class: target['CLASS'],
      box: target['BOX'],
      quality: target['QUALITY'],
      describe: target['ABOUT'],
      pic: target['ICO']
    })
    console.log(ma)
  }
}

const importCraft = async (file) => {
  let raw = fs.readFileSync(file)
  let info = JSON.parse(JSON.parse(raw))
  let craft = info.CraftEssence
  let len = craft.length
  for (let i = 0; i < len; i++) {
    let target = craft[i]
    let c = await Craft.create({
      id: target['ID'],
      cname: target['NAME_CN'],
      jname: target['NAME_JP'],
      ename: target['NAME'],
      star: target['STAR'],
      baseHP: target['LV1_HP'],
      baseATK: target['LV1_ATK'],
      maxHP: target['LVMAX_HP'],
      maxATK: target['LVMAX_ATK'],
      cost: target['COST'],
      illust: target['ILLUST'],
      skillPic: target['ICO'],
      baseSkill: target['SKILL_E'],
      maxSkill: target['SKILLMAX_E'],
      describe: target['INTRO'],
      pic: target['PIC1']
    })
    console.log(c)
  }
}

importCraft('craftEssence3.json')




