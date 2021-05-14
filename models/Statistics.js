const mongoose = require('mongoose')

const statisticSchema = mongoose.Schema({
    idCard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    },
    cardName: { type: String },
    isDelete:{ type: Boolean},
    activeViewer:{type: Number},
    viewsCnt: { type: Number },
    allDatesViews:{type: Array},
    socialMediaCnt: { type: Number },
    allDateSocialMedia:{type: Array},
    callMeCnt: { type: Number },
    allDatesCallMe:{type: Array},
    emailCnt: { type: Number },
    allDatesEmail:{type: Array},
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