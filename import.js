const Material = require('./models/material.js');
const Craft = require('./models/craft.js')
const Servant = require('./models/servant.js')
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

const importServant = async () => {
  let raw = fs.readFileSync('servant.json')
  let info = JSON.parse(JSON.parse(raw))
  let servants = info.servant
  let len = servants.length
  for (let i = 0; i < len; i++) {
    let target = servants[i]
    let sv = await Servant.create({
      id: target['ID'],
      cname: target['NAME_CN'],
      jname: target['NAME_JP'],
      ename: target['NAME'],
      star: target['STAR'],
      class: target['CLASS'],
      avatar: target['Avatar'],
      pic1: target['PIC1'],
      pic2: target['PIC2'],
      pic3: target['PIC3'],
      pic4: target['PIC4'],
      baseHP: target['LV1_HP'],
      baseATK: target['LV1_ATK'],
      max0HP: target['LVMAX0_HP'],
      max0ATK: target['LVMAX0_ATK'],
      max1HP: target['LVMAX1_HP'],
      max1ATK: target['LVMAX1_ATK'],
      max2HP: target['LVMAX2_HP'],
      max2ATK: target['LVMAX2_ATK'],
      max3HP: target['LVMAX3_HP'],
      max3ATK: target['LVMAX3_ATK'],
      max4HP: target['LVMAX4_HP'],
      max4ATK: target['LVMAX4_ATK'],
      lv90HP: target['LV90_HP'],
      lv90ATK: target['LV90_ATK'],
      lv100HP: target['LV100_HP'],
      lv100ATK: target['LV100_ATK'],
      cost: target['COST'],
      illust: target['ILLUST'],
      cv: target['CV'],
      gluten: target['GLUTEN'],
      durable: target['DURABLE'],
      agile: target['AGILE'],
      magic: target['MAGIC'],
      lucky: target['LUCKY'],
      treasure: target['TREASURE'],
      skill1Name: target['SKILL_R1'],
      skill1Pic: target['SKILL_P1'],
      skill1Rank: target['SKILL_L1'],
      skill1Cold: target['SKILL_C1'],
      skill1Effect: target['SKILL_E1'],
      skill2Name: target['SKILL_R2'],
      skill2Pic: target['SKILL_P2'],
      skill2Rank: target['SKILL_L2'],
      skill2Effect: target['SKILL_E2'],
      skill2Cold: target['SKILL_C2'],
      skill3Name: target['SKILL_R3'],
      skill3Pic: target['SKILL_P3'],
      skill3Rank: target['SKILL_L3'],
      skill3Cold: target['SKILL_C3'],
      skill3Effect: target['SKILL_E3'],
      talent1Name: target['CSKILL_R1'],
      talent1Pic: target['CSKILL_P1'],
      talent1Lv: target['CSKILL_L1'],
      talent1Effect: target['CSKILL_E1'],
      talent2Name: target['CSKILL_R2'],
      talent2Pic: target['CSKILL_P2'],
      talent2Lv: target['CSKILL_L2'],
      talent2Effect: target['CSKILL_E2'],
      talent3Name: target['CSKILL_R3'],
      talent3Pic: target['CSKILL_P3'],
      talent3Lv: target['CSKILL_L3'],
      talent3Effect: target['CSKILL_E3'],
      talent4Name: target['CSKILL_R4'],
      talent4Pic: target['CSKILL_P4'],
      talent4Lv: target['CSKILL_L4'],
      talent4Effect: target['CSKILL_E4'],
      treasureName: target['T_NAME'],
      treasureProp: target['T_PROP'],
      treasureLv: target['T_LEVEL'],
      treasureType: target['T_TYPE'],
      treasureEffect: target['T_EFFECT'],
      cardB: target['CARD_BUSTER'],
      cardA: target['CARD_ARTS'],
      cardQ: target['CARD_QUICK'],
      intro1: target['INTRO1'],
      intro2: target['INTRO2'],
      intro3: target['INTRO3'],
      intro4: target['INTRO4'],
      intro5: target['INTRO5'],
      intro6: target['INTRO6'],
      intro7: target['INTRO7'],
      property: target['Property'],
      camp: target['Camp'],
      crit: target['Crit'],
      death: target['Death'],
      critPr: target['CritPr'],
      initiativeNp: target['InitiativeNp'],
      passiveRate: target['Passive'],
      hitA: target['ArtHit'],
      hitB: target['BusHit'],
      hitQ: target['QuiHit'],
      hitEX: target['EXHit'],
      height: target['Height'],
      weight: target['Weight'],
      origin: target['Origin'],
      region: target['Region'],
      nature: target['Attributes'],
      gender: target['Gender'],
      treasureTextArr: target['T_Text_Arr'],
      treasureNumArr: target['T_Num_Arr'],
      skill1Lv: target['S1LV'],
      skill2Lv: target['S2LV'],
      skill3Lv: target['S3LV'],
      skillNameArr: target['Skill_Name_Arr'],
      skillImgArr: target['Skill_Img_Arr'],
      skillBorderArr: target['Skill_Border_Arr'],
      skillNumberArr: target['Skill_Number_Arr'],
      skillQrArr: target['Skill_QP_Arr'],
      breakNameArr: target['Break_Name_Arr'],
      breakImgArr: target['Break_Img_Arr'],
      breakBorderArr: target['Break_Border_Arr'],
      breakNumberArr: target['Break_Number_Arr'],
      breakQpArr: target['Berak_QP_Arr'],
      circle: target['Circle'],
      tdPointQ: target['TdPointQ'],
      tdPointA: target['TdPointA'],
      tdPointB: target['TdPointB'],
      tdPointEX: target['TdPointEx'],
      whereform: whereform['STAR']
    })
    console.log(sv)
  }
}

importServant()

