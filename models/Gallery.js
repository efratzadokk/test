const mongoose = require('mongoose')

const gallerySchema = mongoose.Schema({
    idCard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    },
    src:{ type: String },
    srcName: { type: String },
    alt:{ type: String },
    description:{ type: String },
    width:{ type:Number},
    height:{ type:Number},
    isDelete:{ type: Boolean}
})

module.exports = mongoose.model('Gallery', gallerySchema)