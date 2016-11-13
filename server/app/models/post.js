'use strict'

const mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  tag: {
    type: String,
    index: true
  },
  comments: [{ author: String, content: String, data: Date}],
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    },
    readedCount: Number
  }
})

PostSchema.pre('save', function(next) {
  this.meta.updatedAt = Date.now()
  next()
})

const PostModel = mongoose.model('Post', PostSchema)

module.exports = PostModel