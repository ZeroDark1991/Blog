const errorMap = require('../../config/error-map')

class APIError {
  constructor(type) {
    if (type) {
      return errorMap[type] ? errorMap[type] : errorMap.unkonwn
    }
    else {
      return errorMap.unkonwn
    }
  }
}

module.exports = APIError