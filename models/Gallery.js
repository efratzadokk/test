const mongoose = require('mongoose')

const gallerySchema = mongoose.Schema({
    idCard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    },
    src:{ type: String },
    srcName: { type: String },
    thumbnail: { type: String },
    thumbnailWidth: { type: Number },
    thumbnailHeight: { type: Number },
    caption:{ type: String },
    description:{ type: String },
    isDelete:{ type: Boolean}
})

module.exports = mongoose.model('Gallery', gallerySchema)