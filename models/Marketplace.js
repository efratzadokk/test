const mongoose = require('mongoose')

const marketplaceSchema = mongoose.Schema({
    timeCreated: {
        type: Date,
        default: new Date()
    },
    timeUpdate: {
        type: Date,
        default: new Date()
    },
    isDelete: { type: Boolean },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    marketName: { type: String, required: true },
    uuid: { type: String },
    title: {
        title: { type: String },
        show: { type: Boolean }
    },
    description: {
        title: { type: String },
        show: { type: Boolean }
    },
    cards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    }],
    style: {
        font: { type: String },
        color: { type: String },
        alignment: { type: String },
        cover: {
            src: { type: String },
            srcName:{ type: String },
            height: { type: String } 
        },
        logo: {
            src: { type: String },
            srcName:{ type: String },
            borderColor: { type: String }
        }
    }
})
module.exports = mongoose.model('Marketplace', marketplaceSchema)
