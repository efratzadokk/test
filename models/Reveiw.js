const mongoose = require('mongoose')

const reveiwSchema = mongoose.Schema({
    src:{ type: String },
    srcName:{ type: String },
    recomandName: { type: String },
    professoin:{ type: String },
    reviewContect:{ type: String },
    textColor:{ type: String },
    backgroundColor:{ type: String },
    showProfile: {type: Boolean },
    showProfessoin: {type: Boolean },
    isDeleted: {type: Boolean },
    textAlign: { type: String },

})

module.exports = mongoose.model('Reveiw', reveiwSchema)