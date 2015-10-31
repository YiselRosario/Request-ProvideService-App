var mongoose = require('mongoose');

var ProvideServiceSchema = new mongoose.Schema({
  ProvidedService: {required: true, type:String},
  description: {required: true, type:String},
  avilableDates: Date,
  email: {required: true, unique: true, type: String, lowercase: true, trim: true},
  phone: {required: true, type: Number},
  serviceCost: Number,
  postedBy: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  messages: [{
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    body: String,
    email: {required: true, unique: true, type: String, lowercase: true, trim: true}
  }]
});

mongoose.model('ProvideService', ProvideServiceSchema);
