// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const Koa = require('koa2')
const Router = require('koa-router')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
// import generator from './generator'
// import fs from 'fs'
// import path from 'path'

const app = new Koa()
const router = new Router()

app.use(bodyParser())
app.use(cors())

// port host
const port = 3002
const host = 'localhost'

// router
router.get('/', async ctx => {
  ctx.body = ctx.request.query
})

router.get('/test', async ctx => {
  ctx.body = ctx.request.query
})

// router.post('/submit', async (ctx: Context) => {
//   const { dirName } = ctx.request.body
//   const has = fs.existsSync(path.resolve(`entries/${dirName}`))
//   if (has) {
//     ctx.body = {
//       code: 500,
//       message: `${dirName}已经存在，请重新输入`,
//     }
//     return
//   }
//   fs.mkdirSync(path.resolve(`entries/${dirName}`))
//   generator(ctx.request.body)
//   ctx.body = {
//     code: 200,
//     message: '成功',
//   }
// })
app.use(router.routes())

app.listen(port, host, () => console.log('The service is running on http://' + host + ':' + port))
