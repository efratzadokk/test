const Gallery = require('../models/Gallery.js');

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
        try {
            Promise.all(
                gallery.map(async (galleryIndex) => {
                    if (galleryIndex._id !== null) {
                        Gallery.findByIdAndUpdate(
                            galleryIndex._id,
                            galleryIndex,
                            { new: true })
                    }
                })).then(() => {

                }).then(() => {
                    resolve("update")
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

