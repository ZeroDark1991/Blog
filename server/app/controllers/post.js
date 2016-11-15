'use strict'

const xss = require('xss')
const mongoose = require('mongoose')
const APIError = require('./api-error')
const md = require('markdown-it')()

const Post = mongoose.model('Post')

// 获取posts
exports.list = function*() {
  let query = this.query.id
    ? { _id : this.query.id }
    : { }
  let data
  try {
    data = yield Post.find(query).populate('author', 'nickName meta.createdAt').exec()
  } catch (error) {
    throw new APIError()
  }

  data = data.map(item => {
    let content = item.content
      ? md.render(item.content)
      : ''

    return {
      id: item._id,
      title: item.title,
      description: item.description,
      content: content,
      author: item.author
    }
  })

  this.body = {
    success: true,
    data: data
  }
}

// 新增posts
exports.create = function*() {
  let info = this.request.body

  if(!info.title) {
    throw new APIError('incomplete')
  }

  let post = new Post({
    title: xss(info.title),
    description: xss(info.description) || '...',
    content: xss(info.content) || 'plain content'
  })
  
  if(info.author) {
    post.author = info.author
  }

  try {
    yield post.save()
  }
  catch(e) {
    throw new APIError()
  }

  this.body = {
    success: true,
    message: '保存成功'
  }
}

// 修改posts
exports.update = function*() {

}

// 删除posts
exports.delete = function*() {

}