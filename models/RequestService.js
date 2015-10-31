var mongoose = require('mongoose');

var RequestServiceSchema = new mongoose.Schema({
  RequestedService: {required: true, type:String},
  description: {required: true, type:String},
  requested: Date,
  completed: Date,
  email: {required: true, unique: true, type: String, lowercase: true, trim: true},
  phone: {required: true, type: Number},
  budget: Number,
  postedBy: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  messages: [{
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    body: String,
    email: {required: true, unique: true, type: String, lowercase: true, trim: true}
  }]
});

mongoose.model('RequestService', RequestServiceSchema);
