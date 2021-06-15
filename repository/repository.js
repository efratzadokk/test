

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


findObject = (Model, filter) => {
    return new Promise(async (resolve, reject) => {
        try {

            const doc = await Model.find(filter)
            resolve(doc)
        }
        catch (err) {
            reject(err)
        }
    })
}


findObjectAndUpdate = (Model, filterArr) => {
    return new Promise(async (resolve, reject) => {
        try {

            const doc = await Model.findOneAndUpdate(...filterArr)
            resolve(doc)
        }
        catch (err) {
            reject(err)
        }
    })
}

findObjectByIdAndUpdate = (Model, id, optionsArr) => {
    return new Promise(async (resolve, reject) => {
        try {

            const doc = await Model.findByIdAndUpdate(id, ...optionsArr)
            resolve(doc)
        }
        catch (err) {
            reject(err)
        }
    })
}

countDoc = (Model) => {
    return new Promise(async (resolve, reject) => {
        Model.countDocuments({}, (err, count) => {
            if (err) {
                reject(err)
            }
            resolve(count)
        })
    })
}

initObj = (model, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(model)
            let obj = new model(data)
            console.log(obj)
            resolve(obj)
        }
        catch (err) {
            reject(err)
        }
    })
}

findObjectByIdAndDelete = (Model, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const doc = await Model.findByIdAndDelete(id)
            resolve(doc)
        }
        catch (err) {
        }
    })
}

module.exports = { saveObject, findObject, findObjectAndUpdate, findObjectByIdAndUpdate, countDoc, initObj }
