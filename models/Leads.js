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
    logo:{ type: String } 
})
module.exports = mongoose.model('Leads', leadSchema)