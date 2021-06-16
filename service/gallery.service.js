const Gallery = require('../models/gallery.js');
const repository = require('../repository/repository');

saveGallerys = (gallery) => {
    return new Promise(async (resolve, reject) => {
        let gallerys = []
        try {
            Promise.all(
                gallery.map(async (social) => {
                    //for copy card
                    let newSocial = new Gallery(social);
                    await repository.saveObject(newSocial);
                    await gallerys.push(newSocial);

                })).then(() => {
                    resolve(gallerys)
                })

        } catch (error) {
            reject(error.message);
        }
    });
}
// saveGallerys = (gallery) => {
//     return new Promise(async (resolve, reject) => {
//         let gallerys = []
//         console.log("inside Gallery !")
//         try {
//             Promise.all(
//                 gallery.map(async (galleryIndex) => {

//                     //for copy gallery
//                     let temp = new Gallery();
//                     let newGallery = new Gallery(galleryIndex);
//                     newGallery._id=temp._id

//                     await newGallery.save()
//                     gallerys.push(newGallery)
//                 })).then(() => {
//                     resolve(gallerys)
//                 })

//         } catch (error) {
//             console.log("reveiw errore: -", error)
//             reject(error);
//         }
//     });
// 
// }
// updateGallery = (socialMediaList) => {
//     return new Promise(async (resolve, reject) => {
//         let newSocialMediaList = [];
//         let newSocialMedia;
//         try {
//             await Promise.all(
//                 socialMediaList.map(async (socialMedia) => {
//                     if (socialMedia._id) {
//                         newgallery = await repository.findObjectByIdAndUpdate(SocialMedia,
//                             socialMedia._id,
//                             [socialMedia, { new: true }])
//                         newSocialMediaList.push(newSocialMedia._doc);
//                     }
//                     else {
//                         newgallery = new SocialMedia(socialMedia)
//                         await repository.saveObject(newSocialMedia)
//                         newSocialMediaList.push(newSM._doc);
//                     }
//                 })).then(() => {
//                     console.log("newSocialMedia", newSocialMedia)
//                 }).then(() => {
//                     resolve(newSocialMediaList)
//                 })
//         }
//         catch (error) {
//             reject(error.message);
//         }
//     });
// }
updateGallery = (gallery) => {
    return new Promise(async (resolve, reject) => {
        console.log("inside update gallery !")
        let newgallery=[];
        let newImage;
        try {
            await Promise.all(
                gallery.map(async (image) => {
                    if (image._id) {
                        newImage=await Gallery.findByIdAndUpdate(
                            image._id,
                            image,
                            { new: true },
                            (err, newImage)=>{
                                if(err) reject(err);
                                newgallery.push(newImage._doc);
                            }
                        )
                    }
                    else{
                        newImage=new Gallery(image)
                        newImage.save((err,newI)=>{

                            if(err) reject(err);
                            newgallery.push(newI._doc);
                        })
                    }
                })).then(() => {
                    console.log("newImage",newImage)
                }).then(() => {
                    resolve(newgallery)
                })
        } catch (error) {
            console.log("gallery errore: -", error)
            reject(error);
        }
    });
}

module.exports = {
    saveGallerys,
    updateGallery
}

