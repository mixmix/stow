// rename called index.js
module.exports = {

  getAllListings: require('./getAllListings'),
  getUserById: require('./getUserById'),
  getUserByListingId: require('./getUserById'),  // make name the same
  getUserByUsername: require('./getUserByUsername'),
  createUser: require('./createUser'),
  saveListing: require('./saveListing'),
  hashPassword: require('./hash'),
  checkPassword: require('./checkPassword'),
  getListingsByLocation: require('./getListingsByLocation'),
  saveFeedback: require('./saveFeedback')

}
