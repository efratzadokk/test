const Reveiw = require('../models/Reveiw.js');


saveReveiw = (reveiw) => {
    return new Promise(async (resolve, reject) => {
        console.log("inside Reveiw")
        try {
            let newReveiw = new Reveiw(reveiw);
            newReveiw.save().then((reveiw_db) => {
                resolve(reveiw_db);
            });

        } catch (error) {
            console.log("reveiw errore: -", error)
            reject(error);
        }
    });
}

updateReveiw = (reveiw) => {
    return new Promise(async (resolve, reject) => {
        try {
            Reveiw.findByIdAndUpdate(
                reveiw._id,
                reveiw,
                { new: true },
                (err, n_reveiw) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    resolve(n_reveiw);
                }
            )
        } catch (error) {
            console.log("reveiw errore: -", error)
            reject(error);
        }
    });
}


module.exports = {
    saveReveiw,
    updateReveiw
}