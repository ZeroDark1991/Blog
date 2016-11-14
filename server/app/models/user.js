'use strict'

const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
  phone: {
    unique: true,
    type: String
  },
  verifyCode: String,
  accessToken: String,
  nickName: String,
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