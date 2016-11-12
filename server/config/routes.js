'use strict'

const Router = require('koa-router')
const router = new Router({ prefix: '/api' })
const path = require('path')
const User = require('../app/controllers/user')
const App = require('../app/controllers/app')

// users
router.post('/u/signup', User.signup)
router.post('/u/verify', User.verify)
router.post('/u/update', User.update)

// app
router.get('/signature', App.signature)

module.exports = router