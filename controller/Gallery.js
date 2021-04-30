const Gallery = require('../models/Gallery.js');

saveGallerys = (gallery) => {
    return new Promise(async (resolve, reject) => {
        let gallerys = []
        console.log("inside Gallery !")
        try {
            Promise.all(
                gallery.map(async (galleryIndex) => {
                    let newGallery = new Gallery(galleryIndex);
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
        try {
            Gallery.findByIdAndUpdate(
                gallery._id,
                gallery,
                { new: true },
                (err, gallery_db) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).send(err);
                    }
                    resolve(gallery_db);
                }
            )
        } catch (error) {
            console.log("reveiw errore: -", error)
            reject(error);
        }
    });
}

module.exports = {
    saveGallerys,
    updateGallery
}

