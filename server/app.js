'use strict'

const path = require('path')
const port = 3000

/* DB init starts */
const dbInit = require(path.join(__dirname, '/config/db-init'))
const models_path = path.join(__dirname, '/app/models')
dbInit(models_path)
/* DB init ends */

/* Application init starts */
const koa = require('koa')
const logger = require('koa-logger')
const session = require('koa-session')
const bodyParser = require('koa-bodyparser')
const app = koa()

const router = require(path.join(__dirname, '/config/routes'))

app.keys = ['secret-session', 'zerodark1991-blog'] // to generate session
app.use(logger())
app.use(session(app))
app.use(bodyParser())

// error handle middleware
app.use(function *(next){
  try {
    yield next
  }
  catch (e) {
    console.log(e)
    this.body = e
  }
})

// router
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(port)
console.log(`App listening at port: ${port}`)