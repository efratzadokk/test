const mongoose = require('mongoose')

const IframeSchema = mongoose.Schema({

    iframeShow: { type: Boolean },
    titleIframe: { type: String },
    titleIframeShow: { type: Boolean },
    iFrameCard: {
        codeComponentIframe: { type: String },
    },
})

module.exports = mongoose.model('Iframe', IframeSchema)