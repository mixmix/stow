
exports.up = function(knex, Promise) {

  console.log('create table')

  return knex.schema.createTableIfNotExists('listings', function(table) {
      table.increments('id')
      table.string('heading')
      table.integer('listetId')
      //table.integer('renter_ID')
      // need to add a Join Table : 
      //  - listing_renters
      //    id, listingId, userId, [state]
      //    1   23         3       active
      //    2   23         4       active
      table.string('suburb')
      table.string('streetName')
      table.string('streetNumber')
      table.string('city')
      table.string('country')
      table.string('size')
      table.text('description')
      //table.float('price')  this is not accurate enough
      // instead, use either
      //  - all prices are table.integer and in cents  <<< use this
      //  - use full decimal column table.decimal 
      //
      //table.boolean('isNegotiable')  // if this isn't MVP, add in a later migration
      table.string('url')
      //table.string('startDate')
      //table.string('endDate')
      //talle.datetime('stateDate')
      table.boolean('isAvailabile')
      table.timestamps()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('listings').then(function () {
    console.log('users table was dropped')
  })
};
