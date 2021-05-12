const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
    timeCreated: {
        type: Date,
        default: new Date()
    },
    timeUpdate: {
        type: Date,
        default: new Date()
    },
    valid:[{type: String}],
    isDelete:{ type: Boolean },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    cardName: { type : String , required : true},
    fullName: {
        title: { type: String },
        show: { type: Boolean }
    },
    role: {
        title: { type: String },
        show: { type: Boolean }
    },
    buttons: {
        callMe: {
            title: { type: String },
            show: { type: Boolean },
            iconShow: { type: Boolean },
            titleShow: { type: Boolean },
            textAlign: { type: Boolean },
            reverse:  { type: Boolean },
        },
        contact: {
            title: { type: String },
            show: { type: Boolean },
            iconShow: { type: Boolean },
            titleShow: { type: Boolean },
            textAlign: { type: Boolean },
            reverse:  { type: Boolean },
        }
    },
    socialMediaSpace: {
        column: { type: Number }
    },
    sectionExpandeds: {
        type: Array
    },
    section: {
        uuid: { type: String },
        about: {
            title: { type: String },
            show: { type: Boolean },
            titleShow: { type: Boolean },
            content: { type: String },
            index: { type: Number }
        },
        gallery: {
            title: { type: String },
            show: { type: Boolean },
            titleShow: { type: Boolean },
            content: { type: String },
            index: { type: Number }
        },
        video: {
            title: { type: String },
            show: { type: Boolean },
            titleShow: { type: Boolean },
            content: { type: String },
            index: { type: Number }
        },
        reviews: {
            title: { type: String },
            show: { type: Boolean },
            titleShow: { type: Boolean },
            content: { type: String },
            index: { type: Number }
        }
    },
    emailForm: {
        title: {
            title: { type: String },
            show: { type: Boolean },
        },
        button: {
            title: { type: String },
            show: { type: Boolean },
        },
        name:{
            title: { type: String },
            show: { type: Boolean }
        },
        email:{
            title: { type: String },
            show: { type: Boolean }
        },
        mobile: {
            title: { type: String },
            show: { type: Boolean }
        },
        message: {
            title: { type: String },
            show: { type: Boolean }
        },
    },
    socialMedia: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SocialMedia'
    }],
    statistic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stastistic'
    },
    vCardStyle: {
        fontFamily: { type: String },
        favIcon: {
            title: { type: String },
            src: { type: String },
            srcName: { type: String },
        },
        cover: {
            position: {
                x: { type: Number },
                y: { type: Number }
            },
            size: {
                width: { type: String },
                height: { type: String }
            },
            video: { type: Boolean },
            borderColor: { type: String },
            borderWidth: { type: String },
            mobile: {
                src: { type: String },
                srcName: { type: String }
            },
            desktop: {
                src: { type: String },
                srcName: { type: String }
            },
        },
        profile: {
            position: {
                x: { type: Number },
                y: { type: Number }
            },
            size: {
                width: { type: String },
                height: { type: String }
            },
            src: { type: String },
            srcName: { type: String },
            borderColor: { type: String },
            borderWidth: { type: String },
            top: { type: String },
        },
        logo: {
            position: {
                x: { type: Number },
                y: { type: Number }
            },
            size: {
                width: { type: String },
                height: { type: String }
            },
            src: { type: String },
            srcName: { type: String },
            borderColor: { type: String },
            borderWidth: { type: String },
            top: { type: String },
            left: { type: String },
            show: { type: Boolean },
        },
        body: {
            mobile: {
                src: { type: String },
                srcName: { type: String },
                top: { type: String }
            },
            desktop: {
                src: { type: String },
                srcName: { type: String },
                top: { type: String }
            }
        },
        bodyContainer: {
            top: { type: String },
            left: { type: String },
            width: { type: String },
            borderRadius: { type: String },
            mobile: {
                top: { type: String }
            },
            desktop: {
                top: { type: String }
            }
        },
        wrapCoverElements: {
            height: {
                width: { type: String },
                height: { type: String }
            }
        },
        fullName: {
            direction: { type: String },
            textAlign: { type: String },
            font: { type: String },
            mobile: {
                color: { type: String },
            },
            desktop: {
                color: { type: String }
            }
        },
        role: {
            direction: { type: String },
            textAlign: { type: String },
            font: { type: String },
            mobile: {
                color: { type: String },
            },
            desktop: {
                color: { type: String }
            }
        },
        buttons: {
            top: { type: String },
            callMe: {
                background: { type: String },
                border: { type: String },
                borderRadius: { type: String },
                color: { type: String },
                reverse: { type: Boolean }
            },
            contact: {
                background: { type: String },
                border: { type: String },
                borderRadius: { type: String },
                color: { type: String },
                reverse: { type: Boolean }
            }
        },
        socialMediaSpace: {
            mobile: {
                flexWrap: { type: String },
                top: { type: String }
            },
            desktop: {
                top: { type: String }
            },

        },
        socialMedia: {
            size: { type: String },
            sizeFill: { type: String },
            borderColor: { type: String },
            borderWidth: { type: String },
            borderRadius: { type: String },
            background: { type: String },
            color: { type: String },
        },
        section: {
            top: { type: String },
            about: {
                color: { type: String },
                font: { type: String },
                textAlign: { type: String }
            },
            gallery: {
                color: { type: String },
                font: { type: String },
                textAlign: { type: String }
            },
            video: {
                color: { type: String },
                font: { type: String },
                textAlign: { type: String }
            },
            reviews: {
                color: { type: String },
                font: { type: String },
                textAlign: { type: String }
            },
        },
        emailForm: {
            background: { type: String },
            title: {
                color: { type: String },
                font: { type: String },
                textAlign: { type: String }
            },
            button: {
                color: { type: String },
                font: { type: String },
                textAlign: { type: String },
                background: { type: String },
            },
            input:{
                background:{ type: String },
                textAlign:{ type: String },
                color:{ type: String },
            }
        },
        videoStyle: {
            position: {
                x: { type: Number },
                y: { type: Number }
            },
            size: {
                width: { type: String },
                height: { type: String }
            },
            video: { type: Boolean },
            src: { type: String },
            srcName: { type: String },
            showTitle: { type: Boolean },
            borderColor: { type: String },

        },
    },
    reviewsStyle: {
        arrowsColor: { type: String },
    },
    galleryStyle: {
        design: { type: String },
        color: { type: String },
        fade: { type: Boolean },
        autoPlay: { type: Number },
        margin: { type: Number },
        rowHeight: { type: Number },
        maxRows: { type: Number }
    },
    reviewsList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reveiw'
    }],
    galleryList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gallery'
    }],
    lead: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Leads'
    },
});


cardSchema.pre('save', function(next){
    const card=this
    card.cardName=card.cardName.replace(/[/\s.]/g, '')   
    next()
})

module.exports = mongoose.model("Card", cardSchema);
