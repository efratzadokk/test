const mongoose = require('mongoose')

const statisticSchema = mongoose.Schema({
    cardName:  { type: String },
    dateCreated: {type: Date},
    activeViewer: { type: Number },
    viewsCnt: { type: Number },
    socialMediaCnt: { type: Number },
    callMeCnt: { type: Number },
    emailCnt: { type: Number },
    actives:
    {
        country: [{
            name: { type: String },
            sum: { type: Number },
            dates: [{ type: Date }]
        }],
        operationType: [{
            name: { type: String },
            sum: { type: Number },
            dates: [{ type: Date }]
        }],
        browser: [{
            name: { type: String },
            sum: { type: Number },
            dates: [{ type: Date }]
        }],
        dvices: [{
            name: { type: String },
            sum: { type: Number },
            dates: [{ type: Date }]
        }]
    }
})
module.exports = mongoose.model('Stastistic', statisticSchema)