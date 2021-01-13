const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    email: { type: String, require: true, unique: true, match: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ },
    uid: { type: String, require: true },
    username: { type: String },
    isPaying: { type: Boolean, default: false },
    premium: { type: Boolean },
    suspend: { type: Boolean },
    cardIndexName: {
        type: Number,
        default: 1
    },
    cards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    }]
})

module.exports = mongoose.model('User', userSchema)