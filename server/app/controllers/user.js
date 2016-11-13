'use strict'

const xss = require('xss')
const uuid = require('uuid')
const APIError = require('./api-error')
const mongoose = require('mongoose')

const User = mongoose.model('User')

exports.signup = function*(next) {
  let phone = this.request.body.phone.trim()
  let user = yield User.findOne({
    phone: phone
  }).exec()

  if (!user) {
    user = new User({
      phone: xss(phone)
    })
  }
  else {
    user.verifyCode = '123123'
  }

  try{
    user = yield user.save()
  }
  catch (e) {
    throw new APIError()
  }

  this.body = {
    success: true
  }

}

exports.verify = function*(next) {
  this.body = {
    success: true
  }
}

exports.update = function*(next) {
  this.body = {
    success: true
  }
}