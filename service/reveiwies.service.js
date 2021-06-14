const Reveiw = require('../models/Reveiw.js');
const repository = require('../repository/user.reposition');

saveReveiws = (reveiw) => {
    return new Promise(async (resolve, reject) => {
        let reveiws = []
        try {
            
            Promise.all(
                reveiw.map(async (reveiwIndex) => {
                    let newReveiw = new Reveiw(reveiwIndex);
                    await repository.saveObject(newReveiw)
                    reveiws.push(newReveiw);

                })).then(() => {
                    resolve(reveiws)
                })
        } catch (error) {
            reject(error.message);
        }
    });
}

updateReveiw = (reveiws) => {
    return new Promise(async (resolve, reject) => {
        let newReveiws = [];
        let newReveiw;
        try {
            await Promise.all(
                reveiws.map(async (reveiw) => {
                    if (reveiw._id) {
                        newReveiw = await repository.findObjectByIdAndUpdate(Reveiw,
                            reveiw._id,
                            [reveiw, { new: true }])
                        newReveiws.push(newReveiw._doc);
                    }
                    else {
                        newReveiw = new Reveiw(reveiw)
                        repository.saveObject(newReveiw)
                        newReveiws.push(newR._doc);
                    }
                })).then(() => {
                    console.log("newReveiw", newReveiw)
                }).then(() => {
                    resolve(newReveiws)
                })
        } catch (error) {
            reject(error.message);
        }
    });
}


deleteReveiw = async (reveiwId) => {
    return new Promise(async (resolve, reject) => {
        try {
            await repository.findObjectByIdAndDelete(Reveiw, reveiwId)
            resolve("delete success");

        } catch (error) {
            reject(error.message);
        }
    })

}

module.exports = {
    saveReveiws,
    updateReveiw,
    deleteReveiw,
}