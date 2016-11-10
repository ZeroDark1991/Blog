'use strict'

const fs = require('fs')
const path = require('path')
  // const mongoose = require('mongoose')
  // const db = 

// mongoose.Promise = require('bluebird')

// const models_path = path.join(__dirname, 'app/models')

// const walk = function(modelPath) {
//   fs
//     .readdirSync(modelPath)
//     .forEach(file => {
//     })
// }

const koa = require('koa')
const logger = require('koa-logger')
const session = require('koa-session')
const bodyParser = require('koa-bodyparser')
const router = require('koa-router')({ prefix: '/api' })
const app = koa()

const port = 3000

app.keys = ['secret-session', 'zerodark1991-blog']
app.use(logger())
app.use(session(app))
app.use(bodyParser())

router.get('/', function*(next) {
  this.body = `time ${this.session.icr}`
  console.log(this.session)
})

app.use(function*(next) {
  this.session.icr ? this.session.icr++ : this.session.icr = 1
  yield next
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(port)
console.log(`App listening at port: ${port}`)