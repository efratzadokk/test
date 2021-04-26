const mongoose = require('mongoose')

const stasSchema = mongoose.Schema({
    idCard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    },
    viwesCnt: { type: Number },
    socialMediaCnt: { type: Number },
    callMeCnt: { type: Number },
    emailCnt: { type: Number },

    actives: [
        {
            country: { type: String },
            ip: { type: String },
            deviceType: { type: String },
            browser: { type: String },
            languageBrowser: { type: String },
            date: {
                type: Date,
                default: Date.now()
            }
        }
    ]
})
module.exports = mongoose.model('Stastistic', stasSchema)