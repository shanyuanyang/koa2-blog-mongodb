const User = require('./modules/users')
const {
  genPassword
} = require('../utils/cryp')

const login = async (username, password) => {

  // // 生成加密密码
  password = genPassword(password)
  const rows = await User.find({
    username,
    password
  })
  console.log(rows)
  if (rows == null) return []
  return rows[0];

}

module.exports = {
  login
}