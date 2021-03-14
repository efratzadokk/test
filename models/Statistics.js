const mongoose = require('mongoose')

const stasSchema = mongoose.Schema({
    ips:{type:String}
})
module.exports = mongoose.model('Stastistic', stasSchema)