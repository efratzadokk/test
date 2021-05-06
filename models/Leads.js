const mongoose = require('mongoose')

const leadSchema = mongoose.Schema({
    title:{ type: String },
    contect:{ type: String },
    color: { type: String },
    textAlign:{ type: String },
    src:{ type: String },
    srcName:{ type: String },
    logoTitle:{ type: String } 
})
module.exports = mongoose.model('Leads', leadSchema)