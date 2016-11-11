'use strict'
const Schema = require('mongoose').Schema
const UserSchema = new Schema({
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
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

UserSchema.pre('save', next => {
  if (!this.isNew) {
    this.meta.updateAt = Date.now
  }
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel