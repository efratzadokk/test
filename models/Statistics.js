const mongoose = require('mongoose')

const statisticSchema = mongoose.Schema({
    idCard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    },
    dateCreated:{type: Date },
    cardName: { type: String },
    isDelete:{ type: Boolean},
    allDatesViews:{type: Array},
    allDateSocialMedia:{type: Array},
    allDatesCallMe:{type: Array},
    allDatesEmail:{type: Array},
    activeViewer:{type: Number, default: 0},
    viewsCnt: { type: Number, default: 0 },
    socialMediaCnt: { type: Number, default: 0 },
    callMeCnt: { type: Number, default: 0 },
    emailCnt: { type: Number, default: 0 },
    actives:
    {
        country: [{
            name: { type: String },
            sum: { type: Number, default: 0 },
            dates: [{ type: Date }]
        }],
        operationType: [{
            name: { type: String },
            sum: { type: Number, default: 0 },
            dates: [{ type: Date }]
        }],
        browser: [{
            name: { type: String },
            sum: { type: Number, default: 0 },
            dates: [{ type: Date }]
        }],
        dvices: [{
            name: { type: String },
            sum: { type: Number, default: 0 },
            dates: [{ type: Date }]
        }]
    }
})
module.exports = mongoose.model('Stastistic', statisticSchema)
