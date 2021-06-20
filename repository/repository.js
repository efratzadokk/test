

createObject = (Model, data) => {
    return new Promise(async(resolve, reject) => {
            // const savedDoc = await doc.save()
            Model.create(data, function (err, savedDoc) {
                if (err) return reject(err);
                resolve(savedDoc);
              });
            })         

}
saveObject = (doc) => {
    return new Promise(async(resolve, reject) => {
        try{
             const savedDoc = await doc.save()
             resolve (savedDoc)
        }
        catch(err)
        {
            reject(err)
        }
    })

}

findObject = (Model, filter) => {
    return new Promise(async(resolve, reject) => {
        try {

            const doc = await Model.find(filter)
            resolve(doc)
        } catch (err) {
            reject(err)
        }
    })
}


findObjectAndUpdate = (Model, filterArr) => {
    return new Promise(async(resolve, reject) => {
        try {

            const doc = await Model.findOneAndUpdate(...filterArr)
            resolve(doc)
        } catch (err) {
            reject(err)
        }
    })
}

findObjectByIdAndUpdate = (Model, id, optionsArr) => {
    return new Promise(async(resolve, reject) => {
        try {

            const doc = await Model.findByIdAndUpdate(id, ...optionsArr)
            resolve(doc)
        } catch (err) {
            reject(err)
        }
    })
}

countDoc = (Model) => {
    return new Promise(async(resolve, reject) => {
        Model.countDocuments({}, (err, count) => {
            if (err) {
                reject(err)
            }
            resolve(count)
        })
    })
}

initObj = (Model, data) => {
    return new Promise(async(resolve, reject) => {
        try {
            console.log(Model)
            let obj = new Model(data)
            console.log(obj)
            resolve(obj)
        } catch (err) {
            reject(err)
        }
    })
}

findObjectByIdAndDelete = (Model, id) => {
    return new Promise(async(resolve, reject) => {
        try {
            const doc = await Model.findByIdAndDelete(id)
            resolve(doc)
        } catch (err) {}
    })
}

findObjectById = (Model, objectId) => {
    return new Promise(async(resolve, reject) => {
        try {
            const doc = await Model.findById(objectId)
            resolve(doc)
        } catch (err) {}
    })
}
pushObject = (doc, val) => {
    return new Promise(async(resolve, reject) => {
        try {
            const doc = await doc.push(val)
            resolve(doc)
        } catch (err) {}
    })
}

getCardByName=(Model,filter)=>{  //todo: make this function generic
    return new Promise((resolve, reject) => {
        Model.findOne(filter).populate({ path: "user" })
            .populate({ path: "socialMedia" })
            .populate({ path: 'galleryList' })
            .populate({ path: 'reviewsList' })
            .populate({ path: 'lead' })
            .populate({ path: 'statistic', })
            .exec(async(err, card) => {
                if (err) {
                    reject(err);
                }
                // await newActivIP(card.statistic)
                resolve(card)
            })
    });
}

getObjectWithPopulate=(Model, filter, pathArr)=>{
//[user, socialMedia, galleryList, reviewsList, lead, statistic]
const populateStr=""
    pathArr.forEach(path => {
        populateStr+=`.populate({path.${path}})`
    });
console.log(populateStr)
    return new Promise((resolve, reject) => {
        Model.findOne(filter).populate({ path: "user" })
            .populate({ path: "socialMedia" })
            .populate({ path: 'galleryList' })
            .populate({ path: 'reviewsList' })
            .populate({ path: 'lead' })
            .populate({ path: 'statistic' })
            .exec(async(err, card) => {
                if (err) {
                    reject(err);
                }
                // await newActivIP(card.statistic)
                resolve(card)
            })
        // Model.findOne(filter).populateStr
    });
}

module.exports = {
    saveObject,
    findObject,
    findObjectAndUpdate,
    findObjectByIdAndUpdate,
    countDoc,
    initObj,
    findObjectById,
    pushObject,
    createObject
}
