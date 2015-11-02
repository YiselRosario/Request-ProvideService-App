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




module.exports = router;
