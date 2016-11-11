'use strict'

exports.signature = function*(next) {
  this.body = {
    sucess: true,
    signature: 'sign%ef09ac09234'
  }
}