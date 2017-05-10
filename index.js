var http = require('http');
var cheerio = require('cheerio');
var sequelize = require('sequelize');
var config = require('./config');
var axios = require('axios');
var safeEval = require('safe-eval');
/**
 * 根据url和参数获取网页内容
 * @param {string}: url
 * @param {int}: number
 */
const getHtml = async (href, number) => {
  console.log(`正在获取第${number}个英灵资料`);
  let pageData = '';
  let res = await axios.get(href + number)
  getServantTable(res.data)
}

/**
 * 解析网页结构，获得从者数据表格element
 * @param {string}data 网页HTML数据
 */
const getServantTable = (data) => {
  let $ = cheerio.load(data);
  const servant = $('#page #row-move .col-md-9 .detailarticlelist')
                    .children().last().html().trim()
  let raw =  /^var datadetail \= \[(.+)\]\;\n\/\/console\.log\(datadetail/.exec(servant)[1];
  let info = JSON.parse(raw)
  console.log(info);
}

/**
 * 解析从者数据表格，获取基础数据（名称，星级，属性）
 * @param {Object} table 从者数据表格element
 */
const getServantBaseInfo = (table) => {

}

let html = getHtml(config.target.servant.url, 2)
