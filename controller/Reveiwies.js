const Reveiw = require('../models/Reveiw.js');


saveReveiw = (reveiw) => {
    return new Promise(async (resolve, reject) => {
        console.log("inside Reveiw !")
        try {
            let tmpReveiw = new Reveiw();
            let newReveiw = new Reveiw(reveiw);
            newReveiw._id = tmpReveiw._id;
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

deleteReveiw = async (req, res) => {
    let reveiw = req.body;
    try {
        await Reveiw.findByIdAndDelete(
            reveiw._id,
            (err) => {
                if (err) {
                    console.log(err);
                    console.log("Successful deletion");
                }
                res.status(200).send(reveiw);
                // res.send(reveiw)
            });
    } catch (error) {
        console.log("reveiw errore deletion: -", error)
    }
}

module.exports = {
    saveReveiw,
    updateReveiw,
    deleteReveiw,
}