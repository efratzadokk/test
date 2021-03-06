const mongoose = require('mongoose')

const funnelSchema = mongoose.Schema({
  name: String,
  json:String,
  url:String,
  // date:Date,
  date:{ type: Date, default: Date.now },
  lastUpdate:{ type: Date, default: Date.now },
  viewsNumber:{ type: Number, default: 0 },
  count:Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = mongoose.model('Funnels', funnelSchema)
