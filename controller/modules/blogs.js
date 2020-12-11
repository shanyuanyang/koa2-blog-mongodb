// 对应user集合
const mongoose = require('../../db/db')

// 用 Schema 定义数据规范
const BlogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true, //必须
  },
  content: String,
  author: {
    type: String,
    required: true, //必须
  },
})

// module 对应 collection
const Blog = mongoose.model('blog', BlogSchema)

module.exports = Blog;