const mongoose = require('mongoose')

const reveiwSchema = mongoose.Schema({
    idCard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    },
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
})

module.exports = mongoose.model('Reveiw', reveiwSchema)