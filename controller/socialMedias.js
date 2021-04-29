const SocialMedia = require('../models/SocialMedia');


saveSocialMedias = (socialMedia) => {
    return new Promise(async (resolve, reject) => {
        let socialMedias = []
        console.log("inside SocialMedia !")
        try {
            Promise.all(
                socialMedia.map(async (socialIndex) => {
                    let social = new SocialMedia(socialIndex);
                    await social.save()
                    await socialMedias.push(social._id)
                   
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