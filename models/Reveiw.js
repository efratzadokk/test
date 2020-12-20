const mongoose = require('mongoose')

const reveiwSchema = mongoose.Schema({
    IndexReveiws: { type: Number },
    profileShow: { type: Boolean },
    roleShow: { type: Boolean },
    reveiwShow: { type: Boolean },
    titleReveiws: { type: String },
    reveiwsList: [{
        reveiwsDetails: {
            full_name: { type: String },
            role: { type: String },
            message_reveiws: { type: String },
        },
        reveiwsStyle: {
            bodyReveiws: {
                background: { type: String },
                textAlign: { type: String }
            },

            profile_reveiws: {
                backgroundImage: { type: String },
                backgroundSize: { type: String },
                position: { type: String },
                width: { type: String },
                height: { type: String },
                border: { type: String },
                borderColor: { type: String },
                borderRadius: { type: String },
                zIndex: { type: Number }
                indexFile:{ type: Number }
            },
            input_card_fullName: {
                color:{ type: String },
                font: { type: String },
                letterSpacing:{ type: String },
                textTransform:{ type: String },
                fontSize:{ type: String },

            },
            input_card_rule: {
                color: { type: String },
                font:{ type: String },
                letterSpacing:{ type: String },
                fontSize: { type: String },
                marginTop: { type: String },

            },
            message_reveiws_background: {
                background: { type: String },
                width: { type: String },
                fontSize: { type: String },
                border:{ type: String },
                color: { type: String },
                lineHeight: { type: Number },
                height: { type: String }
            },
            label_reveiws_background: {
                textAlign:{ type: String },
                background: { type: String },
                width: { type: String },
                fontSize: { type: String },
                border: { type: String },
                borderColor:{ type: String },
                borderRadius: { type: String },
                color: { type: String },
                minHeight: { type: String },
                maxWidth: { type: String },
                wordWrap:{ type: String },
            },
            buttonReveiws: {
                width: { type: String },
                color:{ type: String },
                background: { type: String },
                borderRadius: { type: String },
                fontSize: { type: String },
                textAlign: { type: String },
                height: { type: String },
            }
        }
    }]
})

module.exports = mongoose.model('Reveiw', reveiwSchema)