var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Provide = mongoose.model('Provide');
var User = mongoose.model('User');
var jwt = require('express-jwt');
var auth = jwt({
  userProperty:'payload',
  secret:'secret'
});

//GET Provide from data Base.
router.get('/', function(req, res, next){
  Provide.find({}, function(err, result){
    if(err) return(err);
    res.send(result);
  });
});

// POST Provide Service Form to the Data Base.
router.post('/', auth, function(req, res, next){
  console.log(req.body);
  var provide = new Provide(req.body);
      // provide. = new Date();
      provide.save(function(err, result){
        if(err) return next(err);
        res.send(result);
      });
    });




module.exports = router;
