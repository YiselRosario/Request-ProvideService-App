var mongoose = require('mongoose');

var RequestSchema = new mongoose.Schema({
  RequestedService: {required: true, type:String},
  description: {required: true, type:String},
  requested: Date,
  completed: Date,
  secondEmail: String,
  secondPhone: Number,
  budget: Number,
  postedBy: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  messages: [{
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    body: String
  }]
});

mongoose.model('Request', RequestSchema);
