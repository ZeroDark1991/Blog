'use strict'

/* DB init starts */
const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
const db = 'mongodb://localhost/blog'
const port = 3000

// connect DB
mongoose.Promise = require('bluebird')
mongoose.connect(db)

// retrieve DB models
const models_path = path.join(__dirname, 'app/models')
const dbInit = function(_Path) {
  fs
    .readdirSync(_Path)
    .forEach(file => {
      let filePath = path.join(models_path, '/' + file)
      let stat = fs.statSync(filePath)

      if (stat.isFile()) {
        if (/(.*)\.(js|coffee)/.test(file)) {
          require(file)
        }
      } else if (stat.isDirectory()) {
        dbInit(file)
      }
    })
}
dbInit(models_path)
/* DB init ends */

/* Application init starts */
const koa = require('koa')
const logger = require('koa-logger')
const session = require('koa-session')
const bodyParser = require('koa-bodyparser')
const app = koa()

const router = require(path.join(__dirname, 'config/routes'))

app.keys = ['secret-session', 'zerodark1991-blog']
app.use(logger())
app.use(session(app))
app.use(bodyParser())

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(port)
console.log(`App listening at port: ${port}`)