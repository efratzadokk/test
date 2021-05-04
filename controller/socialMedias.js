const SocialMedia = require('../models/SocialMedia');


saveSocialMedias = (socialMedia) => {
    return new Promise(async (resolve, reject) => {
        let socialMedias = []
        console.log("inside SocialMedia !")
        try {
            Promise.all(
                socialMedia.map(async (social) => {
                    //for copy card
                    let temp = new SocialMedia();
                    let newSocial = new SocialMedia(social);
                    newSocial._id=temp._id
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