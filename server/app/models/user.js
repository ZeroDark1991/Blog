'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
  nickName: String,
  passWord: String,
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  verifyCode: String,
  accessToken: String,
  avatar: String,
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
})

UserSchema.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createdAt = Date.now()
  }
  this.meta.updatedAt = Date.now()
  next()
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel