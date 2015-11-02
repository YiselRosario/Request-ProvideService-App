var mongoose = require('mongoose');

var ProvideSchema = new mongoose.Schema({
  ProvidedService: {required: true, type:String},
  description: {required: true, type:String},
  avilableDates: Date,
  thirdEmail: String,
  thirdPhone: Number,
  serviceCost: Number,
  url: String,
  postedBy: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  messagesTwo: [{
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    body: String
  }]
});

mongoose.model('Provide', ProvideSchema);
