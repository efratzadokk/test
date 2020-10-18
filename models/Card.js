const mongoose = require("mongoose");

const cardSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
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
  },
  numFillsocialMedia:{ type: Number },
  numSocialMedia: { type: Number },
  socialMedias: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SocialMedia",
    }
  ],


  vCardStyle: {
    coverImg: { type: String },
    bodyColor: { type: String },
    logoImg: { type: String },
    logoShape: { type: String },
    profileImg: { type: String },
    profileImgShape: { type: String },
    fullNametitleColor: { type: String },
    ruletitleColor: { type: String },
    mobiletitleColor: { type: String },
    mobiletitle: { type: String },
    mobileIconColor: { type: String },
    socialMediaIconColor: { type: String },
    socialMediaTitleIconColor: { type: String },
    socialMediaIconShape: { type: String },
    fullNameShow: { type: Boolean },
    ruleShow: { type: Boolean },
    mobileShow: { type: Boolean },
    profileShow: { type: Boolean },
    mobileIconShow: { type: Boolean },
    aboutShow: { type: Boolean },
    personalMassegeShow: { type: Boolean },
    bodyColorDesktop: { type: String },
    fullNametitleColorDesktop: { type: String },
    ruletitleColorDesktop: { type: String },
    socialMediaIconColorDesktop: { type: String },
    socialMediaTitleIconColorDesktop: { type: String },

  }
});

module.exports = mongoose.model("Card", cardSchema);
