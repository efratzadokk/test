const common = require('@leadercodes/modelsnpm');
const Funnels = common.models.funnel
const repository = require('../repository/repository');

deleteFunnelById = (funnelId) => {
    console.log("arrive to service")
    return new Promise(async (resolve, reject) => {
        try {
            const funnel = await repository.findObjectByIdAndDelete(Funnels,funnelId)

            console.log("service: funnel- ",funnel)
            console.log("service: funnel- ",funnel)
            resolve(funnel);
        }
        catch (err) {
            reject("service:error- ",err.message)
        }
    })
};
getAllFunnelsByUserId = (userId) => {
    console.log("arrive to service")
    return new Promise(async (resolve, reject) => {
        try {
            const funnels = await repository.findObject(Funnels, { user: userId })
            console.log("funnels: ",funnels )
            // const funnels = await repository.findObject(Funnel, { user: ObjectId(userId) })
            resolve(funnels);

        } catch (err) {
            reject(err.message)
        }
    })
}
getFunnelByName = (userId, funnelName) => {
    console.log("get to service")
    return new Promise(async (resolve, reject) => {
        try {
            const funnel = await repository.findObject(Funnels, { user: userId, name: funnelName })
            console.log("service-funnel:",funnel)
            resolve(funnel)
        } catch (err) {
            reject(err.message)
        }
    })
}
createFunnel = (data) => {
    const funnel = new Funnels({
        name: data.funnelName,
        json: JSON.stringify(data.funnelToSave),
        url: data.funnelUrl,
        date: Date.now(),
        lastUpdate: Date.now(),
        viewsNumber: 0,
        count: 0,
        user: data.userId,
    });
    return new Promise(async (resolve, reject) => {
        try {
            const new_funnel =await repository.createObject(Funnels, funnel)
            resolve(new_funnel)
        } catch (err) {
            reject(err.message)
        }
    })
}
updateFunnelDetails = (userId, funnelId, funnelToUpdate) => {
    return new Promise(async (resolve, reject) => {
        try {
            const funnel =await repository.findObjectAndUpdate(Funnels, { _id: funnelId, user: userId }, funnelToUpdate)
            console.log("get to service:",funnel)

            resolve(funnel)
        } catch (err) {
            reject(err.message)
        }
    })
}
duplicateFunnelById =async (funnelId) => {
    console.log("arrive to service")
    let funnel = await repository.findOneObject(Funnels, {_id:funnelId});
    // let currentUser = await repository.findOneObject(User, funnel.user);
    const new_funnel = new Funnels({
        name: funnel.name,
        json: JSON.stringify(funnel.json),
        url: funnel.url,
        date: Date.now(),
        lastUpdate: Date.now(),
        viewsNumber: 0,
        count: 0,
        user: funnel.user//currentUser._id,
    });
    // console.log("try-newFunnel: ",new_funnel)
    return new Promise(async (resolve, reject) => {
        try {
            const funnel =await repository.createObject(Funnels, new_funnel)
            console.log("success in service---")
            resolve(funnel)
        } catch (err) {
            reject("service-err:",err.message)
        }
    })
}

module.exports={
    getAllFunnelsByUserId,
    duplicateFunnelById,
    deleteFunnelById,
    getFunnelByName,
    createFunnel,
    updateFunnelDetails,
    duplicateFunnelById
  };