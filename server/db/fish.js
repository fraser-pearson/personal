const connection = require('./connection')

function getFish(db = connection) {
  return db('fish').select()
}

module.exports = {
  getFish,
}
