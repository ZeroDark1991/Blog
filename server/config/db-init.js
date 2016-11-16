'use strict'

const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
const db = 'mongodb://162.243.68.36/blog'

// connect DB
mongoose.Promise = require('bluebird')
mongoose.connect(db)

// monitor
const connection = mongoose.connection
connection.on('error', console.error.bind(console, 'connection error:'))
connection.once('open',() => {
  console.log('db connection succeed..')
})

// retrieve DB models
const dbInit = function(_Path) {
  fs
    .readdirSync(_Path)
    .forEach(file => {
      let filePath = path.join(_Path, '/' + file)
      let stat = fs.statSync(filePath)

      if (stat.isFile()) {
        if (/(.*)\.(js|coffee)/.test(file)) {
          require(filePath)
        }
      } else if (stat.isDirectory()) {
        dbInit(file) // 深度遍历
      }
    })
}

module.exports = dbInit