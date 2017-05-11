var http = require('http');
var cheerio = require('cheerio');
var config = require('./config');
var axios = require('axios');
var fs = require('fs');
var servantInfoList = []
var craftEssence = []
var material = []

/**
 * 根据url和参数获取英灵内容
 * @param {string}: url
 * @param {int}: number
 */
const getServantInfo = async (href, number) => {
  console.log(`正在获取第${number}个英灵资料`);
  let pageData = '';
  let res = await axios.get(href + number)
  let $ = cheerio.load(res.data);
  const servant = $('#page #row-move .col-md-9 .detailarticlelist')
                    .children().last().html().trim()
  let raw =  /^var datadetail \= \[(.+)\]\;\n\/\/console\.log\(datadetail/.exec(servant)[1];
  let info = JSON.parse(raw)
  servantInfoList.push(info)
  return 
}

/**
 * 根据url和参数获取礼装内容
 * @param {string}: url
 * @param {int}: number
 */
const getCraftEssenceInfo = async (href, number) => {
  console.log(`正在获取第${number}个礼装资料`);
  let pageData = '';
  let res = await axios.get(href + number)
  let $ = cheerio.load(res.data);
  const servant = $('#page #row-move .col-md-9 .detailarticlelist')
                    .children().last().html().trim()
  let raw =  /^var datadetail \= \[(.+)\]\;\nvar url/.exec(servant)[1];
  let info = JSON.parse(raw)
  craftEssence.push(info)
}

/**
 * 根据url和参数获取素材内容
 * @param {string}: url
 * @param {int}: number
 */
const getMaterialInfo = async (href, number) => {
  console.log(`正在获取第${number}个素材资料`);
  let pageData = '';
  let res = await axios.get(href + number)
  let $ = cheerio.load(res.data);
  const servant = $('#page #row-move .col-md-9 .detailarticlelist')
                    .children().last().html().trim()
  let raw =  /^var datadetail \= \[(.+)\]\;\nvar url/.exec(servant)[1];
  let info = JSON.parse(raw)
  material.push(info)
}

/**
 * 写入文件
 * @param  {string} info     需要写入的内容
 * @param  {string} savePath 写入的文件名
 */
const writeFile = (info, savePath) => {
  info = JSON.stringify(info)
  fs.writeFile(savePath, info, 'utf8', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('success')
    }
  });
}

/**
 * 等待
 * @param  {integer} ms 等待的毫秒数
 */
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const loadAllServant = async () => {
  for (var i = 1; i < 168; i++) {
    await timeout(3000)
    await getServantInfo(config.target.servant.url, i)
  }
  let info = {}
  info.servant = servantInfoList
  info = JSON.stringify(info)
  writeFile(info, 'servant.json')
}

const loadCraftEssence = async (from, to, file) => {
  for (var i = from; i < to; i++) {
    await timeout(2000)
    await getCraftEssenceInfo(config.target.craft.url, i)
  }
  let info = {}
  info.craftEssence = craftEssence
  info = JSON.stringify(info)
  writeFile(info, file)
}

const loadMaterial = async (from, to, file) => {
  for (var i = from; i < to; i++) {
    await timeout(2000)
    await getMaterialInfo(config.target.material.url, i)
  }
  let info = {}
  info.material = material
  info = JSON.stringify(info)
  writeFile(info, file)
}

loadMaterial(1, 75, 'material.json')
