const connection = require('./connection')

function getFish(db = connection) {
  return db('fish').select()
}

function getSingleFish(id, db = connection) {
  return db('fish').select().where('id', id)
}

function addFish(fish, db = connection) {
  return db('fish')
    .insert({ species: fish })
    .then((id) => getSingleFish(id[0]))
}

module.exports = {
  getFish,
  addFish,
}
