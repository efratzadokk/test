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

updateSocialMedia = (socialMedia) => {
    return new Promise(async (resolve, reject) => {
        console.log("inside update SocialMedia !")
        try {
            Promise.all(
                socialMedia.map(async (socialIndex) => {
                    if(socialIndex._id!=null){
                         SocialMedia.findByIdAndUpdate(
                        socialIndex._id,
                        socialIndex,
                        { new: true })
                    }
                   
                })).then(() => {
                    
                }).then(()=>{
                    console.log("------------------");
                    resolve("update")
                })
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