'use strict'

const Router = require('koa-router')
const router = new Router({ prefix: '/api' })
const Post = require('../app/controllers/post')
const User = require('../app/controllers/user')
const App  = require('../app/controllers/app')

// posts
router.get('/posts', Post.list)
router.post('/posts', Post.create)

// users
router.post('/u/signup', User.signup)
router.post('/u/verify', User.verify)
router.post('/u/update', User.update)

// app
router.get('/signature', App.signature)

module.exports = router