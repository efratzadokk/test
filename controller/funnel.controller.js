const service = require('../services/funnel.service')


/////////////////this func is't used

duplicateFunnelById = async (req, res) => {
    let funnelId = req.params.funnelId;
    try {
        const funnel = await service.duplicateFunnelById(funnelId)// await saveDataFunnels(funnelToSave, currentUser, funnelName, funnelUrl);
        console.log("controller---", funnel)
        res.status(200).json(funnel);
    } catch (error) {
        res.status(500).send("controller-err:",error);
    }
};


deleteFunnelById = async (req, res) => {
    console.log("delete funnel......")
    try {
        const funnelId = req.params.funnelId
        console.log("funnelId: ", funnelId)
        const funnel = await service.deleteFunnelById(funnelId)
        console.log("funnel: ", funnel)

        if (funnel)
            res.status(200).json({ "deleted ": funnel })
        // res.send(200,{ massage: "deleted" })
    }
    catch (err) {
        res.status(500).send(err)
        // res.send(500, err.massage)
    }
}

getAllFunnelsByUserId = async (req, res) => {
    try {
        console.log("getAllFunnelsByUserId!!")
        const userId = req.params.userId
        console.log(userId)
        const allFunnels = await service.getAllFunnelsByUserId(userId)
        if (allFunnels) {
            console.log("all funnels: ", allFunnels)
            res.status(200).json({ "funnels: ": allFunnels })
        }
    } catch (err) {
        res.status(500).send(err.massage)
    }
}

createFunnel = async (req, res) => {
    // let currentUser = await User.findOne({ _id: req.params.uId });
    // console.log(currentUser._id)
    // console.log(req.body)
    let userId = req.params.uId
    let funnelToSave = req.body.json;
    let funnelUrl = req.body.url;
    let funnelName = req.params.funnelName;
    try {
        result = await service.createFunnel({ data: { userId, funnelToSave, funnelUrl, funnelName } });
        res.json({ "new funnel: ": result })
    } catch (error) {
        res.send(err.massage)
    }
};

getFunnelByName = async (req, res) => {
    try {
        const userId = req.params.uId
        const funnelName = req.params.funnelName
        const funnel = await service.getFunnelByName(userId, funnelName)
        console.log("get funnel:",funnel)
        if (funnel)
            res.status(200).json(funnel)
    } catch (err) {
        res.send(err.message)
    }

}

updateFunnelDetails = async (req, res) => {
    // let currentUser = await User.findOne({ _id: req.params.uId });
    let userId = req.params.uId;
    let funnelId = req.params.funnelId;
    let funnelToUpdate = req.body;
    try {
        const funnel =await service.updateFunnelDetails(userId, funnelId, funnelToUpdate);
        console.log("funnel:", funnel)

        res.json(funnel);
    } catch (error) {
        res.send(error.message);
    }
};

module.exports = {
    deleteFunnelById,
    getAllFunnelsByUserId,
    createFunnel,
    getFunnelByName,
    updateFunnelDetails,
    duplicateFunnelById
};