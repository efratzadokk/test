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
updateSocialMedia = (socialMedia) => {
    return new Promise(async (resolve, reject) => {
        console.log("inside update SocialMedia !")
        try {
            Promise.all(
                socialMedia.map(async (socialIndex) => {
                    SocialMedia.findByIdAndUpdate(
                        socialIndex._id,
                        socialIndex,
                        { new: true }),
                        (err, n_socialMedia) => {
                            if (err) {
                                console.log(err);
                                reject(err);
                            }
                            resolve(n_socialMedia);
                        }
                }))

        } catch (error) {
            console.log("socialMedia errore: -", error)
            reject(error);
        }
    });
}

module.exports = {
    saveSocialMedias,
    updateSocialMedia
}