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

updateSocialMedia = (socialMediaList) => {
    return new Promise(async (resolve, reject) => {
        console.log("inside update social Media !")
        let newSocialMediaList=[];
        let newSocialMedia;
        try {
            await Promise.all(
                socialMediaList.map(async (socialMedia) => {
                    if (socialMedia._id) {
                        newSocialMedia=await SocialMedia.findByIdAndUpdate(
                            socialMedia._id,
                            socialMedia,
                            { new: true },
                            (err, newSocialMedia)=>{
                                if(err) reject(err);
                                newSocialMediaList.push(newSocialMedia._doc);
                            }
                        )
                    }
                    else{
                        newSocialMedia=new SocialMedia(socialMedia)
                        newSocialMedia.save((err,newSM)=>{
                            
                            if(err) reject(err);
                            newSocialMediaList.push(newSM._doc);
                        })
                    }
                })).then(() => {
                    console.log("newSocialMedia",newSocialMedia)
                }).then(() => {
                    resolve(newSocialMediaList)
                })
        } catch (error) {
            console.log("SocialMedia errore: -", error)
            reject(error);
        }
    });
}

// updateSocialMedia = (socialMedia) => {
//     return new Promise(async (resolve, reject) => {
//         console.log("inside update SocialMedia !")
//         try {
//             Promise.all(
//                 socialMedia.map(async (socialIndex) => {
//                     if(socialIndex._id!=null){
//                          SocialMedia.findByIdAndUpdate(
//                         socialIndex._id,
//                         socialIndex,
//                         { new: true })
//                     }
                   
//                 })).then(() => {
                    
//                 }).then(()=>{
//                     console.log("------------------");
//                     resolve("update")
//                 })
//         } catch (error) {
//             console.log("socialMedia errore: -", error)
//             reject(error);
//         }
//     });
// }
module.exports = {
    saveSocialMedias,
    updateSocialMedia
}