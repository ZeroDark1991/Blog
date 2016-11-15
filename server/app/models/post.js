'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PostSchema = new Schema({
  title: String,
  description: String,
  content: String,
  tag: String,
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
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