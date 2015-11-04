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

//PUT - EDIT PROVIDE BY ID.
router.put('/', function(req, res, next){
  //console.log(req.body.reviewId);
  var newProvide = req.body;
  //console.log(newProvide.provideId);
  Provide.update({_id: req.body.provideId}, newProvide, function(err, result){
    if(err)return next(err);
    if(!result) return next({err:"Profile was not found to edit."});
    res.send(result);
  });
});

//DELETE PROVIDE from the database.
router.delete('/:id', function(req, res, next){
  Provide.remove({_id: req.params.id}, function(err, result){
    if(err) return next (err);
    res.send();
  });
});

//GET PROVIDE BY ID TO DISPLAY.
router.get('/:id', function(req, res, next){
  Provide.findOne({_id: req.params.id}, function(err, result){
    if(err) return next(err);
    if(!result) return next({err: "Could not find that Profile."});
    res.send(result);
  });
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
      // provide.completed = Date;
      provide.save(function(err, result){
        if(err) return next(err);
        res.send(result);
      });
    });




module.exports = router;
