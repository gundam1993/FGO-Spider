const Material = require('./models/material.js');
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

importMaterial()