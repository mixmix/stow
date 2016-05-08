var express = require('express')
var router = express.Router()

var utils = require('./utils/utils.index.js')
//var sess // GLOBAL VARIABLE >>> NO

router.post('/login', function (req,res) {
  var sess = req.session
  utils.getUserByUsername(req.body.username)  // ideally give me one record (object) or throw error
    .then(function(userData) {
      if(userData.length === 0)  // can delete this if there's a catch
        res.json('ERR:IUOP') // ? should expect js object
      else {
        utils.checkPassword(req.body.password, userData[0].password, function(err, correct) {
          if(err) console.log(err) 
          else if(correct == true) {
            var id = data[0].user_ID
            sess.user_ID = id
            res.json(id)
          }
          else {
            res.json('ERR:IUOP')
          }
        })
      }
    })
    .catch( err => {} )  // have the promise error if it doesn't find a user
})

router.post('/signup', function (req,res) {
  var sess = req.session
  utils.getUserByUsername(req.body.username)
    .then(function(data) {
      if(data.length > 0)
        res.json('ERR:UIU')
      else {
        utils.hashPassword(req.body.password, function(err,hash) {
          if(err) console.log(err)
          else {
            utils.createUser(req.body, hash)
              .then(function(data) {
                var id = data[0]
                sess.user_ID = id
                res.json(id)
              })
          }
        })
      }
    })
})

//router.get('/checkAuth', function(req,res) {
  //var sess = req.session
  //var authorised = -1
  //if(sess.user_ID) {
    //authorised = sess.user_ID
  //}
  //res.json(authorised)
//})

router.get('/logout', function(req, res) {
  req.session.destroy(function(err) {
    if(err)
      res.json(err)
    else
      res.json('logged out')
  })
})

router.get('/list', function(req, res) {
  utils.getAllListings()
  .then( function(data){
    res.json(data)
  })
})

router.get('/user/:id', function(req, res) {
  // if this is private, check the session to see if it matches the userId
  //auth.isAuthorizedToViewUser(session, id)
  utils.getUserById(req.params.id)
  .then(function(data){
    res.json(data)
    })
} )

router.get('/user/listing/:id', function(req, res) {
  utils.getUserByListingId(req.params.id)
  .then(function(data) {
    res.json(data)
  })
})

router.post('/listing/add', function(req, res){
  // check if there's a session, reject if there isn't
  utils.saveListing(req.body)
  .then(function(){
    res.end()
  })
})

router.get('/listing/:city', function(req, res){
  utils.getListingsByLocation(req.params.city)
  .then(function(data){
    res.json(data)
  })
})

router.post('/feedback/add', function(req, res){
  utils.saveFeedback(req.body)
  .then(function(){
    res.end()
  })
})


module.exports = router
