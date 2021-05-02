const Reveiw = require('../models/Reveiw.js');


saveReveiws = (reveiw) => {
    return new Promise(async (resolve, reject) => {
        let reveiws = []
        console.log("inside Reveiw !")
        try {
            Promise.all(
                reveiw.map(async (reveiwIndex) => {
                    let newReveiw = new Reveiw(reveiwIndex);
                    await newReveiw.save()
                    reveiws.push(newReveiw);
        
                })).then(() => {
                    resolve(reveiws)
                })

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
    let reveiwId = req.params.reveiwId;
    try {
        await Reveiw.findByIdAndDelete(
            reveiwId,
            (err) => {
                if (err) {
                    console.log(err);
                    console.log("Successful deletion");
                }
                res.status(200).send("delete success");
                // res.send(reveiw)
            });
    } catch (error) {
        console.log("reveiw errore deletion: -", error)
    }
}

module.exports = {
    saveReveiws,
    updateReveiw,
    deleteReveiw,
}