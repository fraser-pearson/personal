exports.up = function (knex) {
  return knex.schema.createTable('fish', (table) => {
    table.increments('id')
    table.string('species')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('fish')
}
