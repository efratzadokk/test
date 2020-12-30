const Gallery = require('../models/Gallery.js');

saveGallery = (gallery) => {
    return new Promise(async (resolve, reject) => {
        try {
            let tmpGalery=new Gallery();
            let newGallery = new Gallery(gallery);
            newGallery._id=tmpGalery._id
            newGallery.save((err,gallery_db)=>{
                if(err){
                    console.log("err galery", err)
                }
                resolve(gallery_db);
            });

        } catch (error) {
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
    saveGallery,
    updateGallery
}

