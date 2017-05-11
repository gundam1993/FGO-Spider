module.exports = {
  port: 3000,
  db: {
    name: 'ChaldeaNotes',
    username: 'tianyao',
    password: '',
    host: 'localhost',
    port: 5432
  },
  target: {
    servant: {
      url:  'http://fgowiki.com/guide/petdetail/'
    },
    craft: {
      url: 'http://fgowiki.com/guide/equipdetail/'
    },
    material: {
      url: 'http://fgowiki.com/guide/materialdetail/'
    }
  }
};