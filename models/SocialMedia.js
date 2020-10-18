const mongoose = require('mongoose')

const socialMediaSchema = mongoose.Schema({
    name: { type: String },
    card: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SocialMedia",
    },
    url: {
        type: String
    }
    
})

module.exports = mongoose.model('SocialMedia', socialMediaSchema)