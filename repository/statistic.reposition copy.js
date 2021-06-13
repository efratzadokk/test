const { models } = require("mongoose");


saveObject = (obj) => {
    return new Promise(async (resolve, reject) => {

        try {
            const savedObj = await obj.save()
            resolve(savedObj);
        }
        catch (err) {
            reject(err);
        }

    })

}


findObject = (model, filter) => {
    return new Promise(async (resolve, reject) => {
        try {

            const doc = await model.find(filter)
            resolve(doc)
        }
        catch (err) {
            reject(err)
        }
    })
}


findObjectAndUpdate = (model, filterArr) => {
    return new Promise(async (resolve, reject) => {
        try {

            const doc = await model.findOneAndUpdate(...filterArr)
            resolve(doc)
        }
        catch (err) {
            reject(err)
        }
    })
}

findObjectByIdAndUpdate = (model, id, optionsArr) => {
    return new Promise(async (resolve, reject) => {
        try {

            const doc = await model.findByIdAndUpdate(id, ...optionsArr)
            resolve(doc)
        }
        catch (err) {
            reject(err)
        }
    })
}




module.exports = { saveObject, findObject, findObjectAndUpdate, findObjectByIdAndUpdate }