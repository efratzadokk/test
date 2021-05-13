const mongoose = require('mongoose')

const leadSchema = mongoose.Schema({
    idCard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    },
    title:{ type: String },
    contect:{ type: String },
    color: { type: String },
    textAlign:{ type: String },
    src:{ type: String },
    srcName:{ type: String },
    logoTitle:{ type: String },
    isDelete:{ type: Boolean}

})
module.exports = mongoose.model('Leads', leadSchema)