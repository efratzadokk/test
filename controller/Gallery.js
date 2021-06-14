const Gallery = require('../models/gallery.js');

saveGallerys = (gallery) => {
    return new Promise(async (resolve, reject) => {
        let gallerys = []
        console.log("inside Gallery !")
        try {
            Promise.all(
                gallery.map(async (galleryIndex) => {

                    //for copy gallery
                    let temp = new Gallery();
                    let newGallery = new Gallery(galleryIndex);
                    newGallery._id=temp._id

                    await newGallery.save()
                    gallerys.push(newGallery)
                })).then(() => {
                    resolve(gallerys)
                })

        } catch (error) {
            console.log("reveiw errore: -", error)
            reject(error);
        }
    });
}

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

