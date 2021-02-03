const Iframe = require('../models/Iframe.js');


saveIframe = (iframe) => {
    return new Promise(async (resolve, reject) => {
        console.log("inside Iframe")
        try {
            let tmpIframe = new Iframe();
            let newIframe = new Iframe(iframe);
            newIframe._id = tmpIframe._id;
            newIframe.save().then((iframe_db) => {
                resolve(iframe_db);
               
            });

        } catch (error) {
            console.log("iframe errore: -", error)
            reject(error);
        }
    });
}



updateIframe = (iframe) => {
    return new Promise(async (resolve, reject) => {
        try {
            Iframe.findByIdAndUpdate(
                iframe._id,
                iframe,
                { new: true },
                (err, n_iframe) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    resolve(n_iframe);
                }
            )
        } catch (error) {
            console.log("iframe errore: -", error)
            reject(error);
        }
    });
}


module.exports = {
    saveIframe,
    updateIframe
}