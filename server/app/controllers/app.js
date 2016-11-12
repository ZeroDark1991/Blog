'use strict'

const APIError = require('./api-error')

exports.signature = function*(next) {
  // this.body = {
  //   sucess: true,
  //   signature: 'sign%ef09ac09234'
  // }
  throw new APIError('unsigned_in')
}