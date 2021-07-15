


saveObject = (doc) => {
    return new Promise(async (resolve, reject) => {
        try {
            const savedDoc = await doc.save()
            resolve(savedDoc)
        }
        catch (err) {
            reject(err)
        }
    })
}

findOneObject = (Model, filter) => {
    console.log("arrive to repository ")
    // console.log("model: ", Model)
    return new Promise(async (resolve, reject) => {
        try {
            console.log(Model, filter)
            const doc = await Model.findOne(filter)
            console.log("find obj!!")
            resolve(doc)
        }
        catch (err) {
            reject("repo-err:",err)
        }
    })
}
findObject = (Model, filter) => {
    console.log("arrive to repository ")
    console.log("model: ", Model, "  ___  filter: ", filter)
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(Model, filter)
            const doc = await Model.find(filter)
            console.log("find funnel: ", doc)
            resolve(doc)
        }
        catch (err) {
            reject(err)
        }
    })
}
createObject = (Model, data) => {
    return new Promise(async (resolve, reject) => {
        // const savedDoc = await doc.save()
        Model.create(data, function (err, savedDoc) {
            if (err)
                return reject(err);
            console.log("success in repository---")
            resolve(savedDoc);
        });
    })
}
// createObject = (Model, data) => {
//     return new Promise(async (resolve, reject) => {
//         // const savedDoc = await doc.save()
//         console.log("repo--",savedDoc)

//         Model.create(data, function (err, savedDoc) {
//             if (err) return reject(err);
//             console.log("repo--",savedDoc)
//             resolve(savedDoc);
//         });
//     })
// }

findObjectAndUpdate = (Model, filterArr, objToUpdate) => {
    return new Promise(async (resolve, reject) => {
        try {
            const doc = await Model.findOneAndUpdate(filterArr, objToUpdate, { new: true })
            console.log("get to repo")
            resolve(doc)
        } catch (err) {
            reject(err)
        }
    })
}
// findObjectByIdAndDelete = (Model, filter) => {
//     console.log("data-func: ", Model, filterArr)
//     return new Promise(async (resolve, reject) => {
//         // try {
//         //check the syntex
//         await Model.findOneAndDelete(filter, function (err, docs) {
//             if (err) {
//                 console.log("err-delete: ", err)
//                 reject(err)
//             }
//             else {
//                 console.log(`Deleted ${Model}: `, docs);
//                 resolve(docs)
//             }
//         })
//         // console.log("delete:",doc)
//         // resolve(doc)
//         // }
//         // catch (err) {
//         //     reject(err)
//         // }
//     })
// }

findObjectByIdAndUpdate = (Model, id, optionsArr) => {
    return new Promise(async (resolve, reject) => {
        try {
            const doc = await Model.findByIdAndUpdate(id, ...optionsArr)
            console.log("deleted")
            resolve(doc)
        } catch (err) {
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

initObj = (Model, data) => {
    return new Promise(async (resolve, reject) => {
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
    console.log("arrive to repository")
    console.log("model: ", Model)
    return new Promise(async (resolve, reject) => {
        try {
            const doc = await Model.findByIdAndDelete(id)
            console.log(doc)
            resolve(doc)
        } catch (err) { reject(err) }
    })
}

findObjectById = (Model, objectId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const doc = await Model.findById(objectId)
            resolve(doc)
        } catch (err) { }
    })
}
pushObject = (doc, val) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(doc)
            const newDoc = await doc.push(val)
            resolve(newDoc)
        } catch (err) {
            console.log(err)
            reject(err)
        }
    })
}
getAllCards = (Model, userName) => {
    return new Promise((resolve, reject) => {
        console.log("username", userName)
        Model.findOne({ username: userName })
            .populate({
                path: "cards",
                populate: [
                    { path: 'user' },
                    { path: 'socialMedia' },
                    { path: 'galleryList' },
                    { path: 'reviewsList' },
                    { path: 'lead' },
                    { path: 'statistic' }
                ],
                match: { isDelete: false }
            })
            .exec((err, user) => {
                if (err) {
                    reject(err);
                }
                resolve(user.cards)
            })
    });
}

getCardByName = (Model, filter) => {  //todo: make this function generic
    return new Promise((resolve, reject) => {
        Model.findOne(filter).populate({ path: "user" })
            .populate({ path: "socialMedia" })
            .populate({ path: 'galleryList' })
            .populate({ path: 'reviewsList' })
            .populate({ path: 'lead' })
            .populate({ path: 'statistic', })
            .exec(async (err, card) => {
                if (err) {
                    reject(err);
                }
                // await newActivIP(card.statistic)
                resolve(card)
            })
    });

}

getObjectWithPopulate = (Model, filter, pathArr) => {
    //[user, socialMedia, galleryList, reviewsList, lead, statistic]
    const populateStr = ""
    pathArr.forEach(path => {
        populateStr += `.populate({path.${path}})`
    });
    console.log(populateStr)
    return new Promise((resolve, reject) => {
        try {
            Model.findOne(filter).populateStr
        }
        catch (err) {
            console.log(err)
        }
    })
}
getAllObjByParamId = (Model, filter) => {
    return new Promise((resolve, reject) => {
        try {
            Model.find(filter)
        }
        catch (err) {
            console.log(err)
        }
    })
}

module.exports = {
    saveObject,
    findObject,
    findOneObject,
    findObjectAndUpdate,
    findObjectByIdAndUpdate,
    countDoc,
    initObj,
    findObjectById,
    pushObject,
    createObject,
    getAllCards,
    getCardByName,
    findObjectByIdAndDelete
}
