const mongoose = require('mongoose')

const gallerySchema = mongoose.Schema({
  
    src:{ type: String },
    srcName: { type: String },
    thumbnail: { type: String },
    thumbnailWidth: { type: Number },
    thumbnailHeight: { type: Number },
    caption:{ type: String },
    isDeleted:{ type: Boolean}
})

module.exports = mongoose.model('Gallery', gallerySchema)