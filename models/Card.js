const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
    isDelete: { type: Boolean },
    showCallMe:  { type: Boolean },
    cardName: { type: String },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    gallery: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gallery'
    },
    reveiw: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reveiw'
    },
    agentDetails: {
        fullName: { type: String },
        rule: { type: String },
        mobile: { type: String },
        personalEmail: { type: String },
        aboutConnect: { type: String },
        aboutTitle: { type: String },
        personalMassegeTitle: { type: String },
        personalMassegeConnect: { type: String },
        fullNameFooter: { type: String },
        mobileFooter: { type: String },
        personalEmailFooter: { type: String },
        messageFooter: { type: String },
    },
    numFillsocialMedia: { type: Number },
    numSocialMedia: { type: Number },
    socialMedias: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SocialMedia",
        }
    ],

    vCardStyle:
    {
        fullNameShow: { type: Boolean },
        ruleShow: { type: Boolean },
        mobileShow: { type: Boolean },
        profileShow: { type: Boolean },
        mobileIconShow: { type: Boolean },
        aboutShow: { type: Boolean },
        personalMassegeShow: { type: Boolean },
        titleFooterShow: { type: Boolean },
        fullNameFooterShow: { type: Boolean },
        mobileFooterShow: { type: Boolean },
        personalEmailFooterShow: { type: Boolean },
        messageFooterShow: { type: Boolean },
        buttonFooterShow: { type: Boolean },
        footerSendEmailShow: { type: Boolean },
        callMeShow:{ type: Boolean },
        callMeNameShow:{ type: Boolean },
        cover: {
            height: { type: String },
            backgroundImage: { type: String }
        },
        logo: {
            backgroundImage: { type: String },
            backgroundSize: { type: String },
            position: { type: String },
            left: { type: String },
            top: { type: String },
            width: { type: String },
            height: { type: String },
            border: { type: String },
            borderColor: { type: String },
            borderRadius: { type: String }
        },
        profile: {
            backgroundImage: { type: String },
            backgroundSize: { type: String },
            position: { type: String },
            left: { type: String },
            top: { type: String },
            width: { type: String },
            height: { type: String },
            border: { type: String },
            borderColor: { type: String },
            borderRadius: { type: String },
            zIndex: { type: String }
        },
        bodyCardMobile:
        {

            body_card: {
                background: { type: String },
                height: { type: String },
                marginTop: { type: String },
                body_content_top: { type: String }
            },
            input_card_fullName: {
                color: { type: String },
                textAlign: { type: String },
                font: { type: String },
                letterSpacing: { type: String },
                textTransform: { type: String },
                fontSize: { type: String },
                marginTop: { type: String }

            },
            input_card_rule: {
                textAlign: { type: String },
                color: { type: String },
                font: { type: String },
                letterSpacing: { type: String }
            },
            socialMedia: {
                width: { type: String },
                height: { type: String },
                boxShadow: { type: String },
                border: { type: String },
                borderColor: { type: String },
                borderRadius: { type: String },
                borderWidth: { type: String },
                opacity: { type: String },
                background: { type: String },
            },
            socialMediaSpace: {
                css: { type: String },
                bodySpaceCss: { type: String }
            },
            footerMobile: {
                titleFooter: { type: String },
                buttonFooter: { type: String }
            },
            input_footer_title: {
                background: { type: String },
                color: { type: String },
                textAlign: { type: String },
                font: { type: String },
                letterSpacing: { type: String },
                textTransform: { type: String },
                fontSize: { type: String }
            },

            input_footer_button: {
                background: { type: String },
                color: { type: String },
                textAlign: { type: String },
                font: { type: String },
                letterSpacing: { type: String },
                textTransform: { type: String },
                fontSize: { type: String }
            },
            button_footer: {
                width: { type: String },
                color: { type: String },
                background: { type: String }
            },
            background_footer: {
                background: { type: String },
                marginTop: { type: String }

            },
            input_footer_background: {
                background: { type: String },
                width: { type: String },
                height: { type: String }
            },
            message_footer_background: {
                background: { type: String },
                width: { type: String },
                height: { type: String }

            },
            input_about_card: {
                letterSpacing: { type: String },
                color: { type: String },
                background: { type: String },
                border: { type: String },
                outline: { type: String },
                opacity: { type: String },
                borderBottom: { type: String },
                margin: { type: String },
            },

            input_AddContact_button: {
                background: { type: String },
                color: { type: String },
                textAlign: { type: String },
                font: { type: String },
                letterSpacing: { type: String },
                textTransform: { type: String },
                width: { type: String },
                border: { type: String },
                height: { type: String },
                borderRadius: { type: String },
                marginLeft: { type: String },
                marginTop: { type: String },


            },
            button_AddContact: {
                color: { type: String },
                background: { type: String },
            },
            Add_Contact: {
                buttonName: { type: String },
            },
            buttonCallMe:{
                titleName:{ type: String },
            },
            IconbuttonCallMe: {
                color:{ type: String },
                width: { type: String },
              },
              inputBottomCallMe:{
                background:{ type: String },
                color: { type: String },
                textAlign: { type: String },
                font: { type: String },
                letterSpacing:{ type: String },
                fontSize:{ type: String },
                border:{ type: String },
                marginLeft: { type: String },
                marginTop:{ type: String },
               },
               inputBottomCallMeShow:{
                background:{ type: String },
                color: { type: String },
                textAlign: { type: String },
                font: { type: String },
                letterSpacing:{ type: String },
                fontSize:{ type: String },
                border:{ type: String },
                marginLeft: { type: String },
                marginTop:{ type: String },
               },

               callMeBotton:{
                backgroundColor:{ type: String },
                position: { type: String },
                 width: { type: String },
                 bottom:{ type: String }, 
                 borderRadius: { type: String },
                 height: { type: String }, 
                 color: { type: String }, 
                 border: { type: String },
               }
        },
        body_card_desktop: {
            body: {
                background: { type: String },
                minHeight: { type: String },
                display: { type: String },
                justifyContent: { type: String },
                marginTop: { type: String }
            },
            fullname: {
                color: { type: String },
                textAlign: { type: String },
                font: { type: String },
                letterSpacing: { type: String },
                textTransform: { type: String },
                fontSize: { type: String }
            },
            role: {
                color: { type: String },
                textAlign: { type: String },
                font: { type: String },
                letterSpacing: { type: String },
                textTransform: { type: String },
                fontSize: { type: String }
            },
            body_card_desktop_inline: {
                background: { type: String },
                minHeight: { type: String },
                width: { type: String },
                marginTop: { type: String },
                borderRadius: { type: String }
            },
            body_card_desktop_inline_conect: {
                marginTop: { type: String }
            },
            socialMedia: {
                width: { type: String },
                height: { type: String },
                boxShadow: { type: String },
                border: { type: String },
                borderColor: { type: String },
                borderRadius: { type: String },
                borderWidth: { type: String },
                opacity: { type: String },
                background: { type: String },
            },

            footerDesktop: {
                titleFooter: { type: String },
                buttonFooter: { type: String }
            },

            input_footer_title: {
                background: { type: String },
                color: { type: String },
                textAlign: { type: String },
                font: { type: String },
                letterSpacing: { type: String },
                textTransform: { type: String },
                fontSize: { type: String }
            },
            input_footer_button: {
                background: { type: String },
                color: { type: String },
                textAlign: { type: String },
                font: { type: String },
                letterSpacing: { type: String },
                textTransform: { type: String },
                fontSize: { type: String }
            },
            button_footer: {
                width: { type: String },
                color: { type: String },
                background: { type: String }
            },
            background_footer: {
                background: { type: String }
            },
            input_footer_background: {
                background: { type: String },
                width: { type: String }

            },
            message_footer_background: {
                background: { type: String },
                width: { type: String }
            },
        },
        socialMediaSpace: {
            minHeight: { type: String },
            height: { type: String },
            height: { type: String },
            whiteSpace: { type: String },
            overflow: { type: String },
            width: { type: String },
            margin: { type: String },
            marginTop: { type: String },

        },

        cssObjTamplate: {
            cover: { type: String },
            logo: { type: String },
            profile: { type: String },
            input_about_templet: { type: String },
        }

    }

});

module.exports = mongoose.model("Card", cardSchema);
