const Statistic = require('../models/Statistics');
getStatistic = async (req, res) => {
    try {
        let statistic = await Statistic.findOne({ cardName: req.params.cardName ,isDelete:false})
        console.log(statistic);
        res.status(200).json(statistic)
    }
    catch (err) {
        
        console.log(err.message);
    }
}

updateStatistic = (statistic) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (statistic._id !== null) {
                Statistic.findByIdAndUpdate(
                    statistic._id,
                    statistic,
                    { new: true },
                    (err, n_statistic) => {
                        if (err) {
                            console.log(err);
                            reject(err);
                        }
                        resolve(n_statistic);
                    }
                )
            }
            else {
                reject('error');
            }
        } catch (error) {
            console.log("statistic errore: -", error)
            reject(error);
        }
    });
}
setCntSocialMediaAndCall = async (req, res) => {
    try {
        let statistic = await Statistic.findOne({ cardName: req.params.cardName,isDelete:false})
        statistic.socialMediaCnt = req.body.cntSocial
        statistic.callMeCnt = req.body.cntCallMe
        statistic.activeViewer -= 1;
        await statistic.save()
        res.send('the count is update')
    } catch (error) {
        res.send(error.message);
    }

}
module.exports = {
    updateStatistic,
    setCntSocialMediaAndCall,
    getStatistic
}