'use strict'

const xss = require('xss')
const uuid = require('uuid')
const APIError = require('./api-error')
const mongoose = require('mongoose')

const User = mongoose.model('User')

exports.signup = function*() {
  let nickName = this.request.body.nickName.trim()
  let passWord = this.request.body.passWord.trim()
  let user = yield User.findOne({
    nickName: nickName
  }).exec()

  console.log(passWord)

  if (!user) {
    user = new User({
      nickName: xss(nickName),
      passWord: xss(passWord),
      accessToken: uuid.v4()
    })
    console.log(user)
  } else {
    console.log(user)    
    if(user.passWord != passWord){
      throw new APIError('wrong_password')
    }
  }

  try {
    user = yield user.save()
  } catch (e) {
    throw new APIError()
  }

  this.body = {
    success: true,
    userId: user._id,
    accessToken: user.accessToken
  }

}

exports.verify = function*() {
  this.body = {
    success: true
  }
}

exports.update = function*() {
  this.body = {
    success: true
  }
}