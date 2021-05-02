const SocialMedia = require('../models/SocialMedia');


saveSocialMedias = (socialMedia) => {
    return new Promise(async (resolve, reject) => {
        let socialMedias = []
        console.log("inside SocialMedia !")
        try {
            Promise.all(
                socialMedia.map(async (social) => {
                    let newSocial = new SocialMedia(social);
                    await newSocial.save();
                    await socialMedias.push(newSocial);
                   
                })).then(() => {
                    resolve(socialMedias)
                })

        } catch (error) {
            console.log("reveiw errore: -", error)
            reject(error);
        }
    });
}


module.exports = {
    saveSocialMedias
}