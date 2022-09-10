exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('fish')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('fish').insert([
        { id: 1, species: 'trout' },
        { id: 2, species: 'snapper' },
        { id: 3, species: 'bass' },
      ])
    })
}
