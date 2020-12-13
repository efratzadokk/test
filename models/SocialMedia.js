const mongoose = require('mongoose')

const socialMediaSchema = mongoose.Schema({
    name: { type: String },
    card: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SocialMedia",
    },
    url: {
        type: String
    },
    icon: {
        type: String
    },
    show: {
        type: Boolean
    }
    
})

module.exports = mongoose.model('SocialMedia', socialMediaSchema)