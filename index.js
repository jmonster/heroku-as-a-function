require('dotenv').config()
const PORT = process.env.PORT

const koa = require('koa')
const koaRouter = require('koa-router')
const functions = require('./lib/load-functions')
const app = new koa()
const router = new koaRouter()

functions.forEach(([verb, path, fctn]) => router[verb](path, fctn))

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(PORT, () => console.log(`heroku-as-a-function listening on port ${PORT}`))