'use strict'

const xss = require('xss')
const mongoose = require('mongoose')
const APIError = require('./api-error')
const md = require('markdown-it')()

const Post = mongoose.model('Post')

// 获取posts
exports.list = function*(next) {
  let data
  try {
    data = yield Post.find().exec()  
  } catch (error) {
    throw new APIError()
  }

  data = data.map(item => {
    let content = item.content
      ? md.render(item.content)
      : ''
    
    return {
      id : item._id,
      title: item.title,
      description : item.description,
      content: content,
    }
  })

  this.body = {
    success: true,
    data: data
  }
}

// 新增posts
exports.create = function*(next) {
  let info = this.request.body

  if(!info.title) {
    throw new APIError('incomplete')
  }

  let post = new Post({
    title: info.title,
    description: info.description || '...',
    content: info.content || 'plain content'
  })

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
exports.update = function*(next) {

}

// 删除posts
exports.delete = function*(next) {

}