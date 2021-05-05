const mongoose = require('mongoose')

const socialMediaSchema = mongoose.Schema({
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