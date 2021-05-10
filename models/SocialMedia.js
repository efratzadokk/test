const mongoose = require('mongoose')

const socialMediaSchema = mongoose.Schema({
    idCard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    },
    name: { type: String },
    title: { type: String },
    url: { type: String },
    icon: { type: String },
    show: { type: Boolean },
    message: { type: String },
    numClick: { type: Number },
    showConfigurator:{ type: Boolean }
})

module.exports = mongoose.model('SocialMedia', socialMediaSchema)