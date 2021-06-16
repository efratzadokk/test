// const Statistic = require('../models/Statistics');
const service = require('../service/statistic.service')
// getStatistic = async (req, res) => {
//     try {
//         let statistic = await Statistic.findOne({ cardName: req.params.cardName ,isDelete:false})
//         console.log(statistic);
//         res.status(200).json(statistic)
//     }
//     catch (err) {

//         console.log(err.message);
//     }
// }
getStatistic = async (req, res) => {
    try {
        let statistic = await service.getStatistic(req.params.cardName)
        res.send(statistic)
    }
    catch (err) {
        res.send(err.message)
    }
}


// setCntSocialMediaAndCall = async (req, res) => {
//     try {
//         console.log("+++++++++++", statistic.activeViewer);
//         let statistic = await Statistic.findOne({ _id: req.params.idStatistic, isDelete: false })
//         statistic.socialMediaCnt = req.body.cntSocial
//         statistic.callMeCnt = req.body.cntCallMe
//         await statistic.save()
//         res.send('the count is update')
//     } catch (error) {
//         res.send(error.message);
//     }
// }
setCntSocialMediaAndCall = async (req, res) => {
    try {
        let statistic = await service.setCntSocialMediaAndCall(req.params.idStatistic, req.body)
        res.send(statistic)
    } catch (error) {
        res.send(error.message);
    }
}

module.exports = {
    updateStatistic,
    setCntSocialMediaAndCall,
    getStatistic
}