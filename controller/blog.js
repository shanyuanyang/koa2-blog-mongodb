const Blog = require('./modules/blogs')
const xss = require('xss')

const getList = async (author, keyword) => {
  const whereOpt = {}
  if (author) whereOpt.author = author;
  if (keyword) whereOpt.keyword = new RegExp(keyword);
  console.log(whereOpt)

  const list = await Blog.find(whereOpt).sort({ _id: -1 })
  console.log(list)
  return list

}
const getDetail = async (id) => {
  const data = await Blog.find({ _id: id });
  console.log(data)
  return data
}

const newBlog = async (blogData = {}) => {
  // blogData 是一个博客对象，包含 title content author 属性
  const title = xss(blogData.title)
  // console.log('title is', title)
  const content = xss(blogData.content)
  const author = blogData.author
  const blog = await Blog.create({
    title,
    content,
    author
  })
  return {
    id: blog._id
  }
}

const updateBlog = async (id, blogData = {}) => {
  // id 就是要更新博客的 id
  // blogData 是一个博客对象，包含 title content 属性

  const title = xss(blogData.title)
  const content = xss(blogData.content)

  const blog = await Blog.findByIdAndUpdate(
    { _id: id },
    { title, content },
    { new: true }
  )
  if (blog == null) return false
  return true
}

const delBlog = async (id, author) => {
  // id 就是要删除博客的 id

  const blog = await Blog.findByIdAndDelete({
    _id: id,
    author
  })
  if (blog == null) return false
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}