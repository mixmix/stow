
exports.up = function(knex, Promise) {

  console.log('create table')

  return knex.schema.createTableIfNotExists('feedback', function(table) {
      table.increments('id')
      table.integer('userId')
      table.integer('listingId')  // this lets you find listing and poster
      table.string('comment')
      table.integer('rating')
      table.timestamps()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('feedback').then(function () {
    console.log('feedback table was dropped')
  })
};
