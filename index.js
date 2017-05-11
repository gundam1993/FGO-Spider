var http = require('http');
var cheerio = require('cheerio');
var sequelize = require('sequelize');
var config = require('./config');
var axios = require('axios');
var fs = require('fs');
var servantInfoList = []
/**
 * 根据url和参数获取网页内容
 * @param {string}: url
 * @param {int}: number
 */
const getHtml = async (href, number) => {
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

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const loadAll = async () => {
  for (var i = 1; i < 168; i++) {
    await timeout(3000)
    await getHtml(config.target.servant.url, i)
  }
  let info = {}
  info.servant = servantInfoList
  info = JSON.stringify(info)
  writeFile(info, 'servant.json')
}

loadAll()