var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Request = mongoose.model('Request');
var User = mongoose.model('User');
var jwt = require('express-jwt');
var auth = jwt({
  userProperty:'payload',
  secret:'secret'
});

//PUT - EDIT REQUEST
router.put('/', function(req, res, next){
  //console.log(req.body.reviewId);
  var newRequest = req.body;
  console.log(newRequest.requestId);
  Request.update({_id: req.body.requestId}, newRequest, function(err, result){
    if(err)return next(err);
    if(!result) return next({err:"The Service Request was not found."});
    res.send(result);
  });
});

//GET REQUEST BY ID TO DISPLAY.
router.get('/:id', function(req, res, next){
  Request.findOne({_id: req.params.id}, function(err, result){
    if(err) return next(err);
    if(!result) return next({err: "Could not find that Request"});
    res.send(result);
  });
});

//GET Request from data Base.
router.get('/', function(req, res, next){
  Request.find({}, function(err, result){
    if(err) return(err);
    res.send(result);
  });
});

// POST Request Service Form to the Data Base.
router.post('/', auth, function(req, res, next){
  console.log(req.body);
  var request = new Request(req.body);
      request.requested = new Date();
      request.save(function(err, result){
        if(err) return next(err);
        res.send(result);
      });
    });




module.exports = router;
