const router = require('koa-router')()
const koa2Req = require('koa2-request')
const {
  SuccessModel,
  ErrorModel
} = require('../model/resModel')
const { getDramaList } = require('../controller/drama')

router.prefix('/drama')

router.get('/list', async function (ctx, next) {
  console.log(222222222222222222222222222)
  const keyword = ctx.query.keyword || '';
  const data = await getDramaList(keyword);
  ctx.body = new SuccessModel(data)
})


module.exports = router
