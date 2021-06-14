const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email: { type: String, require: true, unique: true, match: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ },
    uid: { type: String, require: true },
    username: { type: String },
    imgProfile: { type: String },
    displayName: { type: String },
    isPaying: { type: Boolean, default: false },
    premium: { type: Boolean },
    suspend: { type: Boolean },
    active: {type: Number,default: 0},
    cards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    }],
    marketplaces: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Marketplace'
    }],
})

userSchema.pre('save', function (next) {
    const user = this
    user.username = user.username.replace(/\s/g, "");
    next()
})

module.exports = mongoose.model('User', userSchema)