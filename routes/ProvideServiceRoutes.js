var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ProvideService = mongoose.model('ProvideService');
var jwt = require('express-jwt');
var auth = jwt({
  userProperty:'payload',
  secret:'secret'
});




module.exports = router;
