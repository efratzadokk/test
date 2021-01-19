const mongoose = require('mongoose')

const videoSchema = mongoose.Schema({
    videoShow: { type: Boolean },
    titleVideo: { type: String },
    codeHtmlIframe: { type: String },
    videoCard: {
        playing: { type: Boolean },
        playbackRate: { type: Number },
        url: { type: String },

    },
})

module.exports = mongoose.model('Video', videoSchema)