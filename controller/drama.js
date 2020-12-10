
const { exec } = require('../db/mysql')


const getDramaList = async (keyword) => {
  // select * from blogs where 1=1 
  let sql = `select * from classification where 1=1 `
  if (keyword) {
    sql += `and popularly like '%${keyword}%' `
  }
  sql += `order by id desc;`
  // console.log('exec(sql)',await exec(sql))
  return await exec(sql);
}

module.exports = {
  getDramaList
}