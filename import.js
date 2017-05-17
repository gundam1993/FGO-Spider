const Material = require('./model').Material;
const Craft = require('./model').Craft;
const Servant = require('./model').Servant;
const Treasure = require('./model').Treasure;
const Talent = require('./model').Talent;
const Skill = require('./model').Skill;
const Break = require('./model').Break;
const Upgrade = require('./model').Upgrade;
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
};

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
};

const importServant = async () => {
  let raw = fs.readFileSync('servant.json')
  let info = JSON.parse(JSON.parse(raw))
  let servants = info.servant
  let len = servants.length
  for (let i = 0; i < len; i++) {
    let target = servants[i]
    let sv = await Servant.create({
      id: target['ID'],
      cname: target['NAME'],
      jname: target['NAME_JP'],
      ename: target['NAME_EN'],
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
      treasureRank: target['TREASURE'],
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
      circle: target['Circle'],
      tdPointQ: target['TdPointQ'],
      tdPointA: target['TdPointA'],
      tdPointB: target['TdPointB'],
      tdPointEX: target['TdPointEx'],
      whereform: target['whereform']
    })
    console.log(sv)
  }
};

const importTreasure = async () => {
  let raw = fs.readFileSync('servant.json')
  let info = JSON.parse(JSON.parse(raw))
  let servants = info.servant
  let len = servants.length
  for (let i = 0; i < len; i++) {
    let ta = servants[i]
    if (ta['T_NAME'] !== '') {
      let t1 = await Treasure.create({
        servantId: ta['ID'],
        name: ta['T_NAME'],
        prop: ta['T_PROP'],
        rank: ta['T_LEVEL'],
        kind: ta['T_TYPE'],
        effect: ta['T_EFFECT'],
        textArr: ta['T_Text_Arr'],
        numArr: ta['T_Num_Arr'],
      })
      console.log(t1)
    }
  }
};

const importTalent = async () => {
  let raw = fs.readFileSync('servant.json')
  let servants = JSON.parse(JSON.parse(raw)).servant
  let len = servants.length
  for (let i = 0; i < len; i++) {
    let ta = servants[i]
    for (let j = 1; j < 5; j++) {
      if (ta[`CSKILL_R${j}`] !== '') {
        let tt = await Talent.create({
          servantId: ta['ID'],
          name: ta[`CSKILL_R${j}`],
          pic: ta[`CSKILL_P${j}`],
          rank: ta[`CSKILL_L${j}`],
          effect: ta[`CSKILL_E${j}`]
        })
        console.log(tt)
      }
    }
  }
};

const importSkill = async () => {
  let raw = fs.readFileSync('servant.json')
  let servants = JSON.parse(JSON.parse(raw)).servant
  let len = servants.length
  for (let i = 0; i < len; i++) {
    let ta = servants[i]
    for (let j = 1; j < 4; j++) {
      if (ta[`SKILL_R${j}`] !== '') {
        let sk = await Skill.create({
          servantId: ta['ID'],
          name: ta[`SKILL_R${j}`],
          pic: ta[`SKILL_P${j}`],
          rank: ta[`SKILL_L${j}`],
          cold: ta[`SKILL_C${j}`],
          effect: ta[`SKILL_E${j}`],
          upGradeEffect: ta[`S${j}LV`]
        })
        console.log(sk)
      }
    }
  }
};

const importBreak = async () => {
  let raw = fs.readFileSync('servant.json')
  let servants = JSON.parse(JSON.parse(raw)).servant
  let len = servants.length
  for (let i = 0; i < len; i++) {
    let ta = servants[i]
    if (ta['Break_Name_Arr'] !== '') {
      let nss = ta['Break_Name_Arr'].split('|')
      let pss = ta['Break_Img_Arr'].split('|')
      let uss = ta['Break_Number_Arr'].split('|')
      let qs = ta['Berak_QP_Arr'].split('|')
      for (let j = 0; j < nss.length; j++) {
        let ns = nss[j].split(',')
        let ps = pss[j].split(',')
        let us = uss[j].split(',')
        for (let k = 0; k < ns.length; k++) {
          let bk = await Break.create({
            servantId: ta['ID'],
            stage: j+1,
            material: ns[k],
            pic: ps[k],
            num: us[k],
            qp: qs[j]
          })
          console.log(bk)
        }
      }
    }
  }
};

const importUpgrade = async () => {
  let raw = fs.readFileSync('servant.json')
  let servants = JSON.parse(JSON.parse(raw)).servant
  let len = servants.length
  for (let i = 0; i < len; i++) {
    let ta = servants[i]
    if (ta['Skill_Name_Arr'] !== '') {
      let nss = ta['Skill_Name_Arr'].split('|')
      let pss = ta['Skill_Img_Arr'].split('|')
      let uss = ta['Skill_Number_Arr'].split('|')
      let qs = ta['Skill_QP_Arr'].split('|')
      for (let j = 0; j < nss.length; j++) {
        let ns = nss[j].split(',')
        let ps = pss[j].split(',')
        let us = uss[j].split(',')
        for (let k = 0; k < ns.length; k++) {
          let ug = await Upgrade.create({
            servantId: ta['ID'],
            n: j+1,
            material: ns[k],
            pic: ps[k],
            num: us[k],
            qp: qs[j]
          })
          console.log(ug)
        }
      }
    }
  }
};

